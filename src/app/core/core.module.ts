import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule],
  exports: [HeaderComponent, CommonModule, BrowserModule],
})
export class CoreModule {}
