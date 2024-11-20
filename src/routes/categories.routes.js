const express = require( 'express' );
const { createCategory, getCategories, updateCategory, getCategoryById, deleteCategory } = require('../controllers/category.controller');
const { authUser } = require('../middlewares/auth-user.middleware');
const router = express.Router();


router.post ('/', authUser, createCategory);
router.get ('/', getCategories);

router.get ('/:id', getCategoryById);
router.patch ('/:id', authUser, updateCategory);
router.delete ('/:id',authUser, deleteCategory);

module.exports = router;