/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// JHIPSTER SPECIFIC MODULES
import { Ng2Webstorage } from 'ngx-webstorage';

import { SharedModule, UserRouteAccessService } from './shared';
import { JhAppRoutingModule} from './jh-app-routing.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { AccountModule } from './account/account.module';
import { EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// Application Layouts
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
  declarations: [
    // AppComponent,
    // JH Layout
    JhiMainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    // AppRoutingModule,

    // NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    // JHipster
    JhAppRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
    SharedModule,
    HomeModule,
    AdminModule,
    AccountModule,
    EntityModule,
  ],
  bootstrap: [JhiMainComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ProfileService,
    customHttpProvider(),
    PaginationConfig,
    UserRouteAccessService
  ],
})
export class AppModule {
}
