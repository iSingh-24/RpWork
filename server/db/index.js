const { db } = require('./db');
const { User } = require('./Models/User');
const init = async () => {
    try {
        await db.sync({ force: true }); //typically we don't want to do force true in production mode.
        //alter:true is another option for this as it will just modify existing tables dependent on if there were changes made while preserving the users in your database.
        //alter:true is still considered risky to do so in a production environment. In a production environment you would typically use Sequelize migration tools.
        // await User.create({ firstName: 'John' });

        console.log('connected');
    } catch (error) {
        console.log(error);
    }
};

init();
