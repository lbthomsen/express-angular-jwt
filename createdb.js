
db.users.drop();

db.users.insert({
    username:"admin",
    password: "21232f297a57a5a743894a0e4a801fc3",
    name:"System Administrator",
    email:"hostmaster@bright-things.com",
    admin:true
});

db.users.insert({
    username:"demo",
    password: "fe01ce2a7fbac8fafaed7c982a04e229",
    name:"Demo Account",
    email:"info@bright-things.com",
    admin:false
});

