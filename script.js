"use strict";

const TV = {
  name: "TV",
  isTurnedOn: false
};

const Lamp = {
  name: "Lamp",
  isTurnedOn: false
};

const Oven = {
  name: "Oven",
  isTurnedOn: false
};

function turnOnAppliance(appliance) {
  try {
    if (appliance.isTurnedOn) {
      throw new Error(`${appliance.name} is already ON.`);
    }

    appliance.isTurnedOn = true;
    return `${appliance.name} has been turned ON.`;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Turn-on operation completed.");
  }
}

function turnOffAppliance(appliance) {
  try {
    if (!appliance.isTurnedOn) {
      throw new Error(`${appliance.name} is already OFF.`);
    }

    appliance.isTurnedOn = false;
    return `${appliance.name} has been turned OFF.`;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Turn-off operation completed.");
  }
}

console.log(turnOnAppliance(TV));
console.log(turnOnAppliance(Lamp));
console.log(turnOnAppliance(Oven));

console.log(turnOffAppliance(TV));
console.log(turnOffAppliance(Lamp));
console.log(turnOffAppliance(Oven));

console.log(turnOffAppliance(TV));
