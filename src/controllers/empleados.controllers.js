import {pool} from "../db.js"

export const getEmpleados = async (req, res) => /* res.send("Obteniendo empleados") */{
  try{
    const [rows] = await pool.query("SELECT * FROM empleados")
    res.json(rows)
  }catch (error){
    return res.status(500).json({
        message: "Algo salió mal :("
    })
  }
}  

export const getEmpleado = async (req, res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [req.params.id])
    
    if (rows.length <= 0 ) return res.status(404).json({
        message: "Not Found"
    })

    res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Algo salió mal"
        })
    }
}

export const postEmpleados = async (req, res) =>{
    try{
        const {name, salary} = req.body
    const [rows] = await pool.query("INSERT INTO empleados(name, salary) VALUES (?, ?)", [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary,
    })
    }catch (error){
        return res.status(500).json({
            message: "Algo salió mal"
        })
    }
} 

export const deleteEmpleados = async (req, res) => {
  try{
    const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: "Not Found"
    })

    console.log(result)

    res.sendStatus(204)
  }catch (error){
    return res.status(500).json({
        message: "Algo salió mal"
    })
}
}

export const putEmpleados = async (req, res) => {
   try{
    const {id} = req.params
    const {name, salary} = req.body

    const [result] = await pool.query("UPDATE empleados SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id])

    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
        message: "Not Found"
    })

    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [id])

    res.json(rows[0])
   }catch (error){
    return res.status(500).json({
        message: "Algo salió mal"
    })
}
}

