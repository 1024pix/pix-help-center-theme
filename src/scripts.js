const request = require('request-promise');
const http = require('http');
const FormData = require('form-data');

const URL  = 'https://support.pix.fr/admin/portal/15000000761/template';

function saveStylesheet(css) {


}

let form = new FormData();
let css = '.test {color: #FFFFFF;}';

form.append('utf8', '%E2%9C%93&');
form.append('_method','put');
form.append('authenticity_token','mjMiPyxEjvN5gpfxYcF2A0szHHMKorHJp9sMCqgH5uU=');
form.append('portal_tab', 'custom_css');
form.append('portal_template[preferences][nonResponsive','true');
form.append('portal_template[preferences][nonResponsive','false');
form.append('portal_template[custom_css]', css);
form.append('publish_button', "Enregistrer et publier");

console.log('form', form);

const httpAgent = new http.Agent({ keepAlive: true});

let headers = {
    "Host": "support.pix.fr",
    "Accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
    "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
    "X-CSRF-Token": 'mjMiPyxEjvN5gpfxYcF2A0szHHMKorHJp9sMCqgH5uU=',
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Requested-With": "XMLHttpRequest",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Content-Length": "4000"
};


request({
  uri: URL,
  method: 'POST',
  headers: headers,
  body: form
}).then(function (htmlString) {
  console.log('success', htmlString);
}).catch(function (err) {
  console.log('error',err);
});
