const CartModel = require("../models/Cart.model")

const dbInsertCart = async (newCart) => {
    const existingCart = await CartModel.findOne({ userId: newCart.userId, status: 'pending' });
    
    if (existingCart) {
        return existingCart;
    }

    return await CartModel.create(newCart);
}

const dbGetCarts = async () => {
    return await CartModel.find().populate(['userId','products.product']);
}

const dbUpdateCart = async (id, updateCartPut) => {
    return await CartModel.findOneAndUpdate( { _id: id },updateCartPut,{ new: true });
}

const dbDeleteCart = async ( id ) => {
    return await CartModel.findByIdAndDelete( id );
}

const dbGetCartById = async (_id) => {
    return await CartModel.findOne({_id}).populate(['userId','products.product']);
}
module.exports = {
    dbInsertCart,
    dbGetCarts,
    dbUpdateCart,
    dbDeleteCart,
    dbGetCartById
}