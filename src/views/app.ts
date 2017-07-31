import { Component } from '@angular/core';
import { MarkdownType, SlideType, EmptyType } from '../modules/components-module/utils/help-types';

import * as marked from 'marked';
import * as hljs from 'highlight.js';

import { AppService } from './app.service';

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

    docs: Array<any> = [{
        type: 'empty'
    }];

    currentComponent: any = this.docs[0];

    article: any = {
        title: ''
    };

    static docItemFactory(type: string) {
        const markdownConfig: MarkdownType = {
            type: 'markdown',
            value: '',
            rawValue: ''
        };
        const slideConfig: SlideType = {
            type: 'slide',
            config: {
                width: 600,
                height: 300,
                slideItems: [{
                    src: '',
                    target: '',
                    link: ''
                }, {
                    src: '',
                    target: '',
                    link: ''
                }, {
                    src: '',
                    target: '',
                    link: ''
                }]
            }
        };

        const emptyConfig: EmptyType = {
            type: 'empty'
        };
        switch (type) {
            case 'markdown':
                return markdownConfig;
            case 'slide':
                return slideConfig;
            default:
                return emptyConfig;
        }
    }

    constructor(private appService: AppService) {
    }

    setCurrentComponent(item: any) {
        if (this.currentComponent) {
            this.currentComponent = item;
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
            case 'add':
                this.docs.splice(event.index + 1, 0, AppComponent.docItemFactory('empty'));
                break;
            case 'changeType':
                this.docs.splice(event.index, 1, AppComponent.docItemFactory(event.targetType));
                break;
        }
    }

    addArticle() {
        this.appService.addArticle({
            title: this.article.title,
            sourceContent: JSON.stringify(this.docs)
        })
    }
}
