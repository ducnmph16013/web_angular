import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  listStudent: Array<any> = [];
  constructor(private studentService: StudentService) { }
  
  ngOnInit(): void {
    this.getStudent()
  }
  getStudent(){
    this.studentService.list()
        .subscribe(data =>{
          this.listStudent = data;
        });
  }
  deleteStudent(id: number){
    this.studentService.deleteStudent(id)
      .subscribe(data => {
        console.log(data)
        this.listStudent = this.listStudent.filter(val=>{
          return val.id != id
        })
        alert("Xóa thành công");
        
      })
    
  }
}
