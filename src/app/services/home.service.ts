import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from '../shared/interfaces/Category';
import { environment } from '../../environments/environment';
import { Job } from '../shared/interfaces/Job';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>('fake-category-data.json')
      .pipe(catchError(this.handleError));
  }

  getAllJobs(): Observable<Job[]> {
    return this.http
      .get<Job[]>('fake-job-data.json')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
