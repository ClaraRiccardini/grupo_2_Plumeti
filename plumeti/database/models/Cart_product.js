  module.exports = (sequelize, DataType) => {
    const Cart_product = sequelize.define(
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
            timestamps: false,
            "underscored": true
        }
    )
    return Cart_product
}