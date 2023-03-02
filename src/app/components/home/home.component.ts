import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listrandomPokemons: any [] = [];

  constructor(private _pokemonService: PokemonService, private _appComponent: AppComponent){}

  ngOnInit(): void {
    this.obtenerRandomPokemons()
  }
  
  obtenerRandomId(): number {
    return Math.floor(Math.random() * 150);
  }  

  obtenerRandomPokemons() {
    this.listrandomPokemons.length = 0
    for(let i = 1; i <= 3; i++) {
      this._pokemonService.getPokemons(this.obtenerRandomId()).subscribe(
        res => {
          this.listrandomPokemons.push(res);
        }, error => {
          console.log(error);
        }
      )
    }
  }
}
