import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../appDataConfig';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent implements OnInit {

  salutation = ConfigConstants.homeData.welcomeCard.welcomeCardSalutation;
  content = ConfigConstants.homeData.welcomeCard.welcomeCardContent;

  constructor() { }

  ngOnInit() {
  }

}
