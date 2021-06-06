import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExpComponent } from './components/exp/exp.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorkComponent } from './components/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ExpComponent,
    SkillComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
