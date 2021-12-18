import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sever-element',
  templateUrl: './sever-element.component.html',
  styles: [
  ]
})
export class SeverElementComponent implements OnInit {

  @Input() element : any =  {type: '', name:'', content:'',}

  constructor() { }

  ngOnInit(): void {
  }

}
