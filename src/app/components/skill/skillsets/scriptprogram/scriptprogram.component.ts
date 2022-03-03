import { Component, OnInit,AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-scriptprogram',
  templateUrl: './scriptprogram.component.html',
  styleUrls: ['./scriptprogram.component.scss']
})
export class ScriptprogramComponent implements OnInit,AfterViewInit {

  @Input("skillData") skillData:any;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      let chart:any=document.querySelector(".chart-skills .chart-area");
      chart.querySelector('.html').style.transform='scaleY(1)';
      chart.querySelector('.css').style.transform='scaleY(1)';
      chart.querySelector('.js').style.transform='scaleY(1)';
      chart.querySelector('.java').style.transform='scaleY(1)';
      // chart.querySelector('.node-js').style.transform='scaleY(1)';
    },4000);
  }

}
