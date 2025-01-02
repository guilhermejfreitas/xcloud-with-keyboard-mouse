chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "setLocalStorage") {
    localStorage.setItem(message.key, message.value);
  }
});