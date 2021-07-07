import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostModel } from '../models/post.model';

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: 77,
    eye_color: 'blue',
    gender: 'male'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: 136,
    eye_color: 'yellow',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: 49,
    eye_color: 'brown',
    gender: 'female'
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: 84,
    eye_color: 'blue',
    gender: 'male'
  }
];

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  })
};

@Injectable()
export class ApiService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;
  charactersByEyeColor: any;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get(this.ROOT_URL + '/posts', { params, headers });
  }

  getColorsByEyes() {
    this.charactersByEyeColor = characters.reduce((acc, cur) => {
      const color = cur.eye_color;
      if (acc[color]) {
        acc[color]++;
      } else {
        acc[color] = 1;
      }
      return acc;
    }, {});

    console.log(this.charactersByEyeColor);
    this.getAvgMass();
  }
  getAvgMass() {
    var totalParticipants = 4;
    var avgScore2 = characters.reduce((acc, cur) => acc + cur.mass, 0);

    avgScore2 = avgScore2 / totalParticipants;

    console.log(avgScore2);
  }

  createPost() {
    const data: PostModel = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    };
    this.newPost = this.http.post(this.ROOT_URL + '/posts', data);
  }
}
