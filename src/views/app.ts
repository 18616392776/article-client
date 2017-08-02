import { Component } from '@angular/core';
import { MarkdownType, SlideType, EmptyType } from '../utils/help-types';
import { NotifyController, NotifyType } from 'tanbo-ui';

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
    styleUrls: ['./app.scss'],
    providers: [
        AppService
    ]
})
export class AppComponent {
    imageLibrariesIsOpen: boolean = false;
    articleListIsOpen: boolean = false;
    isEdit: boolean = true;

    article: any = {
        title: '',
        content: [{
            type: 'empty'
        }]
    };

    currentComponent: any = this.article.content[0];

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

    constructor(private notifyController: NotifyController,
                private appService: AppService) {
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
        if (event.index < 0 || event.index > this.article.content.length) {
            return;
        }
        switch (event.type) {
            case 'remove':
                this.article.content.splice(event.index, 1);
                break;
            case 'up':
                this.article.content.splice(event.index - 1,
                    0,
                    this.article.content.splice(event.index, 1)[0]);
                break;
            case 'down':
                this.article.content.splice(event.index + 1,
                    0,
                    this.article.content.splice(event.index, 1)[0]);
                break;
            case 'add':
                this.article.content.splice(event.index + 1,
                    0,
                    AppComponent.docItemFactory('empty'));
                break;
            case 'changeType':
                this.article.content.splice(event.index,
                    1,
                    AppComponent.docItemFactory(event.targetType));
                break;
        }
    }

    addArticle() {
        if (this.article.hasOwnProperty('id')) {
            let article = JSON.parse(JSON.stringify(this.article));
            article.content = JSON.stringify(article.content);
            this.appService.updateArticle(article).then(response => {
                if (response.success) {
                    this.notifyController.push({
                        content: '更新成功！',
                        type: NotifyType.Success
                    });
                } else {
                    this.notifyController.push({
                        content: response.message,
                        type: NotifyType.Danger
                    });
                }
            });
        } else {
            this.appService.addArticle({
                title: this.article.title,
                content: JSON.stringify(this.article.content)
            }).then(response => {
                if (!response.success) {
                    this.notifyController.push({
                        content: response.message,
                        type: NotifyType.Warning
                    });
                }
            });
        }

    }

    changeArticle(id: string) {
        this.appService.getArticle(id).then(response => {
            if (response.success) {
                response.data.content = JSON.parse(response.data.content);
                this.article = response.data;
            }
        });
    }
}
