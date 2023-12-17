import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonnService } from '../../services/pokemonn.service';
import { Resultado } from '../../interfaces/pokeapi';
import { Pokemon } from '../../interfaces/pokemon';
import { DetallesPokemonComponent } from '../../detalles-pokemon/detalles-pokemon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent, DetallesPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private pokemonService : PokemonnService){

  }

  @ViewChild("tarjetas") tarjetasElement!:ElementRef; 

  pagina: number  = 0;
  cargando : boolean = false;
  pokemonSeleccionado?: Pokemon;

  listaPokemon:Resultado[] = [];
  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById("1");
  }

  async cargarLista(){
    
    this.cargando = true;
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage(40, this.pagina)];
    this.pagina = this.pagina + 1;
    this.cargando = false;
  }

  onScroll(e : any){
    if(this.cargando){
      return;
    }
    if(Math.round(this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop) ===
    e.srcElement.scrollHeight){
      this.cargarLista();
    }
  }
  async tarjetaClickeada(id : string){
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
    console.log(this.pokemonSeleccionado)
  }
}
