import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './views/app.module';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import './assets/scss/index.scss';
import 'highlight.js/styles/github.css';

if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
