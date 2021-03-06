var appIds = [];
var appsSettings = [];
var appsHtml = '';

kintone.api(kintone.api.url('/k/v1/apps', true), 'GET', {}, function(resp) {
  // success
  var apps = resp.apps
  for (var i = 0; i < apps.length; i++) {
    appIds[i] = apps[i].appId;
  }

  appIds.forEach( ( value, index ) => {

    kintone.api(kintone.api.url('/k/v1/app/settings', true), 'GET', {
      'app': value,
      'lang': 'ja'
    }, function(response) {
      // success
      appsSettings[index] = response;
      createAppsHtml(response, value);
    }, function(error) {
      // error
      console.log(error);
    });
  });
  console.log(appsSettings);
  // console.log(createAppsHtml(appsSettings));

  appsSettings.forEach( (value, index) => {
    appsHtml += '<li class="classic-list_item">'
    appsHtml += '<span class="classic-list_icon classic-colour--green">'
    appsHtml += '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">'
    appsHtml += '<path '
    appsHtml += 'd="M22 20H4V8H22V20ZM22 5H4C3.45 5 3 5.45 3 6V20C3 20.55 3.45 21 4 21H22C22.55 21 23 20.55 23 20V6C23 5.45 22.55 5 22 5ZM8.5 10.667C7.672 10.667 7 11.339 7 12.167C7 12.995 7.672 13.667 8.5 13.667C9.328 13.667 10 12.995 10 12.167C10 11.339 9.328 10.667 8.5 10.667ZM12 16.5C12 15.395 11.105 14.5 10 14.5H7C5.895 14.5 5 15.395 5 16.5V18H12V16.5ZM18 13.292H14V14.709H18V13.292ZM21 13.292H19V14.709H21V13.292ZM21 16.291H14V17.709H21V16.291ZM21 10.292H14V11.709H21V10.292Z" />'
    appsHtml += '</svg>'
    appsHtml += '</span>'
    appsHtml += '<span class="classic-list_name">' + value.name + '</span>'
    appsHtml += '</li>'
    console.log(value.name);
  });
  document.getElementById('app-list').innerHTML = appsHtml;
  console.log(appsHtml);

}, function(error) {
  // error
  console.log(error);
});

function createAppsHtml(app, appId) {

  appsHtml += '<li class="classic-list_item">'
  appsHtml += '<span class="classic-list_icon classic-colour--green">'
  appsHtml += '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">'
  appsHtml += '<path '
  appsHtml += 'd="M22 20H4V8H22V20ZM22 5H4C3.45 5 3 5.45 3 6V20C3 20.55 3.45 21 4 21H22C22.55 21 23 20.55 23 20V6C23 5.45 22.55 5 22 5ZM8.5 10.667C7.672 10.667 7 11.339 7 12.167C7 12.995 7.672 13.667 8.5 13.667C9.328 13.667 10 12.995 10 12.167C10 11.339 9.328 10.667 8.5 10.667ZM12 16.5C12 15.395 11.105 14.5 10 14.5H7C5.895 14.5 5 15.395 5 16.5V18H12V16.5ZM18 13.292H14V14.709H18V13.292ZM21 13.292H19V14.709H21V13.292ZM21 16.291H14V17.709H21V16.291ZM21 10.292H14V11.709H21V10.292Z" />'
  appsHtml += '</svg>'
  appsHtml += '</span>'
  appsHtml += '<a href="/k/' + appId + '/">'
  appsHtml += '<span class="classic-list_name">' + app.name + '</span>'
  appsHtml += '</a>'
  appsHtml += '</li>'
  document.getElementById('app-list').innerHTML = appsHtml;
  console.log(appsHtml)
}
