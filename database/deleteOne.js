module.exports = async ({ collection, condition }) => {
    try {
        const isDeleted = await db.collection(collection).deleteOne(condition);
        if(isDeleted.deletedCount === 0) return false;
        return true
    }
    catch (e) { return false }
}