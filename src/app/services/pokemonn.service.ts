import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonnService {

  constructor() { }
  async getByPage(limit: number = 20, page: number = 0): Promise<Resultado[]>{
    const offset: number = limit* page;
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit="+limit+"&offset=" + offset)
    const resJson = await res.json();
    if(resJson.results.length > 0){
      return resJson.results;
    }
    return [];
  }

  async getNgModuleById(id: string){
    //https://pokeapi.co/api/v2/pokemon/

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+ id)
    const resJson = await res.json();
    console.log(resJson);

  }
  getDescription(){

  }

}
