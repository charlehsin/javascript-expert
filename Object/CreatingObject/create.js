var Car = {
  drive: function (miles) {
    return this.odometer += miles;
  }
};

var tesla = Object.create(Car, {
  'odometer': {
    value: 0,
    enumerable: true
  }
});

// => 10
console.log(tesla.drive(10));