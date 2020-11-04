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
  photosArray: PhotoModel[];
  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";
  photosToLoad: Observable<any>;

  constructor(private photosService: PhotosService, private http: HttpClient) {}

  // getPhotos(): void {
  //   this.photosService.getPhotos().subscribe(photos => {
  //     this.photos = photos;
  //     var index = 0;
  //     for (let index = 0; index < 50; index++) {
  //       const element = photos[index];
  //       console.log(element);
  //     }
  //     console.table(this.photosArray);
  //   });
  // }

  getPosts() {
    let params = new HttpParams().set("albumId", "1");
    let headers = new HttpHeaders().set("Authorization", "auth-token");

    this.photosToLoad = this.http.get(this.ROOT_URL + "/photos", {
      params,
      headers
    });
  }

  ngOnInit() {
    this.getPosts();
    // this.getPhotos();
  }
}
