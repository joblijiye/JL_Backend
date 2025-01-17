const mongoose = require("mongoose")
const {v4 : uuidv4} = require("uuid")

const roleSchema = new mongoose.Schema({
    roleId : {
        type : String,
        default : uuidv4,
        unique : true
    },
    roleName : {
        type : String,
        required : true,
    },
    company : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }
},{_id : false})

const Role = mongoose.model("Role",roleSchema)

module.exports = Role