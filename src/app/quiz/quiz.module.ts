import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { ReviewresultComponent } from './reviewresult/reviewresult.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    QuizComponent,
    ReviewresultComponent,
    StartComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuizRoutingModule
  ],
  exports:[QuizComponent,ReviewresultComponent,StartComponent],
  
})
export class QuizModule {

}
