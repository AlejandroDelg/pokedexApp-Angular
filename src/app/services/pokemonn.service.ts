import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonnService {

  constructor() { }
  async getByPage(): Promise<Resultado[]>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=")
    const resJson = await res.json();
    if(resJson.results.length > 0){
      return resJson.results;
    }
    return [];
  }

  getNgModuleById(){
    //https://pokeapi.co/api/v2/pokemon/

  }
  getDescription(){

  }

}
