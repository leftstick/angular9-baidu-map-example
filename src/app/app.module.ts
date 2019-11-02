import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { BaiduMapModule } from 'angular2-baidu-map'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
