import { Component, OnInit, Inject } from '@angular/core';
import { isDevMode } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/filter';
// import { filter } from 'rxjs/operators';

import { MatDialog } from '@angular/material';

import { AppConfig } from '../config/app.config';
import { AppState } from '../redux/core/app-state';
import * as RouterActions from '../redux/actions/router';

import { GlobalThemeHelper } from '../helpers/global-theme-helper';

import { JobchaseViewDataService } from '../services/jobchase-view-data.service';

import { PostingEditorDialogComponent } from '../modals/posting-editor-dialog/posting-editor-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  //   if(AppComponent._theme == null) {
  //     // Pick a random theme of the day.
  //     // TBD: Read this from the user settings.
  //     let idx = Math.floor(Math.random() * AppComponent.THEMES.length);
  //     AppComponent._theme = AppComponent.THEMES[idx];
  //   }
  //   return AppComponent._theme;
  // }

  // temporary
  headerMenuTooltipPosition = 'below';
  fabMenuTooltipPosition = 'below';
  footerMenuTooltipPosition = 'above';

  title: string;
  routerPath: string;
  copyright: string;

  get pageTitle(): string {
    let pgTtl = this.title;

    // // Exclude "/"
    // // tbd: if "/", then use Dashboard ???
    // if (this.routerPath != null && this.routerPath.length > 1) {
    //   pgTtl += ` - ${this.routerPath}`;
    // }

    let pgNm = this.routerPath;
    // if (this.routerPath == null || this.routerPath.length <= 1) {
    if (this.routerPath == '' || this.routerPath == '/') {
      pgNm = 'Dashboard';   // hard-coded. TBD: Need to fix this...
    }
    pgTtl += ` - ${pgNm}`;

    return pgTtl;
  }

  constructor(
    @Inject(DOCUMENT) private document,
    private appConfig: AppConfig,
    private location: Location,
    private router: Router,
    private store: Store<AppState>,
    private dialog: MatDialog,
    private viewDataService: JobchaseViewDataService
  ) {

    // testing
    if (isDevMode()) {
      console.log("In dev mode.");
    } else {
      console.log("In prod mode.");
    }

  }

  ngOnInit(): void {
    // // Set the material theme.
    // let theme = GlobalThemeHelper.getInstance().getTheme();
    // this.document.getElementById('material-theme').setAttribute('href', theme);


    // testing
    let val1 = this.appConfig.get("key1");
    console.log("val1 = " + val1);
    // testing



    this.title = this.viewDataService.appTitle;
    // this.copyright = `Copyright &copy; 2017 ${this.title}`;   // tbd.
    this.copyright = `Copyright &copy; 2017 @realharry`;   // tbd.

    // ???
    // this.store.select('router').subscribe(value => {
    //   // temporary
    //   if(value) {
    //     this.routerPath = value.state.toString();
    //   } else {
    //     this.routerPath = '';
    //   }
    // });

    // ???
    // // this.routerPath = this.router.url;
    // this.routerPath = this.location.path();
    // ???

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let url = (event as NavigationEnd).url;
        if (url.length > 1) {
          if (url.startsWith('/')) {
            url = url.substring(1);
          }
        }
        if (url.length > 0) {
          url = url.charAt(0).toUpperCase() + url.substring(1);
        }
        this.routerPath = url;
      });

  }


  routeHandler(routePath: string) {
    // [1] Without ngrx/router-store
    // this.router.navigate([routePath]);

    // [2] With ngrx/router-store
    this.store.dispatch(new RouterActions.Go({
      path: [routePath]
      // path: [routePath, { routeParam: 1 }],
      // query: { page: 1 },
      // extras: { replaceUrl: false }
    }));
  }

  // tbd
  private goBack() {
    this.store.dispatch(new RouterActions.Back());
  }
  private goForward() {
    this.store.dispatch(new RouterActions.Forward());
  }
  // ....



  handleClickAddJob() {
    console.log("'Add' button clicked.");

    // tbd

    let dialogRef = this.dialog.open(PostingEditorDialogComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }



  // temporary
  get isUserLoggedIn(): boolean {
    // tbd
    return false;
  }


  // tbd:
  // Add button handlers


  // handleContextHelp() {
  //   console.log("'Help' button clicked.");    
  // }


  get hasSavedTheme(): boolean {
    return GlobalThemeHelper.getInstance().hasDefaultTheme();
  }

  handleSaveCurrentTheme() {
    console.log("'Save Current' button clicked.");
    GlobalThemeHelper.getInstance().saveDefaultTheme();
  }

  // Use random theme (from now on, not just once)
  handleUseRandomTheme() {
    console.log("'Use Random' button clicked.");
    this._useRandomTheme();
  }
  private _useRandomTheme() {
    GlobalThemeHelper.getInstance().removeDefaultTheme();
    let theme = GlobalThemeHelper.getInstance().getDifferentTheme();
    this.document.getElementById('material-theme').setAttribute('href', theme);
  }

  handleTryDifferentThemes() {
    console.log("'Try Different' button clicked.");
    this._tryDifferentTheme();
  }
  private _tryDifferentTheme() {
    let theme = GlobalThemeHelper.getInstance().getDifferentTheme();
    this.document.getElementById('material-theme').setAttribute('href', theme);
  }


  handleUserLogin() {
    console.log("'User Login' button clicked.");

  }

  handleUserLogout() {
    console.log("'User Logout' button clicked.");

  }

  // handleShareJob() {
  //   console.log("'Share' button clicked.");    
  // }

  handleUserProfile() {
    console.log("'Profile' button clicked.");

  }

  handleUserSettings() {
    console.log("'User Settings' button clicked.");

  }

}
