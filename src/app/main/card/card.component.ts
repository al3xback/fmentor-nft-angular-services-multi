import { Component, OnInit } from '@angular/core';

import { Card } from '../../shared/card.model';
import { CardService } from '../../shared/card.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	providers: [CardService]
})
export class CardComponent implements OnInit {
	card: Card;

	constructor(private cardService: CardService) {}

	ngOnInit() {
		this.card = this.cardService.getCard();
	}
}
