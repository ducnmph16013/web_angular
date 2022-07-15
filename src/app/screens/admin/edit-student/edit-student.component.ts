import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
                private studentService: StudentService
    ) { }

  ngOnInit(): void {
    this.getDetailStudent()
  }
  studentData:any = '';
  id:any = ''
  getDetailStudent(){
    this.route.params.subscribe(data =>{
      this.id = data['id']
      this.studentService.getDetailStudent(data['id']).subscribe(data =>{
        console.log(data);
        this.studentData = data;
        console.log(this.studentData);
        
      })
    })
  }
  editStudent(){
    this.studentService.editStudent(this.id, this.studentData).subscribe(data=>{
      alert("Sửa thành công")
    })
  }

}
