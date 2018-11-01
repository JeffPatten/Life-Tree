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

    getSubcategory: (req, res, next) => {
        const db = req.app.get('db');
        const {category} = req.params;
        const {id} = req.session.user;

        db.get_subcategories([category, id])
        .then(subcategories => res.status(200).send(subcategories))
        .catch(err => {
            res.status(500).send({errorMessage: 'error'});
            console.log(err);
        })
    },

    postGoal: async (req, res, next) => {
        const db = req.app.get('db');
        const { subcategory, categoryId, goal } = req.body;
        const { id } = res.session.user;

        let subcat = await db.post_subcategory([subcategory, categoryId, id])
        await db.post_goal([goal, id, subcat[0].id, categoryId])
        return res.sendStatus(200)
        
    } 
}

    // postSubcategory: (req, res, next) => {
    //     const db = req.app.get('db');
    //     const {category} = req.params;
    //     const {id} = req.session.user;
    //     const {subcategory} = req.body;

    //     db.post_subcategory({subcategory, category, id})
    //     .then(() => res.status(200))
    //     .catch(err => {
    //         res.status(500).send({errorMessage: 'Subcategory not added'});
    //         console.log(err);
    //     })
    // },

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
// }