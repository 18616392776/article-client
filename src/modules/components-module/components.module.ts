import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiFormsModule, UiComponentsModule, UiDirectivesModule, UiHttp } from 'tanbo-ui';

import { ToolkitWrapperComponent } from './components/toolkit-wrapper/toolkit-wrapper.component';
import { ToolbarComponent } from './components/toolkit-wrapper/toolbar/toolbar.component';
import { ToolContentComponent } from './components/toolkit-wrapper/tool-content/tool-content.component';

import { ExampleComponent } from './components/example/example.component';
import { SlideSettingsComponent } from './components/slide-settings/slide-settings.component';
import { ImageLibrariesComponent } from './components/image-libraries/image-libraries.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { ComponentNavItemComponent } from './components/component-nav-item/component-nav-item.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

import { DragCoordinatesService } from './services/drag-coordinates.service';

@NgModule({
    imports: [
        UiFormsModule,
        FormsModule,
        CommonModule,
        UiDirectivesModule,
        UiComponentsModule,
        HttpModule
    ],
    declarations: [
        ToolkitWrapperComponent,
        ToolbarComponent,
        ToolContentComponent,

        ExampleComponent,
        SlideSettingsComponent,
        ImageLibrariesComponent,
        ImagePreviewComponent,
        ComponentNavItemComponent,
        ComponentContainerComponent,
        ArticleListComponent
    ],
    exports: [
        ExampleComponent,
        SlideSettingsComponent,
        ImageLibrariesComponent,
        ComponentNavItemComponent,
        ComponentContainerComponent,
        ArticleListComponent
    ],
    providers: [
        DragCoordinatesService,
        UiHttp
    ]
})
export class ComponentsModule {
}