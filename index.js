let carsProperties = cars.map(car => {
    let properties = {
      "capacity": car.capacity,
      "size": "large"
    };
    if (car.capacity <= 5){
      properties['size'] = "medium";
    }
    if (car.capacity <= 3){
      properties['size'] = "small";
    }
    return properties;
   });
   console.log(carsProperties);
   