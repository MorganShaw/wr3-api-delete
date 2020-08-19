module.exports = {
    deletePost: async (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params
        
        const deleted = await db.delete_posts(id)
        res.status(200).send(['Deleted'])
    },

    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const posts = await db.get_posts()
        if(posts){
            res.status(200).send(posts)
        } else {
            res.status(400).send('Error')
        }
    }
}