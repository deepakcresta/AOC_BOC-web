import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Events } from '../model/events.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  apiUrlEndPoint: string = '/events';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  listAllEvents(status: any): Observable<any> {
    // return this.httpClient.get(this.baseUrl.concat(this.apiUrlEndPoint), status);
    let params = new HttpParams();
    if (status) {
      params = params.append('status', status);
    }
    return this.httpClient.get<any>(
      this.baseUrl.concat(this.apiUrlEndPoint),
      {
        params,
      }
    );
  }

  addEvent(event: any): Observable<any> {
    console.log("Haha", event);
    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint),
      event
    );
  }

  editEventById(id: number, event: any): Observable<any> {
    return this.httpClient.put(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id),
      event
    );
  }

  deleteEventById(id: number): Observable<any> {
    return this.httpClient.delete(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }

  getEventById(id: number): Observable<Events> {
    return this.httpClient.get<Events>(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }
}
