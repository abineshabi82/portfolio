import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit,AfterContentInit {
  private expContent:any=null;
  private expImg:any=null;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.expContent=document.querySelector('.exp-content');
    this.expImg=document.querySelector('.exp-img');
  }

  ngAfterContentInit(){
    this.slideLeftDisappear();
  }

  slideLeftDisappear(){
    let flag=0;
    this.router.events.subscribe(x=>{
      if(x instanceof NavigationStart && flag==0){
        flag=1;
        let route=x.url.slice(1);
        let body:any=document.querySelector('body');
        if(route=="intro"){
          body.style.background="linear-gradient(180deg, #7bb0c8 0%, #ace5ff 70%, #7bb0c8 99%)";
        }else if(route=="skill"){
          body.style.background="linear-gradient(180deg, #67cca0 0%, #bcffdc 65%, #67cca0 100%)";
        }else if(route=="work"){
          body.style.background="linear-gradient(180deg, #fd8f8f 0%, #ffb99a 70%, #fd8f8f 99%)";
        }
        this.router.navigate(['exp']);
        let containermain:any=document.querySelector('.exp-container');
        let nav:any=document.querySelector('.navbar');
        this.expContent.style.animation="final-disappear .5s ease-in forwards";
        setTimeout(()=>{
          this.expImg.style.animation="final-disappear .5s ease-in forwards";
          nav.style.zIndex=1;
        },300);
        setTimeout(()=>{
          containermain.classList.add('slide-left');
        },1500);
        setTimeout(()=>{
            this.router.navigate([route]);
            nav.style.zIndex=2;
        },2500);
      }
    });
  }

}
