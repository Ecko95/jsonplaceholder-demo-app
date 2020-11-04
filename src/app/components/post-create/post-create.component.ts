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
  public newPost: Subject<any> = new Subject<any>();
  public newPost$ = this.newPost.asObservable();

  savedPosts: any[] = [];

  addPost(post: PostModel) {
    post.title = post.title.trim();
    post.body = post.body.trim();
    this.postsService.addPost(post).subscribe(response => {
      this.newPost.next(post);
      localStorage.setItem("newPost", JSON.stringify(this.savedPosts));
    });
  }
  clear() {
    localStorage.clear();
  }
  loadSavedPosts() {
    if (localStorage.getItem("savedPosts")) {
      this.savedPosts = JSON.parse(localStorage.getItem("savedPosts"));
    } else {
      // No data, start with an empty array
      this.savedPosts = [];
    }
  }
  ngOnInit() {
    this.loadSavedPosts();
    this.newPost$.subscribe(response => {
      this.savedPosts.push(response);
      localStorage.setItem("savedPosts", JSON.stringify(this.savedPosts));
    });
  }
}
