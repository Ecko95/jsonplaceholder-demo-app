import { Component, OnInit } from '@angular/core';

// Model
import { CommentModel } from '../../models/comment.model';
// Service
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: CommentModel[]
  constructor(
    private commentsService: CommentsService
  ) { }

  getComments(): void {
    this.commentsService.getComments()
      .subscribe(comments => this.comments = comments)
  }

  ngOnInit() {
    this.getComments()
  }

}