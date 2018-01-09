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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// JHIPSTER SPECIFIC MODULES
import { Ng2Webstorage } from 'ngx-webstorage';

import { SdpSharedModule, UserRouteAccessService } from './shared';
import { SdpAppRoutingModule} from './jh-app-routing.module';
import { SdpHomeModule } from './home/home.module';
import { SdpAdminModule } from './admin/admin.module';
import { SdpAccountModule } from './account/account.module';
import { SdpEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
  declarations: [
    AppComponent,
    // JH Layout
    JhiMainComponent,
    NavbarComponent,
    SidebarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    // JHipster
    SdpAppRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
    SdpSharedModule,
    SdpHomeModule,
    SdpAdminModule,
    SdpAccountModule,
    SdpEntityModule,
  ],
  bootstrap: [AppComponent, JhiMainComponent],
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
