import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { SeoService } from './services/seo.service';
import { ContactService } from './services/contact.service';
import { ProductService } from './services/products.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyFooterComponent } from './components/company-footer/company-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CompanyFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    SeoService,
    ContactService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }