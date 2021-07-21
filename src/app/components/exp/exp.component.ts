import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit, AfterContentInit {
  private expContent: any = null;
  private expImg: any = null;

  private angular: any;
  private react: any;
  private java: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.expContent = document.querySelector('.exp-content');
    this.expImg = document.querySelector('.exp-img');
  }



  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    //IMPORTANT CALC
    //  console.log(element,rect.top/2 >= 0,rect.bottom-(windowHeight/2) <= windowHeight);
    return (rect.top / 2 >= 0 && rect.bottom - (windowHeight / 2) <= windowHeight);  //&& rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  }

  //Image and Content fade in and out
  fadeInOut() {
    this.angular = document.querySelector('.angular');
    let pFlagOut = true;
    this.react = document.querySelector('.react');
    let aFlagOut = true;
    this.java = document.querySelector('.java');
    let cFlagOut = true;
    console.log(this.angular);

    let arrow:any=document.querySelector(".arrow");

    function debounce(fn:any,time:number){
      // console.log("de");
      let timeout:any;
      return function(...args:any){
        if(timeout){
          clearTimeout(timeout);
        }
        timeout=setTimeout(()=>{fn(...args);},time);
      }
    }
    
    document.querySelector(".exp-container")?.addEventListener('scroll',debounce((event:any)=>{
      console.log("hi");
      //For arrow
      if(event.target.scrollTop>200){
        arrow.style.visibility="hidden";
      }
      else{
        arrow.style.visibility="visible";
      }   

      // debugger;
      let pVal = this.isInViewport(this.angular);

      let aVal = this.isInViewport(this.react);
      let cVal = this.isInViewport(this.java);
      // console.log(pVal,pFlagOut);
      if (pVal && pFlagOut) {
        console.log("a in");
        pFlagOut = false;
        this.angular.querySelector('.lap').style.transform = "scale(1)";
        this.angular.querySelector('.lap').style.opacity = 1;
        this.angular.querySelector('.phone').style.transform = "translateX(0px)";
        this.angular.querySelector('.phone').style.opacity = 1;
        this.angular.querySelector('.tab').style.transform = "translateX(0px)";
        this.angular.querySelector('.tab').style.opacity = 1;

        this.angular.querySelector('.project-content').setAttribute("style", "opacity: 1;transform: translateY(0px);");
      }
      else if (!pVal && !pFlagOut) {
        console.log("a out");
        pFlagOut = true;
        this.angular.querySelector('.lap').style.transform = "scale(.9)";
        this.angular.querySelector('.lap').style.opacity = 0;
        this.angular.querySelector('.phone').style.transform = "translateX(-50px)";
        this.angular.querySelector('.phone').style.opacity = 0;
        this.angular.querySelector('.tab').style.transform = "translateX(50px)";
        this.angular.querySelector('.tab').style.opacity = 0;

        this.angular.querySelector('.project-content').setAttribute("style", "opacity: 0;transform: translateY(-50px);");
      }
      if (aVal && aFlagOut) {
        console.log("r in");
        aFlagOut = false;
        this.react.querySelector('.lap').setAttribute("style", "transform: scale(1); opacity: 1;");
        this.react.querySelector('.phone').setAttribute("style", "transform: translateX(0px); opacity: 1;");
        this.react.querySelector('.tab').setAttribute("style", "transform: translateX(0px); opacity: 1;");

        this.react.querySelector('.project-content').setAttribute("style", "opacity: 1;transform: translateY(0px);");
      }
      else if (!aVal && !aFlagOut) {
        console.log("r out");
        aFlagOut = true;
        this.react.querySelector('.lap').setAttribute("style", "transform: scale(.9); opacity: 0;");
        this.react.querySelector('.phone').setAttribute("style", "transform: translateX(-50px); opacity: 0;");
        this.react.querySelector('.tab').setAttribute("style", "transform: translateX(50px); opacity: 0;");

        this.react.querySelector('.project-content').setAttribute("style", "opacity: 0;transform: translateY(-50px);");
      }
      if (cVal && cFlagOut) {
        console.log("j in");
        cFlagOut = false;
        this.java.querySelector('.lap').setAttribute("style", "transform: scale(1); opacity: 1;");
        this.java.querySelector('.phone').setAttribute("style", "transform: translateX(0px); opacity: 1;");
        this.java.querySelector('.tab').setAttribute("style", "transform: translateX(0px); opacity: 1;");

        this.java.querySelector('.project-content').setAttribute("style", "opacity: 1;transform: translateY(0px);");
      }
      else if (!cVal && !cFlagOut) {
        console.log("j out");
        cFlagOut = true;
        this.java.querySelector('.lap').setAttribute("style", "transform: scale(.9); opacity: 0;");
        this.java.querySelector('.phone').setAttribute("style", "transform: translateX(-50px); opacity: 0;");
        this.java.querySelector('.tab').setAttribute("style", "transform: translateX(50px); opacity: 0;");

        this.java.querySelector('.project-content').setAttribute("style", "opacity: 0;transform: translateY(-50px);");
      }

    },50));
  }

  slideLeftDisappear() {

    // debugger;
    let flag = 0;
    this.router.events.subscribe(x => {
      if (x instanceof NavigationStart && flag == 0) {
        flag = 1;
        let route = x.url.slice(1);
        let body: any = document.querySelector('body');
        console.log(route);
        if (route == "intro") {
          body.style.background = "hsl(215deg 65% 79%)";//"linear-gradient(180deg, #7bb0c8 0%, #ace5ff 70%, #7bb0c8 99%)";
        } else if (route == "skill") {
          body.style.background = "hsl(120deg 76% 84%)";//"linear-gradient(180deg, #67cca0 0%, #bcffdc 65%, #67cca0 100%)";
        } else if (route == "work") {
          body.style.background = "hsl(6deg 88% 75%)";//"linear-gradient(180deg, #fd8f8f 0%, #ffb99a 70%, #fd8f8f 99%)";
        }

        if(route!="exp"){
          this.router.navigate(['exp']);
          let containermain: any = document.querySelector('.exp-container');
          let nav: any = document.querySelector('.navbar');
          this.expContent.style.animation = "final-disappear .5s ease-in forwards";
          setTimeout(() => {
            this.expImg.style.animation = "final-disappear .5s ease-in forwards";
            nav.style.zIndex = 1;
          }, 300);
          setTimeout(() => {
            let workContainer: any = document.querySelector(".exp-container");
            workContainer.setAttribute("style","height:calc(100vh + 60px) !important");
            // debugger;
            containermain.classList.add('slide-left');
          }, 1500);
          setTimeout(() => {
            this.router.navigate([route]);
            nav.style.zIndex = 2;
          }, 2500);
        }


      }
    });
  }

  ngAfterContentInit() {
    this.slideLeftDisappear();
    this.fadeInOut();
  }

}
