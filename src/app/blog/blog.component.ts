import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from './wordpress.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts$: any;
  showSpinner = false;
  @Input() show: boolean;

  constructor(private wp: WordpressService) {
    // this.post$ = this.wp.getPosts();
  }

  ngOnInit() {
    this.showSpinner = true;
    this.wp.getPosts(6).subscribe(posts => {
      this.posts$ = posts['posts'];
      this.showSpinner = false;
    });
    // this.post$ = this.wp.getPosts();
  }

}
