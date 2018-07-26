import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../appDataConfig';

@Component({
  selector: 'app-donate-us',
  templateUrl: './donate-us.component.html',
  styleUrls: ['./donate-us.component.css']
})
export class DonateUsComponent implements OnInit {

  pageTitle = ConfigConstants.donatePage.pageTitle;
  pageContent = ConfigConstants.donatePage.pageContent;

  constructor() { }

  ngOnInit() {
  }

}
