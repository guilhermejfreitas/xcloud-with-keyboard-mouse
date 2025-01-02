// Função para enviar mensagem para o content_script.js
function sendMessageToContentScript(tabId, message) {
    chrome.tabs.sendMessage(tabId, message);
  }
  
// Função para definir uma variável no localStorage da página
function setLocalStorageValue(tabId, key, value) {
  sendMessageToContentScript(tabId, {
    action: "setLocalStorage",
    key: key,
    value: value,
  });
}


function lerLocalStorage() {
  // Lê os dados do localStorage da extensão
  chrome.storage.local.get("GAMEPAD_CONFIG", function (result) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        // Define a variável no localStorage da página ativa
        setLocalStorageValue(tabs[0].id, "GAMEPAD_CONFIG", result.GAMEPAD_CONFIG);
      }
    });
    //console.log("Valor lido do localStorage da extensão:", result.GAMEPAD_CONFIG);
  });
}

setInterval(() => {
  lerLocalStorage();
},1000);