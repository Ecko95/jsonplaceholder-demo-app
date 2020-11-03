import { Component, OnInit } from "@angular/core";

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
  constructor(private photosService: PhotosService) {}

  getPhotos(): void {
    this.photosService.getPhotos().subscribe(photos => {
      this.photos = photos;
      var index = 0;
      for (let index = 0; index < 50; index++) {
        const element = photos[index];
        console.log(element);
      }
      console.table(this.photosArray);
    });
  }

  ngOnInit() {
    this.getPhotos();
  }
}
