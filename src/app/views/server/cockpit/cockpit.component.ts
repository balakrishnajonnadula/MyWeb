import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: [
  ]
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName: any = '';
  newServerContent: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    }
    );
  }

  onBlueprintCreated(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
