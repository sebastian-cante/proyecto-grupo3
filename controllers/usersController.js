var fs = require('fs')
var bcrypt = require('bcrypt');
const {check, validationResult, body } = require('express-validator');
const db = require('../db/models')


let controller = {
    register : function(req, res, next) {
        res.render('register');
    },
    create : function(req, res, next){
        let errors = validationResult(req)
        if(errors.isEmpty()){
            db.Users.create({
                user_name : req.body.user,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, 10),
            })
            /*let usersFile = fs.readFileSync('users.json', {encoding : 'utf-8'})
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
         */ res.redirect('/users/login')
        }
        else{
            return res.render('register', {errors : errors.errors})
        }
    },
    logIn : function(req, res, next) {
        res.render('login');
    },
    logued : function(req, res, next){
        let errors = validationResult(req)
        if (errors.isEmpty()){
/*          let usersFile = fs.readFileSync('users.json', {encoding : 'utf-8'})
            let users
            if(usersFile == ""){
                users = []
            }
            else{
                users = JSON.parse(usersFile)
            }
            let userLoging
            for(let i=0; i<users.length; i++){
                if(req.body.email == users[i].email && bcrypt.compareSync(req.body.password, users[i].password)){
                    userLoging = users[i]
                    break
                }
            }
            delete userLoging.password;
            if(userLoging == undefined){
                return res.render('login', {errors : [{msg : "El email o la contraseña son inválidos"}]})
            }
            req.session.userLoggued = userLoging
            
*/          let userLoging
            db.Users.findAll()
                .then(function(users){
                    for (let i = 0; i < users.length; i++) {
                        if(users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password)){
                            userLoging = users[i]
                            break
                        }
                    }
                    if(userLoging == undefined){
                        return res.render('login', {errors : [{msg : "El email o la contraseña son inválidos"}]})
                    }
                    req.session.userLoggued = userLoging
                    res.redirect('../')
                })
            }else {
            return res.render('login', {errors : errors.errors})
        }
    },
    contact : function(req, res, next) {
        res.render('contact');
    },
    logout : function(req, res, next) {
        req.session.destroy()
        res.redirect('/')
    }
    
}


module.exports = controller