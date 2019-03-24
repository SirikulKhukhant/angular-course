import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  variable1 = "Click Me";

  username:any;
  password:any;
  show:any;

  form: FormGroup;


  constructor(public formBuilder:FormBuilder){
  this.form = this.formBuilder.group({
    email:["",[Validators.email]],
    password:["",[Validators.minLength(6)]]
   

  });


  }




  onClick(){
  this.variable1 = "clicked!"

  }
  onSubmit(){
    this.show = this.username+" "+this.password
  }
}
