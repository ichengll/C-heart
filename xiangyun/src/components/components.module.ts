import { NgModule } from '@angular/core';
import { ActionsheetComponent } from './actionsheet/actionsheet';

//引入BrowserModule，解决ngFor报错的问题
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [ActionsheetComponent],
	imports: [BrowserModule],   //依赖注入
	exports: [ActionsheetComponent]
})
export class ComponentsModule {}
