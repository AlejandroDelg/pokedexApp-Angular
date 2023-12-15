import { Component, OnInit } from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonnService } from '../../services/pokemonn.service';
import { Resultado } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private pokemonService : PokemonnService){

  }

  pagina: number  = 0;
  listaPokemon:Resultado[] = [];
  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista(){

    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage(20, 1)];
    this.pagina++;
  }

}
