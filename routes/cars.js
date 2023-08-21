const express = require ('express');
const router = express.Router();
const Car = require ('../models/Car');

//get
router.get('/' , async (req,res)=> {
  try{
        const cars = await Car.find();
        res.json(cars);
  }
  catch (err) {
    res.json ({message:err})
  }
});

//get specific 
router.get('/:vin', async (req,res)=>{
    try {
   const theCar = await  Car.findById(req.params.vin);
   res.json (theCar);
    }
    catch(err) {
        res.json({message:err});

    }
})


// post
router.post('/', async (req,res)=> {
   const car = new Car ({
    brand: req.body.brand,
    model : req.body.model,
    mileage : req.body.mileage,
    fuelType : req.body.fuelType,
    image: req.body.image
   });
   try {
   const savedCar  =  await car.save();
   res.json(savedCar);
   } catch (err) {
    res.json ({message : err});

   }
});


// POST many cars
router.post('/many', async (req, res) => {
    const carsData = req.body; 
  
    try {
      const savedCars = await Car.insertMany(carsData);
      res.json(savedCars);
    } catch (err) {
      res.json({ message: err }); 
    }
  });


//delete

router.delete('/:vin', async (req,res)=> {
    try {
        const removedCar = await Car.deleteOne({ _id: req.params.vin });
        res.json(removedCar);

    }
    catch(err) {
        res.json({message:err})
    }
});

router.patch('/:vin', async (req,res)=> {
    try {
        const updatedCar = await Car.updateOne(
            { _id: req.params.vin },
            {$set: { brand: req.body.brand,
                model: req.body.model,
                mileage: req.body.mileage,
                fuelType: req.body.fuelType, 
            image : req.body.image}});

        res.json(updatedCar);

    }
    catch(err) {
        res.json({message:err})
    }
});





module.exports = router;