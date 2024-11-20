const { Schema, model} = require('mongoose');

const OrderSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    cart: { 
        type: Schema.Types.ObjectId,
        ref: 'carts'
    },

    status: {
        type: String,
        enum: ['processing' , 'shipped' , 'delivered' , 'cancelled'],
        default: 'processing'
    },

    total: {
        type: Number,
        required: true
    },

    paymentMethod: String ,

    shippingAddress: {
        address: String,
        city: String,
        phoneNumber: String,
        receiverName: String
    }

});

const OrderModel = model ('Orders' ,OrderSchema);

module.exports = OrderModel;