(function() {
  if (window.location.href.indexOf("/products/") === -1) return;
  var style = document.createElement('style');
  style.innerHTML =
    '#chat-help-popup {' +
    'background-color: #10a37f;' +
    'color: white;' +
    'padding: 12px 18px;' +
    'border-radius: 30px;' +
    'box-shadow: 0 4px 10px rgba(0,0,0,0.2);' +
    'font-size: 14px;' +
    'font-family: sans-serif;' +
    'cursor: pointer;' +
    'z-index: 9999;' +
    'display: flex;' +
    'align-items: center;' +
    'transition: background 0.3s;' +
    'margin-bottom: 15px;' +
    'width: fit-content;' +
    '}' +
    '#chat-help-popup:hover {' +
    'background-color: #0e8e6e;' +
    '}' +
    '#chat-help-popup svg {' +
    'margin-right: 8px;' +
    '}';
  document.head.appendChild(style);
  function insertChatDiv() {
    var target = document.querySelector('div.section-notify-me');
    if (!target) {
      setTimeout(insertChatDiv, 500);
      return;
    }
    var popup = document.createElement('div');
    popup.id = 'chat-help-popup';
    popup.innerHTML =
      '<svg width="20" height="20" fill="white" viewBox="0 0 24 24">' +
      '<path d="M12 3C6.48 3 2 6.96 2 11.5c0 2.34 1.16 4.45 3.05 5.9-.1.84-.41 1.94-.95 2.99 0 0-.01.01-.01.01a.75.75 0 001.04.96c1.6-.78 3.17-1.35 4.64-1.69 0 0 .01 0 .01-.01.44.08.89.12 1.36.12 5.52 0 10-3.96 10-8.5S17.52 3 12 3z"/>' +
      '</svg>' +
      '🔍 رشّح لي أفضل منتج باستخدام الذكاء الاصطناعي';
    popup.onclick = function () {
      var currentUrl = encodeURIComponent(window.location.href);
      var prompt =
        "Visit and make sure you use proxy search strategy this link " + currentUrl +
        " for the product and find out the product details then search in the same store only for similar products and help me choose the best among them and nominate three with name, link and price, all from same store only.";
      var chatUrl = "https://chat.openai.com/?q=" + encodeURIComponent(prompt);
      window.open(chatUrl, '_blank');
    };
    target.parentNode.insertBefore(popup, target);
  }
  insertChatDiv();
})();
