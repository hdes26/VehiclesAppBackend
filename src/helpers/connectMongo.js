

const mongoose = require('mongoose');




const connectMongo = (bd='', search)=>{

    const url = `mongodb+srv://admin:rvIy6Ix6DFzmGpbA@cluster0.5zo5k.mongodb.net/Prueba?retryWrites=true&w=majority`;
    
    
        mongoose.connect(url, {
            
        
        })
            .then(() => console.log('conectado a mongo'))
            .catch((err) => console.log(err))
    
            const AppSchema = mongoose.Schema(search,{ versionKey: false })
    
            const appModel = mongoose.model(bd,AppSchema);
    
            return appModel;
    
        
    }
    


module.exports = connectMongo;

