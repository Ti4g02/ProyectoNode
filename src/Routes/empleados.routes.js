import { Router } from "express"
import { getEmpleados, postEmpleados, putEmpleados, deleteEmpleados, getEmpleado } from "../controllers/empleados.controllers.js"

const router = Router()

router.get('/employees', getEmpleados)

router.get('/employees/:id', getEmpleado)

router.post('/employees', postEmpleados)

router.patch('/employees/:id', putEmpleados)
/* router.put('/employees/:id', putEmpleados) */

router.delete('/employees/:id', deleteEmpleados)

export default router