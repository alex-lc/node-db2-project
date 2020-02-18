
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('vin')
            .unique()
            .notNullable();
        tbl.text('make')
            .unique()
            .notNullable();
        tbl.text('model')
            .unique()
            .notNullable();
        tbl.integer('mileage')
            .unique()
            .notNullable();
        tbl.text('transmission');
        tbl.text('title');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
