import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { PokemonnService } from '../../services/pokemonn.service';
import { Pokemon } from '../../interfaces/pokemon';


@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})
export class TarjetaPokemonComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.extraerInformacion();
  }

  constructor(private pokemonService: PokemonnService){

  }

  private capitalLetter: string | undefined;
  @Input() data?: Resultado;
  @Input() fullData?: Pokemon;

  @Output() clickeado = new EventEmitter<string>();
  @Input() seleccionado?: boolean = false;
  number: string = "0";
  id: string = "0";

  getCappitalLetterPokemon(pokemon: Resultado){
      this.capitalLetter = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
    return this.capitalLetter;
  }
  extraerInformacion(){
    if(this.data && this.data.url !== ""){
      this.number = this.data.url;
      this.number=  this.number.substring(34, this.number.length-1);
    this.pokemonService.getById(this.number);
    return;
    }
    if(this.fullData){
      this.number=  this.fullData.species.url.substring(42, this.fullData.species.url.length-1);
      this.data= {
        name: this.fullData.name,
        url: ""
      }
    }

  }
}
