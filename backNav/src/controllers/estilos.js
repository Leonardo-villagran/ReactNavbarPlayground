const pool = require('../config/db.js');

const obtenerEstilo =async (req,res)=>{
    try {
        const query= 'select * from estilo limit 1';
        const result= await pool.query(query);
        const rows=result.rows;
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
    
}

const actualizarEstilo = async(req,res)=>{
    try {
        const {colorfondo, colortexto}=req.body;
        const query= 'update estilo set colorfondo=$1, colortexto=$2 where id=1';
        const values= [colorfondo,colortexto]
        const result= await pool.query(query, values);
        res.json({mensaje: "Datos Actualizados"});
    } catch (err) {
        res.status(500).send(err.message);
    } 
}

module.exports = {
    obtenerEstilo, 
    actualizarEstilo
}