import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { ImageCropper } from './components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ShowAuthedDirective } from './directives';
import { EmailPasswordComponent } from './components';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ShowAuthedDirective,
    EmailPasswordComponent,
    ImageCropperComponent,
    ImageCropper
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EmailPasswordComponent,
    ImageCropperComponent,
    ImageCropper,
    ReactiveFormsModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
