import {BatMobile } from './batMobile';
import { MiniVan } from './miniVan';
import { TucTuc } from "./tucTuc";
import { VehicleConvoy } from './VehicleConvoy';

let Bat = new BatMobile(false,"A12",20);
// Bat.getSpeed()

// console.log(Bat.getSpeed());

let Min = new MiniVan(3,2,"A12",20);
// console.log(Min.getSpeed());


let tuctuc = new TucTuc (10,"A12",20);
// console.log(tuctuc.getSpeed())
let vehicleconvory = new VehicleConvoy ();

vehicleconvory.addVehicles(tuctuc);
vehicleconvory.addVehicles(Min);
vehicleconvory.addVehicles(Bat);

vehicleconvory.getMaxSpeed()
console.log(vehicleconvory.getMaxSpeed())
