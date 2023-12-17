import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonnService } from '../../services/pokemonn.service';

@Component({
  selector: 'app-foto-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.scss'
})
export class FotoPokemonComponent {

  @Input() pokemon?: Pokemon;

  getFrontDefault(pok: Pokemon){
    return pok.sprites.other['official-artwork'].front_default;
  }
  
}
