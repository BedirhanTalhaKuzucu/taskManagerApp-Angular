import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './directives/highlight.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HighlightDirective],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent, HighlightDirective],
})
export class CoreModule {}