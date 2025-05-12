const urlParams = new URLSearchParams(window.location.search);
const downloadId = parseInt(urlParams.get('downloadId'));
const filename = decodeURIComponent(urlParams.get('filename'));
const url = decodeURIComponent(urlParams.get('url'));

document.getElementById('file-info').textContent = `Filename: ${filename}\nSource: ${url}`;

document.getElementById('allow').onclick = () => {
  chrome.downloads.resume(downloadId);
  window.close();
};

document.getElementById('block').onclick = () => {
  chrome.downloads.cancel(downloadId);
  window.close();
};
