module.exports = async ({ collection, condition }) => {
    try {
        const user = await db.collection(collection).find(condition).toArray();

        if(user.length === 0) {
            return false;
        }
        return user[0]
    }
    catch (e) { return false }
}