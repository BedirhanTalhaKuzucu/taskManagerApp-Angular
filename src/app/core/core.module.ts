import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HighlightDirective],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, HighlightDirective],
})
export class CoreModule {}
