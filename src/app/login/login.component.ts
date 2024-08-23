import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userList = [{user: 'kane@email.com', pass: 'admin'}];

  username = '';
  password = '';

  constructor(private router:Router){
  };

  buttonClicked(){
    console.log("Submit Button pressed!");
    console.log(this.username, this.password);
    for(let i = 0; i < this.userList.length; i++){
      if(this.username == this.userList[i].user){
        if(this.password == this.userList[i].pass){
          console.log('LOGIN successful!');
          this.login();
          continue;
        }
      }
      else{
        console.log('Incorrect Password or user.');
      }
    }
  }

  login(){
    this.router.navigate(['account']);
  }
}
