import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider } from "angularx-social-login";
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private socialService: SocialAuthService,
              private authService: AuthServiceService,
              private fb: FormBuilder
    ) { }
  ngOnInit(): void {
    
  }

  user = this.fb.group({
    email: (''),
    password: ('')
  })

  googleLogin(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(resp => {
      console.log(resp)
      this.authService.login(resp.email, resp.id)
        .subscribe(data => {
          console.log("LoginComponent", data);
        })
    })
  }

  
  

}