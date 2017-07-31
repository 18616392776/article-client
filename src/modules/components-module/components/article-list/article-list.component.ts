import { Component, OnInit } from '@angular/core';
import { ArticleListService } from './article-list.service';

@Component({
    selector: 'tb-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
    providers: [
        ArticleListService
    ]
})

export class ArticleListComponent implements OnInit {
    articleList: Array<any> = [];
    constructor(private articleListService: ArticleListService) {
    }

    ngOnInit() {
        this.articleListService.getArticls().then(response => {
            if (response.success) {
                this.articleList = response.data;
            }
        })
    }
}