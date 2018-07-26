import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from '../../blog/wordpress.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {
  posts$: any;
  showSpinner = false;
  @Input() show: boolean;

  constructor(private wp: WordpressService) {
  }

  ngOnInit() {
    this.showSpinner = true;
    this.wp.getPosts(1).subscribe(posts => {
      this.posts$ = posts['posts'];
      this.showSpinner = false;
    });
  }

}
