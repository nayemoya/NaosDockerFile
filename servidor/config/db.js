const mongoose = require('mongoose');

const conectarDB =  async () =>{
    try {
        await mongoose.connect('mongodb://admin:admin@mongo:27017/MeanSistemaVentas?authSource=admin',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log("Se ha conectado exitosamente a la Base de datos");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = conectarDB;