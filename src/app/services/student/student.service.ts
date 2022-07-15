import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  update(user: any):Observable<any>{
    localStorage.setItem('login_user', JSON.stringify(user))
    return this.http.put<any>(`${environment.student_api}/${user.id}`, {...user});
  }
  list(): Observable<any>{
    return this.http.get<any>(`${environment.student_api}`)
  }
  addNew(data: any): Observable<any>{
    return this.http.post<any>(environment.student_api, {...data});
  }
  deleteStudent(id: number){
    return this.http.delete(`${environment.student_api}/${id}`)
  }
  getDetailStudent(id: number){
    return this.http.get(`${environment.student_api}/${id}`)
  }
  editStudent(id: number,data:any){
    return this.http.put<any>(`${environment.student_api}/${id}`,{...data})
  }
}
