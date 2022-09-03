import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attendance } from '../model/attendance.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  apiUrlEndPoint: string = '/attendance';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  listAllAttendance(status: any): Observable<any> {
    return this.httpClient.get(this.baseUrl.concat(this.apiUrlEndPoint), status);
  }

  addAttendance(attendance: any): Observable<any> {
    console.log("Haha", attendance);
    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint),
      attendance
    );
  }

  editAttendanceById(id: number, attendance: any): Observable<any> {
    return this.httpClient.put(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id),
      attendance
    );
  }

  deleteAttendanceById(id: number): Observable<any> {
    return this.httpClient.delete(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }

  getAttendanceById(id: number): Observable<Attendance> {
    return this.httpClient.get<Attendance>(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }
}
