import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gits.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = []
}
