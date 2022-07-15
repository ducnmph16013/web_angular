import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  listStudent: Array<any> = [];
  studentData = {
    name: "",
    email: "",
    avatar: "",
    roles: [
      {
        name:''
      } 
    ],
    googleId:"",
    marks: []
  }
  constructor(private studentService: StudentService) { }
  keyword: string = "";
  ngOnInit(): void {
  }
  addStudent(){
    console.log(this.studentData)
    this.studentService.addNew(this.studentData)
      .subscribe(newStudent => {
        this.listStudent.push(newStudent);
        alert("Thêm thành công");
      });
  }


}
