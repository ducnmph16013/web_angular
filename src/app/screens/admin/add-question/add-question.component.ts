import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  listQuestion: Array<any> = [];
  
  constructor(
    private questionService: QuestionService,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  question = this.fb.group({
    text: [''],
    correct: [''],
    answers: this.fb.array([])
  })

  monhoc: string = ''

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.monhoc = res['monhoc']
      console.log(this.monhoc)
    })
  }

  get answers(){
    return this.question.get('answers') as FormArray
  }

  addAnswer(){
    this.answers.push(this.fb.group({
      id: (new Date()).getTime(),
      Text: ['']
    }))
  }

  removeAns(index: number){
    this.answers.removeAt(index)
  }

  addQuestion(){
    // console.log(this.question)
    // return
    let ques = {
      Text: this.question.value.text,
      Marks: 1,
      AnswerId: this.question.value.answers[this.question.value.correct].id,
      Answers: this.question.value.answers
    }
    this.questionService.addQuestion(this.monhoc, ques)
      .subscribe(res => {
        this.route.navigate(['/admin/cau-hoi/' + this.monhoc])
      })
  }
}
