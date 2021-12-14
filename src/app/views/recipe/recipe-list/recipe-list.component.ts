import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe('A Test Recipe', 'This is New test Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/1200px-Indian_-_Food.jpg'),

    new Recipe('Chicken Rice', 'This is New test Recipe',
      'https://i.ytimg.com/vi/jR96nNYUZhg/maxresdefault.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
