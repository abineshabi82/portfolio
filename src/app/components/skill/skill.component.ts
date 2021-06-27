import { Component, OnInit } from '@angular/core';
import { ScriptprogramComponent } from './skillsets/scriptprogram/scriptprogram.component';
import { FrameworklibraryComponent } from './skillsets/frameworklibrary/frameworklibrary.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  public chart: any = "default";
  constructor() {
  }

  ngOnInit(): void {

  }

  changeChart(value: any) {
    this.chart = value;
    this.triggerHammerAnimation();
  }
  // setActiveButton(){
  //   let buttons=document.querySelectorAll()
  //   if(this.chart=='scriptprogram'){

  //   }else if(this.chart=='scriptprogram'){

  //   }else if(this.chart=='scriptprogram'){

  //   }
  // }

  triggerHammerAnimation() {
    let img: any = document.querySelector('.skill-container .skill-image');
    let triggerButtons:any=document.querySelectorAll(".skill-item");

    triggerButtons.forEach((element:any) => {
      element.disabled=true;
    });

    img.querySelector('.head').style.animation = 'init-char-appear 1s .8s forwards, head-move 1s 4.1s forwards, final-char-disappear 1s 7.1s forwards';
    img.querySelector('.dress').style.animation = 'init-char-appear 1s .8s forwards, final-char-disappear 1s 7.1s forwards';
    img.querySelector('.pant').style.animation = 'init-char-appear 1s .8s forwards, final-char-disappear 1s 7.1s forwards';
    img.querySelector('.lhand').style.animation = 'init-char-appear 1s .8s forwards, hit-target ease-in 2s 2.1s forwards, hand-disappear 1s 7.1s forwards';
    img.querySelector('.rhand').style.animation = 'init-char-appear 1s .8s forwards, hit-target ease-in 2s 2.1s forwards, hand-disappear 1s 7.1s forwards';
    img.querySelector('.hammer').style.animation = 'hammer 2s forwards, hit-target ease-in 2s 2.1s forwards, hammer-move-to-init 2s 7.1s forwards';
    img.querySelector('.hittertop').style.animation = 'hitterappear 1s .8s forwards, hittertop 1s 4s linear forwards, hitterdisappear 1s 7.1s forwards';
    img.querySelector('.hitterbottom').style.animation = 'hitterappear 1s .8s forwards, hitterdisappear 1s 7.1s forwards';
    setTimeout(()=>{ 
      triggerButtons.forEach((element:any) => {
        element.disabled=false;
      });
      img.querySelector('.head').style.animation= 'none';
      img.querySelector('.dress').style.animation='none';
      img.querySelector('.pant').style.animation='none';
      img.querySelector('.lhand').style.animation='none';
      img.querySelector('.rhand').style.animation='none';
      img.querySelector('.hammer').style.animation='none';
      img.querySelector('.hittertop').style.animation='none';
      img.querySelector('.hitterbottom').style.animation='none';
    },8500);
  }

}
