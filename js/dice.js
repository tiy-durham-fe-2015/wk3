(function () {
  var y = 6000;

  function foo() {
    var x = 400;

    function sayX() {
      alert(x);
    }

    return sayX;
  }

  var fn = foo();
  //fn();


})();











function Dice(sides) {
  if (!sides) {
    sides = 6;
  }

  var newDice = {
    value: 1,

    roll: function () {
      newDice.value = Math.floor(Math.random() * sides) + 1;
    }
  };

  newDice.roll();

  return newDice;
}

var sixSided = Dice();
var tenSided = Dice(12);

console.log(tenSided.value);
tenSided.roll();

console.log(tenSided.value);
tenSided.roll();

console.log(tenSided.value);
tenSided.roll();

console.log(tenSided.value);
