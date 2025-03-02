
export const ElementNotFound: Product = {

	id: -1,
	title: "Not found",
	price: 0,
	category: "None",
	description: "Lorem ipsum dolor sit amet",
	image: '@assets\icon\image-not-found.png',
	rating: {

		rate: 0,
		count: 0

	}

};

export interface Product{

	id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
	rating: ProductRating;

}

export interface ProductRating{

	rate: number;
	count: number;

}