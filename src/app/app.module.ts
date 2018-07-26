import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule,
  MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSidenavModule, MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { WelcomeCardComponent } from './HomeFolder/welcome-card/welcome-card.component';
import { GridComponent } from './HomeFolder/grid/grid.component';
import { AboutusComponent } from './AboutUsFolder/aboutus/aboutus.component';
import { AboutusGridComponent } from './AboutUsFolder/aboutus-grid/aboutus-grid.component';
import { OurAimComponent } from './OurAimFolder/our-aim/our-aim.component';
import { OurAimGridComponent } from './OurAimFolder/our-aim-grid/our-aim-grid.component';
import { ContactUsComponent } from './ContactUsFolder/contact-us/contact-us.component';
import { ContactUsGridComponent } from './ContactUsFolder/contact-us-grid/contact-us-grid.component';
import { DonateUsComponent } from './DonateUsFolder/donate-us/donate-us.component';
import { DonateUsGridComponent } from './DonateUsFolder/donate-us-grid/donate-us-grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './HomeFolder/home/home.component';
import { AboutPageComponent } from './AboutUsFolder/about-page/about-page.component';
import { AimPageComponent } from './OurAimFolder/aim-page/aim-page.component';
import { DonatePageComponent } from './DonateUsFolder/donate-page/donate-page.component';
import { ContactPageComponent } from './ContactUsFolder/contact-page/contact-page.component';
import { StaticbgComponent } from './staticbg/staticbg.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './footer/footer.component';
import { JoinUsComponent } from './JoinUsFolder/join-us/join-us.component';
import { JoinUsGridComponent } from './JoinUsFolder/join-us-grid/join-us-grid.component';
import { JoinPageComponent } from './JoinUsFolder/join-page/join-page.component';
import { BlogComponent } from './blog/blog.component';
import { FlexModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogTruncatePipe } from './blog/blog-truncate.pipe';
import { HomeSocialCountComponent } from './HomeFolder/home-social-count/home-social-count.component';
import { HomeBlogComponent } from './HomeFolder/home-blog/home-blog.component';
import { Ng2OdometerModule } from 'ng2-odometer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { environment } from '../environments/environment';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faBars, faCheckCircle, faTimesCircle, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { UnderConstructionPageComponent } from './under-construction-page/under-construction-page.component';
library.add(faTwitter, faFacebookF, faYoutube, faUsers, faBars, faCheckCircle, faTimesCircle, faUsersCog);


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutPageComponent },
  { path: 'ouraim', component: AimPageComponent },
  { path: 'contactus', component: ContactPageComponent },
  { path: 'donateus', component: DonatePageComponent },
  { path: 'joinus', component: JoinPageComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeCardComponent,
    GridComponent,
    AboutusComponent,
    AboutusGridComponent,
    OurAimComponent,
    OurAimGridComponent,
    ContactUsComponent,
    ContactUsGridComponent,
    DonateUsComponent,
    DonateUsGridComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutPageComponent,
    AimPageComponent,
    DonatePageComponent,
    ContactPageComponent,
    StaticbgComponent,
    FooterComponent,
    JoinUsComponent,
    JoinUsGridComponent,
    JoinPageComponent,
    BlogComponent,
    BlogTruncatePipe,
    HomeSocialCountComponent,
    HomeBlogComponent,
    UnderConstructionPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FlexModule,
    FontAwesomeModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    Ng2OdometerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
