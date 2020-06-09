module.exports = (sequelize, DataType) => {
    const producto = sequelize.define(
        'Producto',
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
            producto: {
                type: DataType.STRING
            },
            carrito_id: {
                type: DataType.INTEGER
            }
        },
        {
            tableName: 'productos',
            timestamps: false
        }
    )
    return producto
}
