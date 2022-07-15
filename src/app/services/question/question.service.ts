import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  list(subject_code: string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/${subject_code}`);
  }
  addQuestion(subject_code: string, data: any): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/${subject_code}`, {...data});
  }
  deleteQuestion(id: number){
    return this.http.delete(`${environment.apiUrl}/${id}`)
  }
}
