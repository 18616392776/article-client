import { Component, Input } from '@angular/core';
import { SlideConfig, SlideItem } from '../../utils/help-types';

@Component({
    selector: 'tb-slide-settings',
    templateUrl: './slide-settings.component.html',
    styleUrls: ['./slide-settings.component.scss']
})
export class SlideSettingsComponent {
    @Input()
    config: SlideConfig;

    edit(type: string, index: number) {
        let items = this.config.slideItems;
        switch (type) {
            case 'remove':
                items.splice(index, 1);
                break;
            case 'up':
                items.splice(index - 1, 0, items.splice(index, 1)[0]);
                break;
            case 'down':
                items.splice(index + 1, 0, items.splice(index, 1)[0]);
                break;
            case 'add':
                let item: SlideItem = {
                    src: '',
                    target: '',
                    link: ''
                };
                items.splice(index, 0, item);
                break;
        }
    }
}