import { Vehicle } from "./vehicle";
export class TucTuc extends Vehicle {
	numberCustomers: number;
	constructor (numberCustomers:number,platlID: string, weight: number){
		super(platlID, weight)
		this.numberCustomers = numberCustomers;
	}
	getSpeed(): number {
		let speed = 130;
		if(this.numberCustomers>0){
			let tuctuc = this.numberCustomers * 5;
			speed -= tuctuc;
		}
		return speed;
		
	}
}