import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../pages/home/home.component";
import { PostsComponent } from "../pages/posts/posts.component";
import { AlbumsComponent } from "../pages/albums/albums.component";
import { AboutComponent } from "../pages/about/about.component";
import { UserComponent } from "../components/user/user.component";
import { PhotoComponent } from "../components/photo/photo.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "about", component: AboutComponent },
  { path: "photos", component: PhotoComponent },
  { path: "users", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
