
export const UserNotFound: User = {

	name: "Jane",
	surname: "Doe",
	country: "USA",
	city: "Wisconsin",
	address: "None",
	card: {

		digits: "0000000000000000",
		cvc: 123,
		expire: new Date()

	}

}

export interface User{

	name: string;
	surname: string;
	country: string;
	city: string;
	address: string;
	card: Card;

}

export interface Card{

	digits: string;
	cvc: number;
	expire: Date;

}