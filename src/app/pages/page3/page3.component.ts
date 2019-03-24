import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  param : any;
  constructor(
    public route:ActivatedRoute
  )

  { 
    this.route.params.subscribe(data=>{
      this.param = data;
    })
  }



}
