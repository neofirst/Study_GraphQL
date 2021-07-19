1. yarn add apollo-server apollo-server-express graphql
1.1 
    "apollo-server": "^2.25.1",
    "apollo-server-express": "^2.25.1",
    버전과 ver 3.x 와는 play ground 형태가 다르다.

2. 테스트 query
2.1. select
query Messages{
  messages {
    id
    text
    userId
    timestamp
  }
}
2.2. select
query Message($id: ID!){
  message(id:$id) {
    id
    text
    userId
    timestamp
  }
}
variable
{
  "userId":"50"
}
2.3. create
mutation Message($text:String!, $userId:ID!){
  createMessage(text:$text, userId: $userId) {
    id
    text
    userId
    timestamp
  }
}
variable
{
  "text":"test",
  "userId":"roy"
}