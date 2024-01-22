import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  
  updatedStudent: any;
  studentForm!: FormGroup;
  
  isEditing = false; // Flag to indicate whether we are in edit mode
  editingStudentId: string | null = null; // ID of the student being edited
  ageValidator(control: { value: any; }): { [key: string]: boolean } | null {
    const age = control.value;
    if (age !== undefined && (isNaN(age) || age < 18 || age > 100)) {
      return { 'invalidAge': true };
    }
    return null;
  }

  constructor(private fb: FormBuilder,private registrationService: RegistrationService) {

    this.studentForm = this.fb.group({
      ID: ['', Validators.required],
      Name: ['', [Validators.required, Validators.minLength(2)]],
      Age: ['', [Validators.required, this.ageValidator]],
      Department: ['', [Validators.minLength(5)]],
      Percentage:  ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      Location: ['', Validators.required],
      CreatedDate: ['', Validators.required],
      });
  
    }
  ngOnInit(): void {
  }

  updstudent() {
    this.registrationService.updatedStudent(this.updatedStudent.value)
    .subscribe((data: any) => {
      console.log(data)
      alert("Updated successfully"); 
    }) 
  }
  
  Onsubmit():void
  {
    alert("Updated successfully");    
  }
}
