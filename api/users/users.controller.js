const usersModel = require("./users.model");

module.exports.createAcc = createAcc;
module.exports.activeUsers = activeUsers;
module.exports.citiesList = citiesList;
module.exports.datesList = datesList;

function createAcc(req, res) {
    return usersModel
        .create(req.body)
        .then(u => res.json(u))
        .catch(e => res.status(500).json(e))
}

function activeUsers(req, res) {
    return usersModel.find({}).then(response => {
        res.json(response.filter(x => x.active == true));
    })
}

function citiesList(req, res) {
    let { letter } = req.body;
    return usersModel.find({}).then(
        response => {
            res.json(response.filter(y => y.city[0] == letter))
        }
    )
}

function datesList( req , res){
    return usersModel.find({}).then(
        response => {
            res.json(response.sort(response.creationAt));
        }
    )
}