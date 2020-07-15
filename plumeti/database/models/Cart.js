module.exports = (sequelize, DataType) => {
    const Cart = sequelize.define(
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
            timestamps: false,
            "underscored": true
        }
    )
    Cart.associate = function(models){
        Cart.belongsToMany(models.Product, {
            as: "productos",
            through: "cart_product",
            foreign_key: "cart_id",
            otherKey: "product_id",
            timestamps: false
        })
    }
    return Cart
}
