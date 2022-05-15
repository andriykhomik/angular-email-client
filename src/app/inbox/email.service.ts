import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(
    @Inject('BASE_URL') private rootUrl: string,
    private http: HttpClient
  ) {}

  public getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }
}
