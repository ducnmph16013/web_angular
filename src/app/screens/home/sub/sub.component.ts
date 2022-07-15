import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  listSubject: Array<any> = [];
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getSubject()
  }
  getSubject(){
    this.subjectService.list()
      .subscribe(data =>{
        this.listSubject = data
      })
  }
}
