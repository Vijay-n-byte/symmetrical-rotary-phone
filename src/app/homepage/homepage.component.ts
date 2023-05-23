import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HomepageComponent {

  constructor(private r:Router){}

  quiztest(){
    this.r.navigate(['quiz']);

  }

}
