"use strict";

const TV = {
  name: "TV",
  isOn: false
};

const Lamp = {
  name: "Lamp",
  isOn: false
};

const Oven = {
  name: "Oven",
  isOn: false
};

function turnOnAppliance(appliance) {
  try {
    if (appliance.isOn) {
      throw new Error(`${appliance.name} is already ON.`);
    }

    appliance.isOn = true;
    return `${appliance.name} has been turned ON.`;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Turn-on operation completed.");
  }
}

function turnOffAppliance(appliance) {
  try {
    if (!appliance.isOn) {
      throw new Error(`${appliance.name} is already OFF.`);
    }

    appliance.isOn = false;
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
