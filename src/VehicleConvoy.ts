import { Vehicle } from "./vehicle";

export class VehicleConvoy {
	vehicle:Vehicle []=[];

	addVehicles (vehicle:Vehicle){
	 this.vehicle.push(vehicle);
	//  console.log(this.vehicle)
	}

	getMaxSpeed():number{
		let maxspeed = this.vehicle[0].getSpeed();
	

		for(let vehicle of this.vehicle){
			console.log(vehicle.getSpeed())
			if( vehicle.getSpeed() > maxspeed ){
				maxspeed = vehicle.getSpeed();
			}
		}
		return maxspeed;
	}

}
