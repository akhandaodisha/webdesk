import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ConfigConstants } from '../../appDataConfig';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-home-social-count',
  templateUrl: './home-social-count.component.html',
  styleUrls: ['./home-social-count.component.css']
})
export class HomeSocialCountComponent implements OnInit {

  iconsData = ConfigConstants.homeData.homeSocialIcons;

  facebookApi = ConfigConstants.facebookApi;
  youtubeApi = ConfigConstants.youtubeApi;
  twitterApi = ConfigConstants.twitterApi;

  memberCountObservable: Observable<any[]>;

  constructor(private firebase: AngularFireDatabase, private http: Http) {
    this.getFacebookFanCount();
    this.getYoutubeSubscriberCount();
    this.getMemberCount();
    this.getTwitterFollowerCount();
  }

  getMemberCount() {
    this.memberCountObservable = this.firebase.list('masterSheet').valueChanges();
    this.memberCountObservable.subscribe(res => this.iconsData[3].number = res.length - 1);
  }

  getFacebookFanCount() {
    this.http.get(this.facebookApi.facebookUrl + this.facebookApi.facebookPageId,
      { params: this.facebookApi.facebookApiParams })
      .map(res => res.json())
      .subscribe(res => this.iconsData[0].number = res.fan_count);
  }

  getTwitterFollowerCount() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'true');
    this.http.get(this.twitterApi.twitterUrl, { headers: headers, params: this.twitterApi.twitterApiParams})
    .map(res => res.json())
    .subscribe(res => console.log(res));
  }

  getYoutubeSubscriberCount() {
    this.http.get(this.youtubeApi.youtubeUrl, { params: this.youtubeApi.youtubeApiParams})
    .map(res => res.json())
    .subscribe(res => this.iconsData[2].number = res.items[0].statistics.subscriberCount);
  }

  ngOnInit() {
  }
}
