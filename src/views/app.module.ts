import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { UiComponentsModule, UiFormsModule, UiHttp } from 'tanbo-ui';

import { ComponentsModule } from '../modules/components-module/components.module';

import { AppComponent } from './app';

import { routing } from './app.routing';

UiHttp.config({
    apiPrefix: '/api'
});

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
    bootstrap: [AppComponent],
    providers: [
        UiHttp
    ]
})
export class AppModule {
}
