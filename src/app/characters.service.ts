import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(public httpClient: HttpClient) {}

  getCharacters(apiURL){
    return this.httpClient.get(apiURL);
  }

}
