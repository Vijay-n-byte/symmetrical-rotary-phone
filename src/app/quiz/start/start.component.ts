import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(private route:ActivatedRoute,private j:Router){}
  quiztest(){
    this.j.navigate(['quiz'],{relativeTo:this.route});
  }
}
