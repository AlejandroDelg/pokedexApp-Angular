import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild("tarjetas") tarjetasElement!:ElementRef; 
  pagina: number  = 0;
  cargando : boolean = false;

  listaPokemon:Resultado[] = [];
  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getNgModuleById("1");
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
}
