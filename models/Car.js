const mongoose = require ('mongoose');

const CarSchema = mongoose.Schema({

    brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      mileage: {
        type: String,
        required: true,
      },
      fuelType: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
    
});

module.exports = mongoose.model('Cars', CarSchema );