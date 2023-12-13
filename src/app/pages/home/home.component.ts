import { Component, OnInit } from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonnService } from '../../services/pokemonn.service';

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

  ngOnInit(): void {
    this.pokemonService.getByPage();
  }

  async cargarLista(){
    
  }

}
