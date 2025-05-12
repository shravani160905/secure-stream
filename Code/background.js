chrome.downloads.onCreated.addListener((downloadItem) => {
    chrome.downloads.pause(downloadItem.id, () => {
      chrome.windows.create({
        url: `verification.html?downloadId=${downloadItem.id}&url=${encodeURIComponent(downloadItem.url)}&filename=${encodeURIComponent(downloadItem.filename)}`,
        type: "popup",
        width: 400,
        height: 300
      });
    });
  });
  