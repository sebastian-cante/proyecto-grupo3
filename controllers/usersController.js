var fs = require('fs')
var bcrypt = require('bcrypt')


let controller = {
    register : function(req, res, next) {
        res.render('register');
      },
    create : function(req, res, next){
        let user = {
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
        }
        let usersFile = fs.readFileSync('users.json', {encoding : 'utf-8'})
        let users
        if(usersFile == ""){
            users = []
        }
        else{
            users = JSON.parse(usersFile)
        }
        users.push(user)
        usersJson = JSON.stringify(users)
        fs.writeFileSync('users.json', usersJson)
        res.redirect('../')
      },
    logIn : function(req, res, next) {
        res.render('login');
      },
    logued : function(req, res, next){
        let usersFile = fs.readFileSync('users.json', {encoding : 'utf-8'})
        let users
        if(usersFile == ""){
            users = []
        }
        else{
            users = JSON.parse(usersFile)
        }
        for(let i=0; i<users.length; i++){
            if(req.body.email == users[i].email && bcrypt.compareSync(req.body.password, users[i].password)){
                res.redirect('../')
            }
            else{
                res.redirect('./login')
            }
        }
    },
    contact : function(req, res, next) {
        res.render('contact');
      }
      
}


module.exports = controller