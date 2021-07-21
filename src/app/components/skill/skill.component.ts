import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptprogramComponent } from './skillsets/scriptprogram/scriptprogram.component';
import { FrameworklibraryComponent } from './skillsets/frameworklibrary/frameworklibrary.component';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit,AfterViewInit {
  private skillContent:any=null;
  private skillImg:any=null;
  public chart: any = "default";
  constructor(public router:Router) {
  }

  ngOnInit(): void {
    this.skillContent=document.querySelector('.skill-container .skill-content');
    this.skillImg=document.querySelector('.skill-container .skill-image');
  }

  ngAfterViewInit(){
    //FOR SLIDELEFT AND DISAPPEAR
    let flag=0;
    this.router.events.subscribe(x=>{
      if(x instanceof NavigationStart && flag==0){
        flag=1;
        let route=x.url.slice(1);
        let body:any=document.querySelector('body');
        if(route=="exp"){
          body.style.background="#fff38b";//"linear-gradient(180deg, #f7e96d 0%, rgba(255, 243, 144, 1) 65%, #f7e96d 100%)";
        }else if(route=="intro"){
          body.style.background="hsl(215deg 65% 79%)";//"linear-gradient(180deg, #7bb0c8 0%, #ace5ff 70%, #7bb0c8 99%)";
        }else if(route=="work"){
          body.style.background="hsl(6deg 88% 75%)";//"linear-gradient(180deg, #fd8f8f 0%, #ffb99a 70%, #fd8f8f 99%)";
        }

        this.router.navigate(['skill']);
        let containermain:any=document.querySelector('.skill-container');
        let nav:any=document.querySelector('.navbar');
        this.skillContent.style.animation="final-disappear .5s ease-in forwards";
        setTimeout(()=>{
          this.skillImg.style.animation="final-disappear .5s ease-in forwards";
          nav.style.zIndex=1;
        },300);
        setTimeout(()=>{
          containermain.classList.add('slide-left');
        },800);
        setTimeout(()=>{
            this.router.navigate([route]);
            nav.style.zIndex=2;
        },1800);

        
      }
    });
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
