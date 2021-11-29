const {Router} = require('express');
const router = Router();
const empleado = require('../controllers/empleado.controller')

const empleadoCtrl = new empleado()
   

router.get('/',async(req,res)=>{
    const empleados = await empleadoCtrl.getUsuarios()
    res.status(200).json({message:"ok"})
})

router.post('/',async(req,res)=>{
    const nuevaPersona= await empleadoCtrl.createUsuario(req.body)
    res.status(201).json(nuevaPersona)
})

router.get('/:id',async(req,res)=>{
    const persona = await empleadoCtrl.getEmpleado(req.params.id)
    res.status(200).json(persona)
})

router.put('/:id',async(req,res)=>{
    const update = await empleadoCtrl.updateUsuario(req.params.id,req.body)
    res.status(200).json(update)
})

router.delete('/:id',async(req,res)=>{
    await empleadoCtrl.deletUsuario(req.params.id)
    res.status(200).json("product delete")
})




module.exports = router