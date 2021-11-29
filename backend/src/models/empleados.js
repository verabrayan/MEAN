const {mongoose} = require('../db');



const empleadoSchema = new mongoose.Schema({
    name: {type: String,required: true},
    position: {type: String,required: true},
    office: {type: String,required: true},
    salary: {type:Number,required: true}
},{
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('empleados',empleadoSchema);
