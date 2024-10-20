const db = require('./models/index');

db.sequelize.sync({ force: true }).then(() => { // Fixed the syntax here
    console.log("Database is synced");
}).catch(err => {
    console.error("Error syncing database:", err); // Optional: Handle any sync errors
});
