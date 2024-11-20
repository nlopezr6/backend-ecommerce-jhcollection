const express = require( 'express' );
const { createCollection, getCollectionById, updateCollection, deleteCollection, getCollection } = require('../controllers/collection.controller');
const { authUser } = require('../middlewares/auth-user.middleware');
const router = express.Router();


router.post ('/', authUser, createCollection);
router.get ('/',getCollection);

router.get ('/:id', getCollectionById);
router.patch ('/:id', authUser, updateCollection);
router.delete ('/:id',authUser, deleteCollection);

module.exports = router;