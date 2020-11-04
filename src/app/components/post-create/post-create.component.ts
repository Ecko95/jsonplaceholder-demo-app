import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";

// Model
import { PostModel } from "../../models/post.model";
// Service
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  savedPosts: any[] = [];

  addPost(post: PostModel) {
    //gets user input and submits
    post.title = post.title.trim();
    post.body = post.body.trim();
    this.postsService.addPost(post).subscribe(response => {
      console.log(response);
    });
  }
  clear() {
    localStorage.clear();
  }
  loadSavedPosts() {
    //
  }
  ngOnInit() {
    // this.loadSavedPosts();
  }
}
