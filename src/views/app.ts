import { Component } from '@angular/core';

import * as marked from 'marked';
import * as hljs from 'highlight.js';

const md = marked.setOptions({
    highlight: function (str: string, lang: string): string {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (e) {
                console.log(e);
            }
        }

        return '';
    }
});

@Component({
    selector: 'tb-app',
    templateUrl: 'app.html',
    styleUrls: ['./app.scss']
})
export class AppComponent {
    imageLibrariesIsOpen: boolean = false;
    articleListIsOpen: boolean = false;
    isEdit: boolean = true;
    isShowToolbar: boolean = true;

    docs: Array<any> = [{
        type: 'empty'
    }];

    currentComponent: any = this.docs[0];

    static docItemFactory(type: string) {
        switch (type) {
            case 'markdown':
                return {
                    type: 'markdown',
                    value: '',
                    rawValue: ''
                };
            case 'slide':
                return {
                    type: 'slide',
                    banners: [{
                        src: require('../assets/images/2.jpg'),
                        target: ''
                    }, {
                        src: require('../assets/images/3.jpg'),
                        target: ''
                    }, {
                        src: require('../assets/images/4.jpeg'),
                        target: ''
                    }]
                };
            case 'empty':
                return {
                    type: 'empty'
                };
            default:
                return {};
        }
    }
    setCurrentComponent(item: any) {
        if (this.currentComponent) {
            this.isShowToolbar = false;
            this.currentComponent = item;
            setTimeout(() => {
                this.isShowToolbar = true;
            });
        }
    }

    updateHTML(value: any) {
        this.currentComponent.rawValue = value;
        this.currentComponent.value = md(value);
    }

    editDocs(event: any = {}) {
        if (event.index < 0 || event.index > this.docs.length) {
            return;
        }
        switch (event.type) {
            case 'remove':
                this.docs.splice(event.index, 1);
                break;
            case 'up':
                this.docs.splice(event.index - 1, 0, this.docs.splice(event.index, 1)[0]);
                break;
            case 'down':
                this.docs.splice(event.index + 1, 0, this.docs.splice(event.index, 1)[0]);
                break;
            case 'plus':
                this.docs.splice(event.index + 1, 0, AppComponent.docItemFactory('empty'));
                break;
            case 'changeType':
                this.docs.splice(event.index, 1, AppComponent.docItemFactory(event.targetType));
                break;
        }
    }
}
