import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  listPokemons: any [] = [];
  id: number = 0;
  buscar: string = '';

  constructor(private _PokemomService: PokemonService) {}

  ngOnInit(): void {
    this.obtenerPokemons();
  }

  obtenerPokemons() {
    this.listPokemons.length = 0;
    for(let i = 1; i <= 150; i++) {
      this._PokemomService.getPokemons(i).subscribe(
        res => {
          this.listPokemons.push(res)
        }, error => {
          console.log(error);
        }
      )
    }
  }

  obtenerId(id: number) {
    return this.id = id-1;
  }
}
