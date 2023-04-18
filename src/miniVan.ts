import { Vehicle } from "./vehicle";
export class MiniVan extends Vehicle {
	numberCustomers: number;
	numberLuggages: number;
	constructor(numberCustomers: number, numberLuggages: number, platlID: string, weight: number) {
		super(platlID, weight)
		this.numberCustomers = numberCustomers;
		this.numberLuggages = numberLuggages;
	}
	getSpeed(): number {
		let speed = 130;
		if(this.numberCustomers>0){
			let customers = this.numberCustomers * 10;
			speed -= customers
		}
		if (this.numberLuggages>0){
			let luggages = this.numberLuggages * 5;
			speed -= luggages
		}
		return speed;
	}
}