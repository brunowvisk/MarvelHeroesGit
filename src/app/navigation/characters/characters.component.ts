import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from './character/shared/characters-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters: Observable<any>;

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getCharacters();
  }

  // tslint:disable-next-line: typedef
  getCharacters(){
    this.allCharacters = this.characterSvc.getAllCharacters();
  }

}
