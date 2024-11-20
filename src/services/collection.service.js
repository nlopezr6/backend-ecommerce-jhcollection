const collectionModel = require ("../models/Collection.model");

const dbInsertCollection = async (newCollection) => {
    return await collectionModel.create (newCollection);

}

// const dbDeleteCategory = async () => {
//     return await categoryModel.findByIdAndDelete(  );
// }

const dbGetCollection = async() => {
    return await collectionModel.find ()
}

const dbupdateCollection= async (id, updateCollection) => {
    return await collectionModel.findOneAndUpdate (
        {_id:id},
        updateCollection,
        {new: true}
    );
}

const dbGetCollectionById = async ( _id ) => {
    return await collectionModel.findOne({ _id });
}

const dbDeleteCollection = async (id) => {
    return await collectionModel.findByIdAndDelete (id);
} 


module.exports = {
    dbInsertCollection,
    dbGetCollection,
    dbupdateCollection,
    dbGetCollectionById,
    dbDeleteCollection
}