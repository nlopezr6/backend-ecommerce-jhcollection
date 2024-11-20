const { dbInsertCategory, dbGetCategories, dbupdateCategory, dbGetCategoryById, dbDeleteCategory } = require("../services/category.service");
const { dbDeleteProduct } = require("../services/product.service");

async function createCategory (req,res){
    const inputData = req.body;


    try {
        const data = await dbInsertCategory (inputData);
        console.log (data);

        res.status (201).json ({
            ok: true,
            data
        });

        
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false, 
            msg: 'Error al crear una categoria'
        })
        
    }
}

async function getCategories (req,res) {
    try {
        const data = await dbGetCategories ();

        res.status (200). json ({
            ok:true,
            data
        })
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false,
            msg: 'Error al obtener las categorias'
        })
        
    }

}

async function updateCategory (req,res){
    const categoryId = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbupdateCategory (categoryId, inputData);
        
        res.status (200).json ({
            ok: true,
            data
        })
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok:false,
            msg: 'Error al actualizar un producto por ID'
        })
        
    }
}

async function getCategoryById (req,res){
    const CategoryId = req.params.id;

    try {
        const data = await dbGetCategoryById( CategoryId );

        /** Valida si el producto NO fue encontrado */
        if( ! data ) {
            res.status( 404 ).json({
                ok: false,
                msg: 'Categoria no encontrada'
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
            msg: 'Error al obtener una categoria por ID'
        })  
    }

}

async function deleteCategory (req,res){
    const categoryId = req.params.id;

    try {
        const data = await dbDeleteCategory (categoryId);

        res.status(200).json ({
            ok:true,
            data
        });
        
    } catch (error) {
        console.error (error);
        res.status (500).json ({
            ok: false, 
            msg: 'Error al eliminar un producto'
        })
        
    }
}



module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    getCategoryById,
    deleteCategory
}