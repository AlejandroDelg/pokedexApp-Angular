import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { TarjetaPokemonComponent } from '../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonnService } from '../services/pokemonn.service';

@Component({
  selector: 'app-detalles-pokemon',
  standalone: true,
  imports: [TarjetaPokemonComponent],
  templateUrl: './detalles-pokemon.component.html',
  styleUrl: './detalles-pokemon.component.scss'
})
export class DetallesPokemonComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if(this.pokemon){
     this.pokemonService.getDescription(this.pokemon?.id).then((texto: string) => {
        this.descripcion = texto;
      });
  }

  return
}

constructor(private pokemonService: PokemonnService) {


}

  @Input() pokemon?: Pokemon;

  descripcion: string = "";
}
