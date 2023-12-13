import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonnService {

  constructor() { }
  async getByPage(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=")
    const resJson = await res.json();
    return resJson;
  }

  getNgModuleById(){
    //https://pokeapi.co/api/v2/pokemon/

  }
  getDescription(){

  }

}
