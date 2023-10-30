export class Card {
	constructor(
		public title: string,
		public description: string,
		public imageSrc: string,
		public ethereumAmount: number,
		public remainingTime: number,
		public author: {
			name: string;
			imageSrc: string;
		}
	) {}
}
