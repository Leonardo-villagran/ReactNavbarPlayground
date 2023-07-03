const pool = require('../config/db.js');

const obtenerNoticias = async (req,res)=>{
    try {
        const query= 'select * from menu';
        const result= await pool.query(query);
        const rows=result.rows;
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
    
}

const crearNoticias =async(req,res)=>{
    try {
        
        const {titulo, ruta, colorFondo, colorTexto}=req.body;
        const query= 'insert into menu (titulo,ruta) values ($1, $2)';
        const values= [titulo, ruta]
        const result= await pool.query(query, values);
        
        res.json({mensaje: "Datos ingresados"});
    } catch (err) {
        res.status(500).send(err.message);
    }
    
}

module.exports = {
    obtenerNoticias,
    crearNoticias
}