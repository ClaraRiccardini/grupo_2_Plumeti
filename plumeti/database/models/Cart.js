module.exports = (sequelize, DataType) => {
    const cart = sequelize.define(
        'Cart',
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: {
                type: DataType.INTEGER
            },
            estate: {
                type: DataType.STRING
            }
        },
        {
            tableName: 'cart',
            timestamps: false
        }
    )
    return cart
}
