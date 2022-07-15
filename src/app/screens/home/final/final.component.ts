import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private subjectService: SubjectService,
    private authService: AuthServiceService
  ) { }

  id: string = ''
  subject: any = {}
  score: any = {}

  ngOnInit(): void {
    this.router.params.subscribe(res => this.id = res['id'])
    this.subjectService.list()
      .subscribe(res => this.subject = res.find((s:any) => s.Code == this.id))
    let user = this.authService.getLoggedInUser()
    this.score = user.marks.find((s:any) => s.subject == this.id)
  }

}
