import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyWeb';

  serverElements = [{type: 'server', name:'Test server', content: 'Just a Text!'}]
}
