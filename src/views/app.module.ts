import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { UiComponentsModule, UiFormsModule } from 'tanbo-ui';

import { ComponentsModule } from '../modules/components-module/components.module';

import { AppComponent } from './app';

import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        UiComponentsModule,
        ComponentsModule,
        UiFormsModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
