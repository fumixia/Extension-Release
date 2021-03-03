
let style = document.createElement('style');

style.innerHTML =
    '#snackbar {\n' +
    '  visibility: hidden;\n' +
    '  min-width: 250px;\n' +
    '  margin-left: -125px;\n' +
    '  background: linear-gradient(83deg, rgba(108,98,218,1) 0%, rgba(151,143,237,1) 100%);\n' +
    '  color: #fff;\n' +
    '  text-align: center;\n' +
    '  border-radius: 2px;\n' +
    '  padding: 10px;\n' +
    '  position: fixed;\n' +
    '  z-index: 9999;\n' +
    '  right: 10px;\n' +
    '  top: 10px;\n' +
    '}\n' +
    '\n' +
    '#snackbar > img {\n' +
    '  float: left;\n' +
    '  width: 35px;\n' +
    '  height: 35px;\n' +
    '  align-items: center;\n' +
    '}\n' +
    '\n' +
    '#snackbar > div {\n' +
    '  text-align: center;\n' +
    '  font-size: 17px;\n' +
    '  white-space: nowrap;\n' +
    '  padding: 5px;\n' +
    '  overflow: hidden;\n' +
    '}\n' +
    '\n' +
    '#snackbar.show {\n' +
    '  visibility: visible;\n' +
    '  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n' +
    '  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n' +
    '}\n' +
    '\n' +
    '#snackbar-warning {\n' +
    '  visibility: hidden;\n' +
    '  min-width: 250px;\n' +
    '  margin-left: -125px;\n' +
    '  background: linear-gradient(83deg, rgba(255,25,179,1) 0%, rgba(241,161,161,1) 100%);\n' +
    '  color: #fff;\n' +
    '  text-align: center;\n' +
    '  border-radius: 2px;\n' +
    '  padding: 10px;\n' +
    '  position: fixed;\n' +
    '  z-index: 9999;\n' +
    '  right: 10px;\n' +
    '  top: 10px;\n' +
    '}\n' +
    '\n' +
    '#snackbar-warning > img {\n' +
    '  float: left;\n' +
    '  width: 35px;\n' +
    '  height: 35px;\n' +
    '  align-items: center;\n' +
    '}\n' +
    '\n' +
    '#snackbar-warning > div {\n' +
    '  text-align: center;\n' +
    '  font-size: 17px;\n' +
    '  white-space: nowrap;\n' +
    '  padding: 5px;\n' +
    '  overflow: hidden;\n' +
    '}\n' +
    '\n' +
    '#snackbar-warning.show {\n' +
    '  visibility: visible;\n' +
    '  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n' +
    '  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n' +
    '}\n' +
    '@-webkit-keyframes fadein {\n' +
    '  from {right: 0; opacity: 0;} \n' +
    '  to {right: 10px; opacity: 1;}\n' +
    '}\n' +
    '\n' +
    '@keyframes fadein {\n' +
    '  from {right: 0; opacity: 0;}\n' +
    '  to {right: 10px; opacity: 1;}\n' +
    '}\n';

let ref = document.querySelector('head');
ref.appendChild(style);

async function setAttributes(el, attrs) {
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

async function toast(message) {
    let body = document.querySelector('body');
    let toastWrapper;
    toastWrapper = document.querySelector('#toast-wrapper');
    if (!toastWrapper) {
        let toastWrapperDraft = document.createElement('div');
        await setAttributes(toastWrapperDraft, {id: 'toast-wrapper'});
        body.appendChild(toastWrapperDraft);
        toastWrapper = document.querySelector('#toast-wrapper');
    }

    let countSnack = document.querySelectorAll('#snackbar-warning').length;
    let countWarning = document.querySelectorAll('#snackbar').length;

    let countOfToasts = countSnack + countWarning;

    let notifyWrapper = document.createElement('div');
    await setAttributes(notifyWrapper, {id: 'snackbar'});

    notifyWrapper.className = "show";
    notifyWrapper.style.marginTop = countOfToasts * 65 + 'px';

    let notiImg = document.createElement('img');
    await setAttributes(notiImg, {src: 'https://i.ibb.co/fS2fcZg/logo2.png'});
    let notiMsg = document.createElement('div');
    notiMsg.innerHTML = message;

    notifyWrapper.appendChild(notiImg);
    notifyWrapper.appendChild(notiMsg);

    toastWrapper.appendChild(notifyWrapper);

    setTimeout(() => {
        notifyWrapper.className = notifyWrapper.className.replace("show", "");
        notifyWrapper.parentNode.removeChild(notifyWrapper);

        let toastElm = document.querySelector('#toast-wrapper').children;

        for (let i = 0; i < toastElm.length; i++) {
            toastElm[i].style.marginTop = i * 65 + 'px';
        }
    }, 5000);
}

async function warning(message) {
    let body = document.querySelector('body');
    let toastWrapper;
    toastWrapper = document.querySelector('#toast-wrapper');
    if (!toastWrapper) {
        let toastWrapperDraft = document.createElement('div');
        await setAttributes(toastWrapperDraft, {id: 'toast-wrapper'});
        body.appendChild(toastWrapperDraft);
        toastWrapper = document.querySelector('#toast-wrapper');
    }

    let countSnack = document.querySelectorAll('#snackbar-warning').length;
    let countWarning = document.querySelectorAll('#snackbar').length;

    let countOfToasts = countSnack + countWarning;

    let notifyWrapper = document.createElement('div');
    await setAttributes(notifyWrapper, {id: 'snackbar-warning'});

    notifyWrapper.className = "show";
    notifyWrapper.style.marginTop = countOfToasts * 65 + 'px';

    let notiImg = document.createElement('img');
    await setAttributes(notiImg, {src: 'https://i.ibb.co/fS2fcZg/logo2.png'});
    let notiMsg = document.createElement('div');
    notiMsg.innerHTML = message;

    notifyWrapper.appendChild(notiImg);
    notifyWrapper.appendChild(notiMsg);
    toastWrapper.appendChild(notifyWrapper);

    setTimeout(() => {
        notifyWrapper.className = notifyWrapper.className.replace("show", "");
        notifyWrapper.parentNode.removeChild(notifyWrapper);

        let toastElm = document.querySelector('#toast-wrapper').children;

        for (let i = 0; i < toastElm.length; i++) {
            toastElm[i].style.marginTop = i * 65 + 'px';
        }
    }, 5000);
}
