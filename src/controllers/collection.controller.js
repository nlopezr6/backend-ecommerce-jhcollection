const { dbInsertCollection, dbGetCollection, dbupdateCollection, dbDeleteCollection, dbGetCollectionById } = require("../services/collection.service");


async function createCollection (req,res){
    const inputData = req.body;


    try {
        const data = await dbInsertCollection (inputData);
        console.log (data);

        res.status (201).json ({
            ok: true,
            data
        });
   
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false, 
            msg: 'Error al crear un catálogo'
        })
        
    }
}

async function getCollection (req,res) {

   

    try {
        const data = await dbGetCollection ();

        res.status (200). json ({
            ok:true,
            data
        })
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false,
            msg: 'Error al obtener las collecciones'
        })
        
    }

}

async function updateCollection (req,res){
    const categoryId = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbupdateCollection (categoryId, inputData);
        
        res.status (200).json ({
            ok: true,
            data
        })
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok:false,
            msg: 'Error al actualizar una coleccion por ID'
        })
        
    }
}

async function getCollectionById (req,res){
    const collectionId = req.params.id;

    try {
        const data = await dbGetCollectionById( collectionId );

        /** Valida si el producto NO fue encontrado */
        if( ! data ) {
            res.status( 404 ).json({
                ok: false,
                msg: 'Collection no encontrada'
            });
        } 

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener Collection por ID'
        })  
    }

}

async function deleteCollection (req,res){
    const collectionId = req.params.id;

    try {
        const data = await dbDeleteCollection (collectionId);

        res.status(200).json ({
            ok:true,
            data
        });
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false, 
            msg: 'Error al eliminar collection'
        })
        
    }
}



module.exports = {
    createCollection,
    getCollection,
    updateCollection,
    getCollectionById,
    deleteCollection
}