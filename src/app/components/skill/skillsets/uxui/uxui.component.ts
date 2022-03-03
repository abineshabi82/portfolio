import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uxui',
  templateUrl: './uxui.component.html',
  styleUrls: ['./uxui.component.scss']
})
export class UxuiComponent implements OnInit {

  @Input("skillData") skillData:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      let chart:any=document.querySelector(".chart-skills .chart-area");
      chart.querySelector('.figma').style.transform='scaleY(1)';
      chart.querySelector('.blender2d').style.transform='scaleY(1)';
      chart.querySelector('.blender3d').style.transform='scaleY(1)';
      chart.querySelector('.photoshop').style.transform='scaleY(1)';
    },4000);
  }

}
