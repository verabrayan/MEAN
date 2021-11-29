const empleado = require('../models/empleados')

class empleadoCtrl {

    async getEmpleados(){
    const empleados = await empleado.find() 
    return empleados || []
    }

    async getEmpleado(id){
        const Empleado = await empleado.findOne({id})
        return Empleado || []
        }


    async createEmpleado(data){
        //const newUser = new empleado(data)
        //await newUser.save()
        const newEmpleado = await empleado.create(data)
        return newEmpleado|| {}
    }

    async updateEmpleado(id,data){
        const edit = await empleado.findByIdAndUpdate(id,data)
        return edit || {}
    }
    async deletEmpleado(id){
        const del = await empleado.findByIdAndDelete(id)
        return del || {}
    }

}
module.exports = empleadoCtrl