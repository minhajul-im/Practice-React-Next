// 4.Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).
const openWindowFunc = (url, width, height) => {
  const windowSize = `width= ${width}, height= ${height}`;

  window.open(url, "_blank", windowSize);
};

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
const newWindow = () => {
  const url = "http://minhajul.com";

  let width = 800,
    height = 600;

  openWindowFunc(url, width, height);
};

// 5.Navigator Object:

// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.
const navigatorBrowser = () => {
  const appName = navigator.appName;

  const appVersion = navigator.appVersion;

  const appCode = navigator.appCodeName;

  const cookieEnabled = navigator.cookieEnabled;

  const language = navigator.language;

  const userArgent = navigator.userAgent;

  const onLine = navigator.onLine;

  const platFrom = navigator.platform;

  const languages = navigator.languages;

  document.write(
    `App Name: => ${appName} <br> App Version: => ${appVersion} <br> App Code: => ${appCode} <br> Cooke Enabled: => ${cookieEnabled} <br> Language: => ${language} <br> User Argent: => ${userArgent} <br> Online: => ${onLine} <br> Plat From: => ${platFrom} <br> Languages: => ${languages} <br>`
  );
};

// b. Implement the function to display the user's browser name and version.
// const navigatorFuncDisplay = navigatorBrowser();

// 6.Geolocation:

// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
const geolocationFunc = () => {
  navigator.geolocation.getCurrentPosition((place) => {
    const latitude = place.coords.latitude;

    const longitude = place.coords.longitude;

    const accuracy = place.coords.accuracy;

    document.write(
      `Latitude: => ${latitude} <br> Longitude: => ${longitude} <br> Accuracy: => ${accuracy} <br>`
    );
  });
};
