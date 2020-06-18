module.exports = (sequelize, DataType) => {
    const cart_product = sequelize.define(
        'Cart_product',
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            product_id: {
                type: DataType.INTEGER
            },
            cart_id: {
                type: DataType.INTEGER
            }
        },
        {
            tableName: 'cart_product',
            timestamps: false
        }
    )
    return cart_product
}
