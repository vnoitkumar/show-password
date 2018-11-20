var inputDomElements = document.getElementsByTagName('input');
var passwordInputDomElements = document.getElementsByClassName('show-password-chrome-extension');


for (var i = 0; i < inputDomElements.length; i++) {
    var inputDomElement = inputDomElements[i];
    if (inputDomElement.getAttribute('type').toLowerCase() === 'password') {
        inputDomElement.className += " show-password-chrome-extension";
        inputDomElement.type = 'text';
    }
}
