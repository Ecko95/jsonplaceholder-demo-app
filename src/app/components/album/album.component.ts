import { Component, OnInit } from '@angular/core';

// Model
import { AlbumModel } from '../../models/album.model';

// Service
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: AlbumModel[];
  constructor(
    private albumsService: AlbumsService
  ) { }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => this.albums = albums)
  }

  ngOnInit() {
    this.getAlbums()
  }

}