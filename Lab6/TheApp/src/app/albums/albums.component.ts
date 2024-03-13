import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Album } from '../Album';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]> = of([]);

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albums$ = this.albumsService.getAlbums();
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums$ = this.albums$.pipe(
        map(albums => albums.filter(album => album.id !== id))
      );
    });
  }
}

