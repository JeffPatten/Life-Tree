const nodemailer = require('nodemailer');
require('dotenv').config();;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

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
        const { category } = req.params;
        const { id } = req.session.user;

        db.get_subcategories([category, id])
            .then(subcategories => res.status(200).send(subcategories))
            .catch(err => {
                res.status(500).send({ errorMessage: 'error' });
                console.log(err);
            })
    },

    postGoal: (req, res, next) => {
        const db = req.app.get('db');
        const { goal, subcategory_id, category_id } = req.body;
        const { id } = req.session.user;

        // let subcat = await db.post_subcategory([subcategory, categoryId, id])
        db.post_goal([goal, id, subcategory_id, category_id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Did not add goal' });
                console.log(err)
            })
    },

    deleteGoal: async (req, res, next) => {
        const db = req.app.get('db');
        const { goalId } = req.params;


        await db.delete_goal([goalId])
        return res.sendStatus(200)
    },

    editGoals: (req, res, next) => {
        const db = req.app.get('db');
        const { goalId, goal } = req.body;

        db.edit_goal([goalId, goal])
            .then(res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Did not edit' });
                console.log(err)
            })
    },

    sendEmail: (req, res, next) => {
        console.log('got here:', req);
        const db = req.app.get('db');
        const { email, user_name } = req.session.user;
        const { goal } = req.body;

        const mailOptions = {
            from: 'treelifebalance@gmail.com',
            to: email,
            subject: 'You have a new goal',
            html:
                `<body style="margin: 0; padding: 0;">
                <table style= "text-align:center; border:1; cellpadding:0; cellspacing:0: width:100%">
                     <tr style="text-align:center; color: white; background-color: rgb(42, 71, 88)">
                        <td style="margin: 0; padding: 20px; font-size: 20pt; font-family: 'Dancing Script', cursive;">Life Tree Balance</td>
                     </tr>
                     <tr>
                        <td style="text-align:center; color:black">
                            <h1>Congratulations, ${user_name}, on balancing your life!</h1>
                            <p>You have committed to ${goal}.</p>
                            <p>Remember to set a deadline on your calendar and reminders to follow up with yourself or another. Make it measurable and hold yourself accountable.
                        </td>
                     </tr>
                     <tr style="text-align:center; color: white; background-color: rgb(42, 71, 88)">
                        <td style="margin:0; padding: 15px"><a href="https://www.lifetreebalance.com" style="color: white">www.lifetreebalance.com</a></td>
                     </tr>
                    </table>
                 </body>`
        }

        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                {console.log(err)}
            else
                {console.log(info)}
        });
    }
}
