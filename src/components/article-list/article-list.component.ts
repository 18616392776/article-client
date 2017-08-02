import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output()
    selected = new EventEmitter<string>();

    currentPage: number = 1;
    pages: number = 1;
    articleList: Array<any> = [];

    constructor(private articleListService: ArticleListService) {
    }

    ngOnInit() {
        this.getArticles();
    }

    getArticles() {
        this.articleListService.getArticles(this.currentPage, 18).then(response => {
            if (response.success) {
                this.currentPage = response.data.currentPage;
                this.pages = response.data.pages;
                this.articleList = response.data.dataList;
            }
        });
    }

    change(page: number) {
        this.currentPage = page;
        this.getArticles();
    }

    onSelected(id: string) {
        this.selected.emit(id);
    }
}