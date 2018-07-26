import { Component, OnInit } from '@angular/core';
import { ConfigConstants } from '../../appDataConfig';

@Component({
  selector: 'app-our-aim',
  templateUrl: './our-aim.component.html',
  styleUrls: ['./our-aim.component.css']
})
export class OurAimComponent implements OnInit {

  pageTitle = ConfigConstants.aimPage.pageTitle;
  pageContent = ConfigConstants.aimPage.pageContent;

  constructor() { }

  ngOnInit() {
  }

}
