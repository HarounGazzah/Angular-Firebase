// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCy3U8UKrK7duBZO8Yp-1xIcjgHTXR3ISE',
    authDomain: 'angular6firebasecrud-3cb2b.firebaseapp.com',
    databaseURL: 'https://angular6firebasecrud-3cb2b.firebaseio.com',
    projectId: 'angular6firebasecrud-3cb2b',
    storageBucket: 'angular6firebasecrud-3cb2b.appspot.com',
    messagingSenderId: '122067008637'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
