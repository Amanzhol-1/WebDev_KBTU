import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../Album';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'; 

@Component({ 
  selector: 'app-album-detail', 
  standalone: true, 
  imports: [ CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './album-detail.component.html', 
  styleUrls: ['./album-detail.component.css'] 
}) 
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.albumsService.getAlbumById(+albumId).subscribe((album) => {
        this.album = album;
      });
    }
  }

  saveAlbum() {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe({
        next: (updatedAlbum) => {
          console.log('Album updated:', updatedAlbum);
          this.router.navigate(['/albums']);
        }
      });
    }
  }
}



