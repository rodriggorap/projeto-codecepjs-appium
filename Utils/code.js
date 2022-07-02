var random_number = require('random-number');
module.exports = {


    getCode () {
    var gen = random_number.generator({
        min:  0
      , max:  1000
      , integer: true
      })

      return gen();
}



}

