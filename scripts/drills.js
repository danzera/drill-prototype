// ElectricDrill Constructor
function ElectricDrill(brand, model) {
  this.brand = brand;
  this.model = model;
  this.currentBit = ['', '']; // [use, size] (can be set using the changeBit method)
  this.charging = false; // true or false (starts as false)
  this.state = 'off'; // 'off', 'idling', 'clockwise', 'counter-clockwise' (starts off)
}

// ElectricDrill prototype properties and methods
// all ElectricDrills have type = electric
ElectricDrill.prototype.type = 'electric';
// which drill are you using?
ElectricDrill.prototype.drillType = function() {
  console.log("You are currently using a", this.brand, this.model, this.type, "drill.");
};
// all ElectricDrills have access to myDrillBits
ElectricDrill.prototype.myDrillBits = {
  cement: {
    use: 'cement',
    bitSizes: ['1/4"', '1/2"', '3/4"']
  },
  wood: {
    use: 'wood',
    bitSizes: ['1/8"', '3/8"', '5/8"']
  },
  ceramic: {
    use: 'ceramic',
    bitSizes: ['3/16"', '5/16"', '7/16"']
  }
};
// all ElectricDrills can change their currentBit using the same method
ElectricDrill.prototype.changeBit = function(bitType, index) {
  this.currentBit[0] = this.myDrillBits[bitType].use;
  this.currentBit[1] = this.myDrillBits[bitType].bitSizes[index];
};
// all ElectricDrills can be charged
ElectricDrill.prototype.charge = function(charging) {
  if (charging === true) {
    this.state = 'off'; // turn the drill off
    this.charging = charging; // charge the drill
  } else { // anything other than a 'true' input
    this.charging = false; // the drill must not be charging
  }
};
// all ElectricDrills can check whether they are charging
ElectricDrill.prototype.isCharging = function() {
  var status = (this.charging) ? 'is' : 'is not';
  console.log("The", this.brand, this.model, status, "currently charging.");
};
// all ElectricDrills share a changeState method
ElectricDrill.prototype.changeState = function(state) {
  if (this.charging) {
    this.isCharging();
    console.log("Please take the drill out of the charger before changing its state.");
  } else {
    switch (state) {
      case 'idling':
      case 'clockwise':
      case 'counter-clockwise':
        this.state = state;
        if (state === 'idling') {
          console.log('The', this.brand, this.model, 'drill is idling.');
        } else {
          console.log("The", this.brand, this.model, "drill is rotating", state + ".");
        }
        console.log('It is currently using a', this.currentBit[1], this.currentBit[0], "bit.");
        break;
      default:
        console.log("Are you sure the drill is working?");
    }
  }
};

// ---TESTING---

var dewalt = new ElectricDrill('Dewalt', 'DCD771');
console.log(dewalt);
dewalt.drillType();
console.log("Here are all the drill bits available to you:", dewalt.myDrillBits);
dewalt.changeBit('cement', 0);
console.log(dewalt.brand, dewalt.model, "current bit:", dewalt.currentBit);
dewalt.isCharging();
dewalt.changeState('idling');
console.log(dewalt.state); // should be 'idling'
dewalt.charge(true); // should autoset the state to 'off'
dewalt.isCharging();
console.log(dewalt.state); // should be 'off' since charge was set to 'true'
dewalt.changeState('hello');
dewalt.charge('no');
dewalt.changeState('hello');
dewalt.charge(5 > 2);
dewalt.isCharging();
dewalt.charge(false);
dewalt.changeState('idling');
dewalt.changeBit('ceramic', 0);
dewalt.changeState('clockwise');
dewalt.changeBit('wood', 2);
dewalt.changeState('counter-clockwise');
dewalt.changeState('done');
console.log(dewalt);

var bosch = new ElectricDrill('Bosch', 'HDH181X ');
console.log(bosch);
bosch.drillType();
console.log("Here are all the drill bits available to you:", bosch.myDrillBits);
bosch.changeBit('wood', 2);
console.log(bosch.brand, bosch.model, "current bit:", bosch.currentBit);
bosch.isCharging();
bosch.charging = true;
bosch.isCharging();
bosch.changeState('hammering');
bosch.charging = false;
bosch.changeState('hammering');
