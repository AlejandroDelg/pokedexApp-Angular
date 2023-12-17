import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

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

  async getById(id: string):Promise<Pokemon>{
    //https://pokeapi.co/api/v2/pokemon/

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+ id)
    const resJson = await res.json();
    const poke: Pokemon = resJson;
    return poke;

  }
  async getDescription(id :string |number): Promise<string>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+ id);
    const resJson = await res.json();
    console.log(resJson);
    const texto =  resJson.flavor_text_entries.find((entry: any) => entry.language.name === "es");
    return texto ? texto.flavor_text : "No se econtró descripción en español";
  }

}
