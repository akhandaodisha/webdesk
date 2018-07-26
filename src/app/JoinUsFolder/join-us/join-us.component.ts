import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ConfigConstants } from '../../appDataConfig';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  joinForm: FormGroup;
  pageTitle = ConfigConstants.joinPage.pageTitle;
  skillList: Array<string> = ConfigConstants.joinPage.form.skillList;
  formConstants = ConfigConstants.contactPage.form;
  joinText = ConfigConstants.joinPage.joinButtonText;
  formDate = ConfigConstants.joinPage.form;
  successData = ConfigConstants.contactPage.successData;
  success = false;

  d = new Date();
  year = this.d.getFullYear() - 18;
  minYear = this.d.getFullYear() - 80;
  month = this.d.getMonth();
  day = this.d.getDate() - 1;
  minDate = new Date(this.minYear, this.month, this.day);
  maxDate = new Date(this.year, this.month, this.day);

  constructor(private fb: FormBuilder, private http: Http, private firebase: AngularFireDatabase,
    private breakpointObserver: BreakpointObserver) {
    this.createForm();
  }

  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }

  createForm() {
    this.joinForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,
      Validators.pattern('[0-9]{10}')]],
      skill: ['', Validators.required],
      dob: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(150)]]
    });
  }

  submitForm() {
    const { name, email, phone, skill, message, dob } = this.joinForm.value;
    const date = Date();
    const birthDate = String(dob);
    const formRequest = { name, email, phone, skill, message, date, birthDate };
    this.firebase.list('/join-requests').push(formRequest);
    this.joinForm.reset();
    this.success = true;
  }

  ngOnInit() {
  }

}
