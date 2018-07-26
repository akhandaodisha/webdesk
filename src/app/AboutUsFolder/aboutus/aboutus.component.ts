import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../appDataConfig';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  pageTitle = ConfigConstants.aboutPage.pageTitle;
  pageContent = ConfigConstants.aboutPage.pageContent;

  constructor() { }

  ngOnInit() {
  }

}
