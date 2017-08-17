import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container.component';
import { PhoneDetailComponentComponent } from './phone-detail-component/phone-detail-component.component';
import {PhoneService} from './services/phone.service';
import {HttpModule} from '@angular/http';
import { ImagePipe } from './pipes/image.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailComponentComponent,
    ImagePipe,
    NavbarComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
