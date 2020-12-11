const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    } ,
    surname : {
        type: String,
        required : true
    },
    active : {
       type:  Boolean
    },
    email : {
        type: String,
        required : true
    },
    city : {
        type : String,
        enum : [
            "Las Palmas de GC" ,
            "Santa Cruz de Tenerife",
            "La Palma",
            "La gomera",
            "Lanzarote"
        ]
    },
    birthday : {
        type: Date,
        trim: true
    },
    creationAt : {
        type: Date,
        trime: true
    }

})


const usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;