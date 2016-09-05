module.exports = function(name){
  var module = {};
  module.name = name;

  module.sayHi = function sayHi(){
    return `Hi ${name}`;
  }

  return module;
}
