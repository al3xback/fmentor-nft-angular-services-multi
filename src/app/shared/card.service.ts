import { Card } from './card.model';

export class CardService {
	title = 'Equilibrium #3429';
	description = 'Our Equilibrium collection promotes balance and calm.';
	imageSrc = '/assets/images/equilibrium.jpg';
	ethereumAmount = 0.041;
	remainingTime = 3;
	author = {
		name: 'Jules Wyvern',
		imageSrc: '/assets/images/avatar.png'
	};

	getAllDatas() {
		return new Card(
			this.title,
			this.description,
			this.imageSrc,
			this.ethereumAmount,
			this.remainingTime,
			this.author
		);
	}
}
