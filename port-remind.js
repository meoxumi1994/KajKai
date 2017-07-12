"micro-user" : 8080
"micro-store" : 8081
"micro-comment": 8082
"micro-chat": 8083
"micro-socket": 8084
"micro-search": 8085









"view-user": 7070
"view-store": 7071
"view-post": 7072
"view-chat": 7073

// create auth user for new database
use newdatabase
db.createUser(
  {
    user: "admin",
    pwd: "dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu",
    roles: [
      { role: "readWriteAnyDatabase", db: "admin" } ,
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "dbAdminAnyDatabase", db: "admin" },
      "readWrite",
      "userAdmin",
      "dbAdmin"
    ]
  }
)

// create admin, DONE: no need any more
use admin
db.createUser(
  {
    user: "admin",
    pwd: "dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu",
    roles: [
      "readWriteAnyDatabase",
      "userAdminAnyDatabase",
      "dbAdminAnyDatabase"
     ]
  }
)
