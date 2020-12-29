'use strict'

class Device{
  constructor(name, type){
    this.deviceName = name;
    this.type = type;
    this.strength = null;
    this.nighbours = [];
  }
}

module.exports=Device;