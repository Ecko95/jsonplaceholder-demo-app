import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

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

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe( posts => {this.posts = posts; this.setUserName()} )
    this.usersService.getUsers()
      .subscribe( users => {this.users = users; this.setUserName()})
    console.log(this.posts)
  }

  setUserName() {
    if (this.posts && this.users) {
      for(const post of this.posts) {
        for(const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }

  ngOnInit() { }

}