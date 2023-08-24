import { Component, ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'projectangular';
 // private modalService: NgbModal
  constructor(private j:Router,private route:ActivatedRoute){

  }

  press(){
    this.j.navigate(['review']);

  }


  // public open(modal: any): void {
  //   this.modalService.open(modal);
  // }
}
