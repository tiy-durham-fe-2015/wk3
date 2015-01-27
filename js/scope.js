// TODO: Write up a snazzy article on scope

var obj = {
  name: 'Chris',
  sayName: function () {
    // Try it with this.name, then try it with obj.name
    alert(this.name);
  },

  sayNameSafe: function () {
    alert(obj.name);
  }
}

obj.sayName();
var fn = obj.sayName;

// If sayName uses obj.name, this will alert 'Chris'
// If sayName uses this.name, this will alert undefined
fn();
