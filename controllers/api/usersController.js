const db = require('../../db/models')

let controller = {
    list : function(req, res){
        db.Users.findAll()
            .then(function(users){
                for(let i = 0; i < users.length; i++){
                    users[i].setDataValue('endpoint', '/api/users/' + users[i].id)
                }
                let response = {
                    meta: {
                        status: 200,
                        count: users.length,
                        url: /api/users
                    },
                    data: {
                        users
                    }
                }
                res.json(response)
            })
    },
    find : function(req, res){
        db.Users.findByPk(req.params.id)
            .then(function(user){
                let response = {
                    userName: user.user_name,
                    email: user.email,
                }
                res.json(response)
            })

    }
}
module.exports = controller