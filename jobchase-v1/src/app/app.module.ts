import { NgModule, Inject } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MaterialComponentsModule } from './material-components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Reducers } from './redux/reducers';
import { RouterEffects } from './redux/effects/router-effects';

import { AppConfig } from './config/app.config';

import { NgCoreCoreModule } from '@ngcore/core';
import { NgCoreBaseModule } from '@ngcore/base';
import { NgCoreAuthModule } from '@ngcore/auth';
import { NgCoreMarkModule } from '@ngcore/mark';
import { NgCoreViewModule } from '@ngcore/view';
import { JobModelModule } from '@jobchase/jobmodel';

import { GlobalThemeHelper } from './helpers/global-theme-helper';

import { JobchaseViewDataService } from './services/jobchase-view-data.service';

import { PreferredJobListComponent } from './elements/preferred-job-list/preferred-job-list.component';
import { RecentJobListComponent } from './elements/recent-job-list/recent-job-list.component';
import { ActiveJobNamesComponent } from './elements/active-job-names/active-job-names.component';
import { JobDetailPostingComponent } from './elements/job-detail-posting/job-detail-posting.component';
import { JobDetailApplicationComponent } from './elements/job-detail-application/job-detail-application.component';
import { JobDetailFollowupComponent } from './elements/job-detail-followup/job-detail-followup.component';
import { JobDetailMemoComponent } from './elements/job-detail-memo/job-detail-memo.component';
import { JobDetailSummaryComponent } from './elements/job-detail-summary/job-detail-summary.component';
import { JobDetailRecordComponent } from './elements/job-detail-record/job-detail-record.component';
import { RecordSearchQueryComponent } from './elements/record-search-query/record-search-query.component';
import { RecordSearchResultComponent } from './elements/record-search-result/record-search-result.component';
import { MiniJobRecordComponent } from './elements/mini-job-record/mini-job-record.component';
import { JobPostingEditorComponent } from './elements/job-posting-editor/job-posting-editor.component';
import { FavoriteJobRecordComponent } from './elements/favorite-job-record/favorite-job-record.component';
import { AuthUserLoginComponent } from './elements/auth-user-login/auth-user-login.component';
import { AuthUserLogoutComponent } from './elements/auth-user-logout/auth-user-logout.component';
import { UserPrefsGeneralComponent } from './elements/user-prefs-general/user-prefs-general.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';

import { AppComponent } from './main/app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { WorkspacePageComponent } from './pages/workspace-page/workspace-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

import { AppRoutingModule } from './app-routing.module';
import { PostingEditorDialogComponent } from './modals/posting-editor-dialog/posting-editor-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    WorkspacePageComponent,
    SearchPageComponent,
    BrowsePageComponent,
    DetailPageComponent,
    PreferredJobListComponent,
    RecentJobListComponent,
    ActiveJobNamesComponent,
    JobDetailPostingComponent,
    JobDetailApplicationComponent,
    JobDetailFollowupComponent,
    JobDetailMemoComponent,
    JobDetailSummaryComponent,
    JobDetailRecordComponent,
    RecordSearchQueryComponent,
    RecordSearchResultComponent,
    MiniJobRecordComponent,
    NotFoundComponent,
    JobPostingEditorComponent,
    FavoritesPageComponent,
    FavoriteJobRecordComponent,
    AuthUserLoginComponent,
    AuthUserLogoutComponent,
    UserPrefsGeneralComponent,
    PostingEditorDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MaterialComponentsModule,
    StoreModule.forRoot(
      Reducers
    ),
    EffectsModule.forRoot([
      RouterEffects
    ]),
    AppRoutingModule,
    StoreRouterConnectingModule,
    NgCoreCoreModule,
    NgCoreBaseModule,
    NgCoreAuthModule,
    NgCoreMarkModule,
    NgCoreViewModule,
    JobModelModule
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true },
    JobchaseViewDataService
  ],
  entryComponents: [
    PostingEditorDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  // Moved to GlobalThemHelper.

  // // Heck. We are dynamically changing the theme at app startup time.
  // // Or, read it from the user prefs.
  // private static THEMES: string[] = [
  //   "deeppurple-amber.css",
  //   "indigo-pink.css",
  //   "pink-bluegrey.css",
  //   "purple-green.css"
  // ];
  // // Cache.
  // private static _theme: (string | null) = null;
  // private static getTheme(): string {
  //   if(AppModule._theme == null) {
  //     // Pick a random theme of the day.
  //     let idx = Math.floor(Math.random() * AppModule.THEMES.length);
  //     AppModule._theme = AppModule.THEMES[idx];
  //   }
  //   return AppModule._theme;
  // }

  // TBD: How to speed up the first theme loading ???
  // (Currently, we are geting the following warning:
  //   "Could not find Angular Material core theme. Most Material components may not work as expected.")
  // Heck. -> Does this help at all???
  private static theme = GlobalThemeHelper.getInstance().getTheme();

  constructor( @Inject(DOCUMENT) private document) {
    // let theme = GlobalThemeHelper.getInstance().getTheme();
    let theme = AppModule.theme;
    this.document.getElementById('material-theme').setAttribute('href', theme);
  }
}
