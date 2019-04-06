import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formObject') signUpForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string;
  genders: string[] = ['male', 'female'];
  user = {
    userName: '',
    email: '',
    gender: '',
    secret: '',
    answer: ''
  };
  submitted: boolean = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: '' 
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({
      userData: {
        userName: suggestedName
      },
      gender: 'male'
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.userName = this.signUpForm.value.userData.userName;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
}
