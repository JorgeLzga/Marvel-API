import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
  export class CharacterListComponent implements OnInit {
    characters: any[] = [];
    errorMessage: string | null = null;

    constructor(private marvelService: MarvelService) {}

    ngOnInit(): void {
      this.marvelService.getCharacters().subscribe({
        next: (data: any) => {
          this.characters = data.data.results;
        },
        error: (err) => {
          this.errorMessage = 'Error al cargar los personajes. Por favor, inténtalo de nuevo más tarde.';
          console.error(err);
        },
      });
    }

  }