function filterCarByAvailability(cars) {
    // Menampilkan array cars di console untuk keperluan debugging
    // console.log(cars);
    console.log(cars)
  
    const result = [];
  
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].available) {
        result.push(cars[i]);
      }
    };
  
    console.log(result);
    // console.table(result);
  
    return result;
  }