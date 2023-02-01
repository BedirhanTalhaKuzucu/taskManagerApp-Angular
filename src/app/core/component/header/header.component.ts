import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openClose : boolean = true
  @Output() buttonValue = new EventEmitter<any>
  buttonBackgroun:string = "red" 

  buttonClick(openClose:boolean){
    this.openClose = !openClose
    this.buttonBackgroun =  this.openClose ? "red" : "purple"
    this.buttonValue.emit(this.openClose)
  }

}
