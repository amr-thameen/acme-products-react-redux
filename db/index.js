const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);

const Product = conn.define('products', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER
    }
})


const syncAndSeed = () => {
    conn.sync({ force: true })
    .then(() => {
        return Promise.all([
            Product.create(
                {
                name: 'foo bar',
                rating: 10
                }
            ),
            Product.create(
                {
                name: 'bar jazz',
                rating: 3
                }
            ),
            Product.create(
                {
                name: 'wow woah',
                rating: 12
                }
            ),
        ])
        .catch((err) => {
            console.log(err)
        })
    })
}

module.exports = {
    models: {
        Product
    },
    syncAndSeed
}