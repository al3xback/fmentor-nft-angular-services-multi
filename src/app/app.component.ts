import { Component } from '@angular/core';

import { ChallengeService } from './shared/challenge.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ChallengeService]
})
export class AppComponent {}
