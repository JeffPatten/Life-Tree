module.exports = {

    getGoals: async (req, res, next) => {
        console.log(req.params)
        try {

            const db = req.app.get('db');
            const { category } = req.params;
            const { id } = req.session.user;

            let subcategory = await db.get_subcategories([category, id])

            for (let i = 0; i < subcategory.length; i++) {
                let goals = await db.read_goals([category, id])
                subcategory[i].goals = goals;
            }
            return res.status(200).send(subcategory)
        } catch (error) {
            res.status(500).send({ errorMessage: 'error' });
            console.log(error);
        }
    },

    postSubcategory: (req, res, next) => {
        const db = req.app.get('db');
        const {category} = req.params;
        const {id} = req.session.user;
        const {subcategory} = req.body;

        db.post_subcategory({subcategory, category, id})
        .then(() => res.status(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Subcategory not added'});
            console.log(err);
        })
    },

    // postGoal: (req, res, next) => {
    //     const db = req.app.get('db');
    //     const {category} = req.params;
    //     const {id} = req.session.user;
    //     const {goal, subcategory} = req.body;

    //     db.post_goal({goal, id, subcategory, category})
    //     .then(() => res.status(200))
    //     .catch(err => {
    //         res.status(500).send({errorMessage: 'Goal not added'});
    //         console.log(err);
    //     })
    // }
}