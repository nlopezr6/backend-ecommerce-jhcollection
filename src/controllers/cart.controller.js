const { dbInsertCart, dbGetCarts, dbUpdateCart, dbDeleteCart, dbGetCartById } = require("../services/cart.service");


async function createCart(req,res) {
    const inputData = req.body;
    const userId = req.authUser.id;
    inputData.userId = userId;

    try {
        const data = await dbInsertCart(inputData);
        res.status(201).json({
            ok: true,
            data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear carrito'
        });
    }

    
}

async function getCarts(req,res) {
    
    try {
        const data = await dbGetCarts(); 
        res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Error al obtener los carritos de compra'
        });
    }


}

async function updateCart(req,res) {
    const cartId = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateCart(cartId,inputData);

        res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el carrito por ID'
        })
    }
    
}

async function deleteCart(req,res) {
    const cartId = req.params.id;

    try {
        const data = await dbDeleteCart(cartId);

        res.status(200).json({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error(error);
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un car por ID'
        })
}
}
async function getCartById ( req,res ) {
    const cartId = req.params.id;

    try {
        const data = await dbGetCartById( cartId );

        if(!data) {
            return res.status(404).json({
                ok: false,
                msg: 'Carrito no encontrado'
            });
        }

        res.status(200).json({
            ok: true,
            data
        });

    } 
    catch (error) {
        console.error(error);
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obener un carrito por ID'
        })
    }
}

module.exports = {
    createCart,
    getCarts,
    updateCart,
    deleteCart,
    getCartById
}