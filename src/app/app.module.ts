import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExpComponent } from './components/exp/exp.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorkComponent } from './components/work/work.component';
import { ScriptprogramComponent } from './components/skill/skillsets/scriptprogram/scriptprogram.component';
import { DefaultComponent } from './components/skill/skillsets/default/default.component';
import { UxuiComponent } from './components/skill/skillsets/uxui/uxui.component';
import { FrameworklibraryComponent } from './components/skill/skillsets/frameworklibrary/frameworklibrary.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ExpComponent,
    SkillComponent,
    WorkComponent,
    ScriptprogramComponent,
    DefaultComponent,
    UxuiComponent,
    FrameworklibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
