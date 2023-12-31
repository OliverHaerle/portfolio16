import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { JoinComponent } from './join/join.component';
import { HelloComponent } from './hello/hello.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PolloLocoComponent } from './pollo-loco/pollo-loco.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    JoinComponent,
    HelloComponent,
    MyWorkComponent,
    NavbarComponent,
    PokedexComponent,
    PolloLocoComponent,
    SkillsetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
