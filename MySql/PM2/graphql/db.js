const mysql = require('mysql2/promise');
const {dbConfig} = require('../config/db.config');
const {testModel} = require('./procedureModel');

const connectionPool = mysql.createPool({
  host:dbConfig.host,
  user:dbConfig.user,
  password:dbConfig.password,
  database:dbConfig.database,
  waitForConnections:true,
  connectionLimit:10,
});


const test = async ()=>{
  const [data] = await connectionPool.query(`select id,email,nick from users`);
  console.log(data)
  return data;
}

const selectTest = async (id,nick)=>{
  var query  = mysql.format(`select id,email,nick from nodejs.users where id = ? and nick = ?`, [id,nick])
  const [data] = await connectionPool.query(query);
  return data;
}

const insertTest = async (id, email, nick)=>{
  var query  = mysql.format (`insert into nodejs.users (id, email, nick, createdAt, updatedAt) values (?,?,?, sysdate(), sysdate())`,
                             [id, email, nick]);  
  const [data] = await connectionPool.query(query);                
  return data;
}

const updateTest = async (nick, id)=>{
  var query  = mysql.format(`update nodejs.users set nick = ? where id = ?`,
                            [nick, id]);
  const [data] = await connectionPool.query(query);
  return data;
}

const deleteTest = async (id)=>{
  var query  = mysql.format(`delete from nodejs.users where id = ?`,
                            [id])
  const [data] = await connectionPool.query(query);
  return data;
}

const proceducreTest = async (id)=>{
  var query  = mysql.format(`call test(?)`,[id])
  const [data] = await connectionPool.query(query);
  
  testModel.test = data[0];

  return testModel.test;
}

module.exports = {
  test: test,
  selectTest: selectTest,
  insertTest: insertTest,
  updateTest: updateTest,
  deleteTest: deleteTest,
  proceducreTest: proceducreTest
}