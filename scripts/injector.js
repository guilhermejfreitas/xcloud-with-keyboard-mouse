function injectScript(file) {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file);
    script.async = false;
    document.documentElement.appendChild(script);

    //https://stackoverflow.com/a/28188390/2359478
}

const url = chrome.runtime.getURL('scripts/inject.js');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "setLocalStorage") {
    localStorage.setItem(message.key, message.value);
  }
});