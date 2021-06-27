import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-frameworklibrary',
  templateUrl: './frameworklibrary.component.html',
  styleUrls: ['./frameworklibrary.component.scss']
})
export class FrameworklibraryComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      let chart:any=document.querySelector(".chart-skills .chart-area");
      chart.querySelector('.angular').style.transform='scaleY(1)';
      chart.querySelector('.react').style.transform='scaleY(1)';
      chart.querySelector('.node').style.transform='scaleY(1)';
      chart.querySelector('.spring').style.transform='scaleY(1)';
      chart.querySelector('.sass').style.transform='scaleY(1)';
      chart.querySelector('.bootstrap').style.transform='scaleY(1)';
    },4000);
  }

}
