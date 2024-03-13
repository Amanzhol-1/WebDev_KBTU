import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent}, 
  { path: 'albums', component: AlbumsComponent},
  { path: 'albums/:id', component: AlbumDetailComponent},
  { path: 'albums/:id/photos', component: AlbumPhotosComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}, 
  // Другие маршруты вашего приложения
];


