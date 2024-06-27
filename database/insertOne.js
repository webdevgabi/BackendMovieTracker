module.exports = async ({ collection, data }) => {
    try {
        await db.collection(collection).insertOne(data);
        return true
    }
    catch (e) { return false }
}