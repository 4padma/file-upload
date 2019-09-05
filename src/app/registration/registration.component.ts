import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    regiForm: FormGroup;
    loginForm: FormGroup;
    isRegister: boolean = false;
    data = {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    }
    login = {
        userName: '',
        password: ''
    }
    constructor(private fb: FormBuilder, private httpService: ApiCallsService, private router: Router) {

    }
    ngOnInit() {
        // To initialize FormGroup  
        this.regiForm = this.fb.group({
            'FirstName': [''],
            'LastName': [null],
            'UserName': [null, Validators.required],
            'Email': [null],
            'Password': [null, Validators.required]
        });
        this.loginForm = this.fb.group({
            'UserName': [null, Validators.required],
            'Password': [null, Validators.required]
        })
    }
    submitLoginForm() {
        console.log("login form");
        this.router.navigate(['products'])
    }

    submitRegForm() {
        if (this.regiForm.invalid) {
            this.regiForm.dirty;
            return;
        }
        console.log(this.regiForm);
        this.isRegister = true;
        let options = {
            url: 'https://www.google.com',
            data: this.data
        }
        this.httpService.apiPostObservable(options).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err)
        })
    }
}