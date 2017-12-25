export class GlobalThemeHelper {
  // Singleton.
  private static _Instance: (GlobalThemeHelper | null) = null;
  private constructor() { }
  public static getInstance(): GlobalThemeHelper {
    return this._Instance || (this._Instance = new GlobalThemeHelper());
  }

  // temporary
  private static KEY_MATERIAL_THEME = "material-theme";


  // Heck. We are dynamically changing the theme at app startup time.
  // Or, read it from the user prefs.
  private THEMES: string[] = [
    "deeppurple-amber.css",
    "indigo-pink.css",
    "pink-bluegrey.css",
    "purple-green.css"
  ];
  // Cache.
  private _theme: (string | null) = null;

  public getTheme(): string {
    if (!this._theme) {
      // Pick a random theme of the day.
      // TBD: Intialially, read it from user settings.
      let storedTheme = localStorage.getItem(GlobalThemeHelper.KEY_MATERIAL_THEME);
      if (storedTheme) {  // tbd: validate?
        this._theme = storedTheme;
      } else {
        let idx = Math.floor(Math.random() * this.THEMES.length);
        this._theme = this.THEMES[idx];
      }
    }
    return this._theme;
  }
  public getDifferentTheme(): string {
    let currentTheme = this._theme;
    while (currentTheme === this._theme) {
      let idx = Math.floor(Math.random() * this.THEMES.length);
      this._theme = this.THEMES[idx];
    }
    return this._theme;
  }

  public hasDefaultTheme(): boolean {
    let storedTheme = this.getDefaultTheme();
    return (!!storedTheme);
  }
  public getDefaultTheme(): (string | null) {
    let storedTheme = localStorage.getItem(GlobalThemeHelper.KEY_MATERIAL_THEME);
    return storedTheme;
  }
  // Save the current theme as the "default" theme.
  public saveDefaultTheme() {
    if (this._theme) {
      localStorage.setItem(GlobalThemeHelper.KEY_MATERIAL_THEME, this._theme);
    } else {
      // ignore.
      // (or, remove the stored theme??)
    }
  }

  public removeDefaultTheme() {
    localStorage.removeItem(GlobalThemeHelper.KEY_MATERIAL_THEME);
  }

}
