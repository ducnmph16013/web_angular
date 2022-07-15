import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './screens/login/login.component';
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
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home/home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddQuestionComponent,
    AddStudentComponent,
    DashboardComponent,
    EditQuestionComponent,
    EditStudentComponent,
    QuestionComponent,
    StudentComponent,
    SubjectComponent,
    FinalComponent,
    HomeComponent,
    QuizComponent,
    SubComponent,
    AdminLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
