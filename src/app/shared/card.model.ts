export class Card {
	constructor(
		public title: string,
		public description: string,
		public imageUrl: string,
		public ethereumAmount: number,
		public remainingTime: number,
		public author: {
			name: string;
			imageUrl: string;
		}
	) {}
}
