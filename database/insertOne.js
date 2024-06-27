module.exports = async ({ collection, data, db }) => {

    try {
        await db.collection(collection).insertOne(data);
        return true
    }
    catch (e) { return false }

}