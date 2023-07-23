import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TestInterceptor } from './test.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
  provide:HTTP_INTERCEPTORS,
  useClass:TestInterceptor,
  multi:true   
}  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
