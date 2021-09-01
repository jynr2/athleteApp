import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  OnLogin() {
    const formValue = this.loginForm.value;
    let response = this.loginService.Login(formValue);

    if (response != null)
      this.route.navigate(['athletes-info'])
  }


}
