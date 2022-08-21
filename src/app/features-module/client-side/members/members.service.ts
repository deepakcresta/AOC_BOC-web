import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Members } from './members.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiUrlEndPoint: string = '/members';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  listAllMembers(): Observable<any> {
    return this.httpClient.get(this.baseUrl.concat(this.apiUrlEndPoint));
  }

  addMember(teacher: any): Observable<any> {
    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint),
      teacher
    );
  }

  editMemberById(id: number, member: any): Observable<any> {
    return this.httpClient.put(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id),
      member
    );
  }

  deleteMemberById(id: number): Observable<any> {
    return this.httpClient.delete(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }

  getTeacherById(id: number): Observable<Members> {
    return this.httpClient.get<Members>(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }
}
