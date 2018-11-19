// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes(drivers){
  return drivers.map(function(x) {
    const name = x.split(' ');
    return Object.assign({}, {firstName: `${name[0]}`, lastName: `${name[1]}`});
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function(x) {
    return`${x.name} is from ${x.hometown}`
  });
}
