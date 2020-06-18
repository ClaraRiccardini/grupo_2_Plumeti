module.exports = (sequelize, DataType) => {
    const user = sequelize.define(
        'User',
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataType.STRING
            },
            user: {
                type: DataType.STRING
            },
            password: {
                type: DataType.STRING
            },
            email: {
                type: DataType.STRING
            },
            avatar: {
                type: DataType.STRING
            }
        },
        {
            tableName: 'users',
            timestamps: false
        }
    )
    return user
}
