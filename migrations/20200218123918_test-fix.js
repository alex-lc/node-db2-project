
exports.up = function (knex) {
    return knex.schema.alterTable('cars', tbl => {
        tbl.string('color', 128);
    })
};

exports.down = function (knex) {
    return knex.schema.table('cars', tbl => {
        dropColumn('color');
    })
};
