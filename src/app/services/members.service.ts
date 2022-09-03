import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Members } from '../model/members.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiUrlEndPoint: string = '/members';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  listAllMembers(status: any): Observable<any> {
    return this.httpClient.get(this.baseUrl.concat(this.apiUrlEndPoint), status);
  }

  addMember(member: any): Observable<any> {
    console.log("Haha", member);
    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint),
      member
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

  getMemberById(id: number): Observable<Members> {
    return this.httpClient.get<Members>(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }
}
