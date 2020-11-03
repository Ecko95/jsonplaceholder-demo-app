import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CommentModel } from '../models/comment.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class CommentsService {
  private commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments'
  constructor(
    private http: HttpClient
  ) { }

  getComments(): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(this.commentsUrl)
  }

}