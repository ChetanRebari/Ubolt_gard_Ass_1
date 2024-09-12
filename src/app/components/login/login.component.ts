import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
constructor(private router:Router){}

  onSubmit(formValue:any){
  // //  console.log(formValue)
  localStorage.setItem('userData', JSON.stringify(formValue));
   this.router.navigate([''])
  }
}
