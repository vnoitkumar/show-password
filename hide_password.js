var inputDomElements = document.getElementsByTagName('input');
var passwordInputDomElements = document.getElementsByClassName('show-password-chrome-extension');


for (var i = 0; i < passwordInputDomElements.length; i++) {
    var passwordDomElement = passwordInputDomElements[i];
    if (passwordDomElement.getAttribute('type').toLowerCase() === 'text') {
        passwordDomElement.classList.remove("show-password-chrome-extension");
        passwordDomElement.type = 'password';
    }
}
