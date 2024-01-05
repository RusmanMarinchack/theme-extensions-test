const selectors = {
    section: ".js-cookie-bar",
    button: ".js-cookie-bar-accept"
};
const isHidden = 'is-hidden';

function getCookie(name) {
    /* eslint-disable */
    let matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
    );
    /* eslint-enable */

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
        path: "/",
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        "max-age": -1
    });
}
const delay = 6000;
let section;

function init() {
    section = document.querySelector(selectors.section);

    if (!section) {
        return false;
    }

    setTimeout(show, delay);
    addEventListeners();
}

function setCookieBarCookie() {
    if (!section.hasAttribute("data-cookie-time")) {
        return;
    }

    let cookieTimeDay = section.dataset.cookieTime;
    let cookieTime = cookieTimeDay * 24 * 60 * 60;

    setCookie("cookie_bar", "1", {
        "max-age": cookieTime
    });
}

function addEventListeners() {
    section.addEventListener("click", (event) => {
        const button = event.target.closest(selectors.button);

        if (button) {
            close();
        }
    });
}

function close() {
    setCookieBarCookie();
    section.remove();
}

function show() {
    if (getCookie("cookie_bar")) {
        return;
    }

    section.classList.remove(isHidden);
}

init();

// deleteCookie("cookie_bar")