import { Card } from './card.model';

export class CardService {
	title = 'Equilibrium #3429';
	description = 'Our Equilibrium collection promotes balance and calm.';
	imageUrl = '/assets/images/equilibrium.jpg';
	ethereumAmount = 0.041;
	remainingTime = 3;
	author = {
		name: 'Jules Wyvern',
		imageUrl: '/assets/images/avatar.png'
	};

	getCard() {
		return new Card(
			this.title,
			this.description,
			this.imageUrl,
			this.ethereumAmount,
			this.remainingTime,
			this.author
		);
	}
}
