module.exports = (sequelize, DataType) => {
    const Product = sequelize.define(
        'Product',
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataType.STRING
            },
            price: {
                type: DataType.INTEGER
            },
            description: {
                type: DataType.STRING
            },
            composicion: {
                type: DataType.STRING
            },
            medidas: {
                type: DataType.STRING
            },
            aclaracion: {
                type: DataType.STRING
            },
            stock: {
                type: DataType.INTEGER
            },
            category: {
                type: DataType.STRING
            },
            type: {
                type: DataType.STRING
            },
            img1: {
                type: DataType.STRING
            },
            img2: {
                type: DataType.STRING
            },
            img3: {
                type: DataType.STRING
            }
        },
        {
            tableName: 'products',
            timestamps: false,
            "underscored": true
        }
    )
    Product.associate = function(models){
        Product.belongsToMany(models.Cart, {
            as: "carrito",
            through: "cart_product",
            foreign_key: "product_id",
            otherKey: "cart_id",
            timestamps: false
        })
    }
    return Product
}


