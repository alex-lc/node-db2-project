
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      const cars = [
        {
          id: 1,
          vin: '10292837482738498',
          make: 'Ford',
          model: 'Focus',
          mileage: 50000
        },
        {
          id: 2,
          vin: '09817263748591287',
          make: 'Chevy',
          model: 'Tahoe',
          mileage: 100000
        },
        {
          id: 3,
          vin: '87872983739828389',
          make: 'Forenza',
          model: 'Suzuki',
          mileage: 70000
        }
      ];

      return knex('cars').insert(cars);
    });
};
