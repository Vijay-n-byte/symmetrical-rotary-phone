import { Component, ViewEncapsulation } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HomepageComponent {

  constructor(private r:Router,private route:ActivatedRoute){}

  
}
