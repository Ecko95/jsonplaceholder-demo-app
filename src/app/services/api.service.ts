import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { PostModel } from "../models/post.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=UTF-8"
  })
};

@Injectable()
export class ApiService {
  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set("userId", "1");
    let headers = new HttpHeaders().set("Authorization", "auth-token");

    this.posts = this.http.get(this.ROOT_URL + "/posts", { params, headers });
  }

  createPost() {
    const data: PostModel = {
      id: null,
      userId: 23,
      title: "My New Post",
      body: "Hello World!"
    };
    this.newPost = this.http.post(this.ROOT_URL + "/posts", data);
  }
}
