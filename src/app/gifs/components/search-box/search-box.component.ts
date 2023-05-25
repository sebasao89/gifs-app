import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild('txtInputSearch')
  tagInputSearch!: ElementRef<HTMLInputElement>

  searchTag() {
    const newTag = this.tagInputSearch.nativeElement.value
    console.log(newTag)
  }

}
