import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyWeb';

  serverElements = [{type: 'blueprint', name:'Test server', content: 'Just a Text!'}]

  onServerAdded(serverData : {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'server',
       name:serverData.serverName,
       content: serverData.serverContent
     })
     console.log(serverData.serverName)
  }

  onBlueprintCreated(blueprintData:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',  
      name:blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }
}
