import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotifucationService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: [
  ]
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName: any = 'New server';
  newServerContent: any = 'Added server for your project';
  constructor(private toastr: NotifucationService) { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    this.toastr.showSuccess('Server added successfully', 'Success')
  }

  onBlueprintCreated(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    this.toastr.showError('Server created successfully','Success')
  }

  showToasterSuccess() {
    this.toastr.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }

  showToasterError() {
    this.toastr.showError("Something is wrong", "ItSolutionStuff.com")
  }

  showToasterInfo() {
    this.toastr.showInfo("This is info", "ItSolutionStuff.com")
  }

  showToasterWarning() {
    this.toastr.showWarning("This is warning", "ItSolutionStuff.com")
  }

}
