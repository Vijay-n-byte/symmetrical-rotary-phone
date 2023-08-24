import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(private route:ActivatedRoute,private j:Router){}
  quiztest(h:NgForm){
    let name:string=h.value.name;
    let email:string=h.value.email;
    console.log(name);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("test","1");
    this.j.navigate(['quiz'],{relativeTo:this.route});
  }
}
