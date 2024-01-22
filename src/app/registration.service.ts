// src/app/registration.service.ts
import { Injectable } from '@angular/core';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private students: any[] = [];
  updatedStudent: any;
 
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://prod-23.eastasia.logic.azure.com:443/workflows/9b05930f746c4475be50190b98ecdfe2/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=_pN1GxnTD576Q-JY3wPKfIYk4It_Ep-51Pz7aM-Kz6Q';
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>('your-api-endpoint');
  }
  // getStudents(): any[] {
  //   return this.students;
  // }

  registerStudent(studentData: any): Observable<any> {
    const url = `${this.apiUrl}/students`; // Adjust the endpoint accordingly

    // Assuming your backend expects a POST request to create a new student
    return this.http.post<any>(url, studentData);
  }

  // Add other methods for CRUD operations as needed
}

  // deleteStudent(index: number): void {
  //   this.students.splice(index, 1);
  // }

  // updateStudent(index: number, updatedStudent: any): void {
  //   this.students[index] = updatedStudent;
  // }

