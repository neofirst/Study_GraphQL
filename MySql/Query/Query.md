1. None Parameter Test
   query{
   test{
   id
   email
   nick
   }
   }

2. Parameter
   query{
   conditionTest(id:1,nick:"1"){
   id
   email
   nick
   }
   }

2.1. Parameter Insert
query{
insertTest(id:8, email:"8@8.com",nick:"8")
}

2.2. Parameter Update
query{
updateTest(nick:"test", id:8)
}

2.3. Parameter Delete
query{
deleteTest(id:8)
}

3. Procedure
   query{
   proceducreTest(id:3){
   id
   email
   nick
   }
   }
