import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = []
  private apikey: string = 'R1eiRKOdCIOCfCcCmkRwwGc6CI1dC1FT'
  private serviceURL: string = 'https://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  organizeHistory( tag: string ) {
    tag = tag.toLowerCase()
    
    if ( this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldtag) => oldtag !== tag)
    }

    this._tagsHistory.unshift( tag )
    this._tagsHistory = this.tagsHistory.splice(0, 10)
  }

  searchTag( tag: string ): void {
    if ( tag.length === 0 ) return
    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('apikey', this.apikey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get(`${ this.serviceURL }/search`, { params }).subscribe( resp => {
      console.log( resp )
    })

  }


}
