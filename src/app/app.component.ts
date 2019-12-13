import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sapient';
  characterResult;
  characterCount;
  nextUrl ='https://rickandmortyapi.com/api/character/';
  prevUrl = '';
  dateNow = Date().slice(11,15);

  selected: string;
  filters = ['Ascending', 'Descending'];

  constructor(public characterService: CharactersService){}

  searchCharacter(input){
    let search = input.value.toUpperCase(), li, h;
    li = document.querySelectorAll('mat-card');
    for (let listValue of li) {
        h = listValue.getElementsByTagName("mat-card-title")[0];
        h.textContent.toUpperCase().indexOf(search) > -1?listValue.style.display = "":listValue.style.display = "none";
    }
  }

  sortCharacter(type){
    var selectedSort = type.currentTarget.getElementsByClassName('mat-radio-label-content')[0].textContent.trim();
    let order = this.characterResult.sort((a, b) => a.id - b.id);
    selectedSort ==='Ascending'? order:order.reverse();
  }

  paginationMove(rightVal){
    (<HTMLElement>document.getElementsByTagName('mat-paginator')[0]).style.right = rightVal;
  }

  ngOnInit(){
    
    let fetchData = () =>{
      this.characterService.getCharacters(this.nextUrl).subscribe((characters:any)=>{
        this.characterResult = characters.results;
        this.characterCount = characters.info.count;
        this.nextUrl = characters.info.next;
        this.prevUrl = characters.info.prev;
      });
    }

    fetchData();
    
    document.getElementsByClassName('mat-paginator-navigation-next')[0].addEventListener('click', ()=> fetchData());
    
    document.getElementsByClassName('mat-paginator-navigation-previous')[0].addEventListener('click', () => fetchData());
  }
}
