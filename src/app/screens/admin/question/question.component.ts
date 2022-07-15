import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  listQuestion: Array<any> = [];
  constructor(private questionService: QuestionService,
                private activateRouter: ActivatedRoute            
    ) { 

  }

  param:any = "";
  ngOnInit(): void {
    this.activateRouter.params.subscribe(res => this.param = res['id']);
    console.log(this.param)
    this.getQuestion();
  }
  getQuestion(){
    this.questionService.list(this.param)
      .subscribe(data =>{
        this.listQuestion = data;
        console.log(data);
        
      })
  }
  // removeQuestion(id: number){
  //     this.questionService.deleteQuestion(id)
  //       .subscribe(data => {
  //         console.log(data)
  //         this.listQuestion = this.listQuestion.filter(val=>{
  //           return val.id != id
  //         })
  //         alert("Xóa thành công");
          
  //       })
  // }
}
