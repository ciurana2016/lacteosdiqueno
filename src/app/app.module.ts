import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { VideoComponent } from './components/video/video.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ColaboraComponent } from './pages/colabora/colabora.component';
import { LosnodeloslacteosComponent } from './pages/losnodeloslacteos/losnodeloslacteos.component';

import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VideoComponent,
    FooterComponent,
    VideosComponent,
    SafePipe,
    ColaboraComponent,
    LosnodeloslacteosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
