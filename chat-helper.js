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
