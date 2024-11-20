const categoryModel = require ("../models/Category.model");

const dbInsertCategory = async (newCategory) => {
    return await categoryModel.create (newCategory);

}

// const dbDeleteCategory = async () => {
//     return await categoryModel.findByIdAndDelete(  );
// }

const dbGetCategories = async() => {
    return await categoryModel.find ()
}

const dbupdateCategory = async (id, updateCategory) => {
    return await categoryModel.findOneAndUpdate (
        {_id:id},
        updateCategory,
        {new: true}
    );
}

const dbGetCategoryById = async ( _id ) => {
    return await categoryModel.findOne({ _id });
}

const dbDeleteCategory = async (id) => {
    return await categoryModel.findByIdAndDelete (id);
} 


module.exports = {
    dbInsertCategory,
    dbGetCategories,
    dbupdateCategory,
    dbGetCategoryById,
    dbDeleteCategory
}