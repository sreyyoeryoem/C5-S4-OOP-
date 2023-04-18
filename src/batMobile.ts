import { Vehicle } from "./vehicle";
export class BatMobile extends Vehicle {
	isBatmanHere: boolean;
	constructor(isBatmanHere: boolean, platlID: string, weight: number) {
		super(platlID, weight)
		this.isBatmanHere = isBatmanHere;

	}
	getSpeed(): number {
		let speed = 110;
		if(this.isBatmanHere){
			speed = 500
		}
		return speed
	}

}