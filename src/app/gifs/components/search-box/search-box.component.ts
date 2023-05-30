import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild('txtInputSearch')
  tagInputSearch!: ElementRef<HTMLInputElement>

  constructor( private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInputSearch.nativeElement.value
    console.log(newTag)

    this.gifsService.searchTag(newTag)
    this.tagInputSearch.nativeElement.value = ''
  }

}
