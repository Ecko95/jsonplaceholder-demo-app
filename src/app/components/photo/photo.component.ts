import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

// Model
import { PhotoModel } from "../../models/photo.model";

// Service
import { PhotosService } from "../../services/photos.service";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"]
})
export class PhotoComponent implements OnInit {
  photos: PhotoModel[];
  readonly ROOT_URL = "https://jsonplaceholder.typicode.com/photos";
  // photosToLoad: Observable<any>;

  constructor(private photosService: PhotosService, private http: HttpClient) {}

  getPhotos(): void {
    this.photosService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

  ngOnInit() {
    this.getPhotos();
  }
}
