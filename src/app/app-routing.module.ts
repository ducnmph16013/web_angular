 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home/home-layout/home-layout.component';
import { AddQuestionComponent } from './screens/admin/add-question/add-question.component';
import { AddStudentComponent } from './screens/admin/add-student/add-student.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { EditQuestionComponent } from './screens/admin/edit-question/edit-question.component';
import { EditStudentComponent } from './screens/admin/edit-student/edit-student.component';
import { QuestionComponent } from './screens/admin/question/question.component';
import { StudentComponent } from './screens/admin/student/student.component';
import { SubjectComponent } from './screens/admin/subject/subject.component';
import { FinalComponent } from './screens/home/final/final.component';
import { HomeComponent } from './screens/home/home/home.component';
import { QuizComponent } from './screens/home/quiz/quiz.component';
import { SubComponent } from './screens/home/sub/sub.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "sinh-vien",
        component: StudentComponent
      },
      {
        path: "sinh-vien/add",
        component: AddStudentComponent
      },
      {
        path: "sinh-vien/edit/:id",
        component: EditStudentComponent
      },
      {
        path: "mon-hoc",
        component: SubjectComponent
      },
      {
        path: ":monhoc/cau-hoi/add",
        component: AddQuestionComponent
      },
      {
        path: "cau-hoi/:id",
        component: QuestionComponent
      },
      {
        path: "cau-hoi/edit/:id",
        component: EditQuestionComponent
      }
      
    ]
  },
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "mon-hoc",
        component: SubComponent
      },
      {
        path: "quiz/:id",
        component: QuizComponent
      },
      {
        path: "quiz/:id/ket-qua",
        component: FinalComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
