import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
 
  {path:'home',component:HomepageComponent,
    children:[{path:'',loadChildren:()=>import("../app/quiz/quiz.module").then(v=>v.QuizModule)}]},
  {path:"**",redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
