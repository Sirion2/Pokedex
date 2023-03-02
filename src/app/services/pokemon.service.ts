import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  BaseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  DecriptionUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
  Spriteurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private http: HttpClient) { }

  getPokemons(id: number) : Observable<any> {
    return this.http.get(this.BaseUrl + id);
  }

  getObjectPokemons() : Observable<any> {
    return this.http.get(this.BaseUrl);
  }
}
