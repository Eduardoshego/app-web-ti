import { Component,} from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username!:string;
  password!:string;
  loginErr!:boolean;

  constructor(private router:Router) { }

  logar(){
    console.log(`User: ${this.username}, password: ${this.password}` )
  }

  navigateToCadastroCreated():void{
    this.router.navigate(['cadastro/created'])
  }



}
