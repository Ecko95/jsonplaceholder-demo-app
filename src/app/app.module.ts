import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { AboutComponent } from "./pages/about/about.component";
import { UserComponent } from "./components/user/user.component";
import { PostDisplayComponent } from "./components/post-display/post-display.component";
import { PostsService } from "./services/posts.service";
import { UsersService } from "./services/users.service";
import { AlbumsService } from "./services/albums.service";
import { CommentsService } from "./services/comments.service";
import { PhotosService } from "./services/photos.service";
import { AlbumComponent } from "./components/album/album.component";
import { PhotoComponent } from "./components/photo/photo.component";
import { CommentComponent } from "./components/comment/comment.component";
import { PostCreateComponent } from "./components/post-create/post-create.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiService } from "./services/api.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatStepperModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlbumsComponent,
    PostsComponent,
    AboutComponent,
    UserComponent,
    PostDisplayComponent,
    AlbumComponent,
    PhotoComponent,
    CommentComponent,
    PostCreateComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    PostsService,
    UsersService,
    AlbumsService,
    CommentsService,
    PhotosService,
    ApiService
  ]
})
export class AppModule {}
