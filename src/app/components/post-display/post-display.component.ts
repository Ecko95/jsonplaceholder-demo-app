import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// Model
import { PostModel } from '../../models/post.model';
import { UserModel } from '../../models/user.model';

// Service
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {
  posts: PostModel[];
  users: UserModel[];
  postsToLoad: Observable<any>;
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private http: HttpClient
  ) {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.setUserName();
    });
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
      this.setUserName();
    });
    console.log(this.posts);
  }

  getPostsAsync() {
    // let params = new HttpParams().set('id', '1');
    // let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.postsToLoad = this.http.get(this.ROOT_URL + '/posts');
  }

  setUserName() {
    if (this.posts && this.users) {
      for (const post of this.posts) {
        for (const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name;
          }
        }
      }
    }
  }

  ngOnInit() {
    this.getPostsAsync();
  }
}
