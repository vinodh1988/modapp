import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseBoxComponent } from './course-box/course-box.component';
import { CourseService } from './services/course.service';
import { HeaderComponent } from './header/header.component';
import { HeadLogoComponent } from './head-logo/head-logo.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { EnquiryComponent } from './footer/enquiry/enquiry.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ModcontentComponent } from './modcontent/modcontent.component';
import { ModuleService } from 'app/module.service';
import { CourselistService} from 'app/services/courselist.service'
import { CoursesComponent} from './routes/courses/courses.component';
import { ItemComponent } from './routes/courses/item/item.component'
import { MainEnquiryComponent} from './enquiry/enquiry/enquiry.component';
import { ContentComponent } from './content/content.component';
import { CoursesliderComponent } from './courseslider/courseslider.component';
import { SlideunitComponent } from './slideunit/slideunit.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { HomeComponent } from './routes/home/home.component';
import { CorporateComponent } from './routes/corporate/corporate.component';
import { PlacementsComponent } from './routes/placements/placements.component';
import { CareersComponent } from './routes/careers/careers.component';

const routes=[
  {path:"",component: HomeComponent },
  {path:"Courses",component: CoursesComponent },
  {path:"Career",component: CareersComponent},
  {path:"Placements",component: CoursesComponent},
  {path:"Corporate",component: CoursesComponent},
  {path:"Certification", component: CoursesComponent },
  {path:"Contact", component: CoursesComponent },
  {path:"Module", component: ModcontentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseBoxComponent,
    HeaderComponent,
    HeadLogoComponent,
    FooterComponent,
    ContactsComponent,
    EnquiryComponent,
    ChatboxComponent,
    ModcontentComponent,
    CoursesComponent,
    ItemComponent,
    MainEnquiryComponent,
    ContentComponent,
    CoursesliderComponent,
    SlideunitComponent,
    InfoboxComponent,
    HomeComponent,
    CorporateComponent,
    PlacementsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService,ModuleService, CourselistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
