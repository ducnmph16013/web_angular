import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }
  listSubject: Array<any> = [];
  ngOnInit(): void {
    this.getSubject()
  }
  getSubject(){
    this.subjectService.list()
      .subscribe(data =>{
        this.listSubject = data;
      })
  }
}
