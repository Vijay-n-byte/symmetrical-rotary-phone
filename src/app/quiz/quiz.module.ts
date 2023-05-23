import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports:[QuizComponent],
  
})
export class QuizModule {

}
