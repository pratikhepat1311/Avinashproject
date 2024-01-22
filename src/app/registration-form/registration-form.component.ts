// src/app/registration-form/registration-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  // student: any = {};
  studentForm!: FormGroup;
 
  successMessage: string | undefined;
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
    // onSubmit(data:any) {
    
    //   if (this.studentForm.valid) {
    //     console.log('Form submitted:', data);
    //   }
    // }
    onSubmit(data: any) {
      if (this.studentForm.valid) {
        // Assuming you have a method in your service to add the student
        this.registrationService.registerStudent(data).subscribe(
          () => {
            this.successMessage = 'Student registration successful!';
            this.studentForm.reset(); // Optionally, reset the form after successful submission
          },
          (error: any) => {
            console.error('Error submitting form:', error);
            this.successMessage;// Clear the success message in case of an error
          }
        );
      }
    }
  }
  