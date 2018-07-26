import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ConfigConstants } from '../../appDataConfig';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  pageTitle = ConfigConstants.contactPage.pageTitle;
  staticContact = ConfigConstants.contactPage.staticContact;
  googleMapUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(ConfigConstants.contactPage.googleMapUrl);
  formConstants = ConfigConstants.contactPage.form;
  successData = ConfigConstants.contactPage.successData;
  success = false;

  constructor(private fb: FormBuilder, private http: Http, private firebase: AngularFireDatabase, private domSanitizer: DomSanitizer) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,
      Validators.pattern('[0-9]{10}')]],
      message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(150)]]
    });
  }

  submitForm() {
    const { name, email, phone, message } = this.contactForm.value;
    const date = Date();
    const formRequest = { name, email, phone, message, date };
    this.firebase.list('/contact-messages').push(formRequest);
    this.contactForm.reset();
    this.success = true;
  }

  ngOnInit() {
  }

}
