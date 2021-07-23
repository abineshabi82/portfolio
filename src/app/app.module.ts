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
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    FrameworklibraryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
