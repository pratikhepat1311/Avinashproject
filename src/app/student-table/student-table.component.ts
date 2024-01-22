// src/app/student-table/student-table.component.ts
import { Component,OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit{
  students: any[] = [];

  constructor(private registrationService: RegistrationService) {}

 

 
displaystudent(){
   this.registrationService.getStudents().subscribe(res=>{this.students=res});
  // Set an 'isEditing' property for each student to manage edit mode
  // this.students.forEach(student => (student.isEditing = false));
}
ngOnInit():void {
    
}

  // deleteStudent(index: number): void {
  //   this.registrationService.deleteStudent(index);
  //   console.log('Student deleted successfully!');
  // }

  // updateStudent(index: number): void {
  //   // Implement the update logic here
  //   console.log('Update student logic goes here!');
  // }|
}


