const {Router} = require('express');
const { createCart, getCarts, updateCart, deleteCart, getCartById  } = require('../controllers/cart.controller');
const { authUser } = require('../middlewares/auth-user.middleware');
const router = Router();

router.post('/',authUser ,createCart);
router.get('/', getCarts);
router.patch('/:id',authUser ,updateCart);
router.delete('/:id',authUser ,deleteCart);
router.get('/:id',getCartById);


module.exports = router;