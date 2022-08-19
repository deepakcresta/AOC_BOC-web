import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseUrl: string = environment.baseUrl;

  teacherApiEndPoint: string = '/teachers';
  testimonialApiEndPoint: string = '/testimonial';
  aboutApiEndPoint: string = '/about';
  carouselApiEndPoint: string = '/carousels';
  courseApiEndPoint: string = '/course';
  contactApiEndPoint: string = '/contact';
  emailApiEndPoint: string = '/email-send';
  emailSuscribeApiEndPoint: string = '/email-send';

  constructor(private httpClient: HttpClient) {}

  //LISTING OUT ALL TEACHERS WHO ARE AVAILABLE
  
  // Adding the contact of contact form to contact data base
  addContact(contact: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.contactApiEndPoint),
      contact
    );
  }

  //Sending  the email to admon from contact page
  sendEmail(contact: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.emailApiEndPoint),
      contact
    );
  }

  // Email to subscribe the Newsletter in Footer
  subscribeEmail(emailData: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.emailSuscribeApiEndPoint),
      emailData
    );
  }
  // GETTING COURSE BY ID

}
