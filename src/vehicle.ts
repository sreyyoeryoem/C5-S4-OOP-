export abstract class Vehicle {
	private platlID:string;
	private weight:number;
	constructor(platlID:string,weight:number) {
		this.platlID = platlID;
		this.weight = weight;

	}
}