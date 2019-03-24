import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Service1Service} from '../../providers/service1.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;


  users:any;
  

  constructor(
    public router:Router,
    public service:Service1Service) {
      this.service.loadUser().then(data=>{
        this.user = data;
      }).catch(err=>{
        console.log(err);
      })
      

     }



  goPage1(){
  this.router.navigate(['page1']);

  }

  ngOnInit() {
  }

}
