var inputDomElements = document.getElementsByTagName('input');
var passwordInputDomElements = document.getElementsByClassName('show-password-by-vnoit-show-password-extension');

if (passwordInputDomElements.length > 0) {
    for (var i = 0; i < passwordInputDomElements.length; i++) {
        var passwordDomElement = passwordInputDomElements[i];
        if (passwordDomElement.getAttribute('type').toLowerCase() === 'text') {
            passwordDomElement.classList.remove("show-password-by-vnoit-show-password-extension");
            passwordDomElement.type = 'password';
        }
    }
} else {
    for (var i = 0; i < inputDomElements.length; i++) {
        var inputDomElement = inputDomElements[i];
        if (inputDomElement.getAttribute('type').toLowerCase() === 'password') {
            inputDomElement.className += " show-password-by-vnoit-show-password-extension";
            inputDomElement.type = 'text';
        }
    }
}
