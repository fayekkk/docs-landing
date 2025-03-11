// Content script (runs on all pages)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'print') {
      chrome.printerProvider.getPrinters((printers) => {
        if (chrome.runtime.lastError) {
          console.error('Error getting printers:', chrome.runtime.lastError.message);
          sendResponse({ success: false, error: chrome.runtime.lastError.message });
          return;
        }
  
        if (printers.length > 0) {
          const printJob = {
            title: request.title,
            contentType: 'BINARY',
            content: request.content,
          };
  
          chrome.printerProvider.print(printers[0].id, printJob, (result) => {
            if (chrome.runtime.lastError) {
              console.error('Error printing:', chrome.runtime.lastError.message);
              sendResponse({ success: false, error: chrome.runtime.lastError.message });
              return;
            }
  
            sendResponse({ success: true, result: result });
          });
        } else {
          sendResponse({ success: false, error: 'No printers available' });
        }
      });
  
      // Return true to indicate that a response will be sent asynchronously
      return true;
    }
  });
  
  // Popup script
  document.addEventListener('DOMContentLoaded', () => {
    const printButton = document.getElementById('printButton');
  
    printButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'print', title: 'Test Print', content: 'Hello, world!' }, (response) => {
          if (response && response.success) {
            console.log('Print job successful:', response.result);
          } else {
            console.error('Print job failed:', response.error);
          }
        });
      });
    });
  });