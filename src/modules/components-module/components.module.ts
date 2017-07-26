import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiFormsModule, UiComponentsModule, UiDirectivesModule } from 'tanbo-ui';

import { ToolkitWrapperComponent } from './components/toolkit-wrapper/toolkit-wrapper.component';
import { ToolbarComponent } from './components/toolkit-wrapper/toolbar/toolbar.component';
import { ToolContentComponent } from './components/toolkit-wrapper/tool-content/tool-content.component';

import { ExampleComponent } from './components/example/example.component';
import { BannerSettingsComponent } from './components/banner-settings/banner-settings.component';
import { ImageLibrariesComponent } from './components/image-libraries/image-libraries.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { ComponentNavItemComponent } from './components/component-nav-item/component-nav-item.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';
import { DragCoordinatesService } from './services/drag-coordinates.service';

@NgModule({
    imports: [
        UiFormsModule,
        FormsModule,
        CommonModule,
        UiDirectivesModule,
        UiComponentsModule
    ],
    declarations: [
        ToolkitWrapperComponent,
        ToolbarComponent,
        ToolContentComponent,

        ExampleComponent,
        BannerSettingsComponent,
        ImageLibrariesComponent,
        ImagePreviewComponent,
        ComponentNavItemComponent,
        ComponentContainerComponent
    ],
    exports: [
        ExampleComponent,
        BannerSettingsComponent,
        ImageLibrariesComponent,
        ComponentNavItemComponent,
        ComponentContainerComponent
    ],
    providers: [
        DragCoordinatesService
    ]
})
export class ComponentsModule {
}