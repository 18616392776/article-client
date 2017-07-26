import { Component } from '@angular/core';

@Component({
    selector: 'tb-banner-settings',
    templateUrl: './banner-settings.component.html',
    styleUrls: ['./banner-settings.component.scss']
})
export class BannerSettingsComponent {
    settings: Array<any> = [{}, {}, {}];

    show(event: any) {
        console.log(event);
    }
}