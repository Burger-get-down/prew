// конфигурация чат-бота
const configChatbot = {};
// CSS-селектор кнопки, посредством которой будем вызывать окно диалога с чат-ботом
configChatbot.btn = '.chatbot__btn';
// ключ для хранения отпечатка браузера
configChatbot.key = 'fingerprint';
// реплики чат-бота
configChatbot.replicas = {
  bot: {
    0: {
      content: 'Привет! Я бот поддержки сайта <a href="https://gbii.ru" target="_blank">gbii.ru</a>', human: [0, 1, 2]
    },
    1: { content: 'Я тоже рад, как мне к Вам обращаться?', human: [3] },
    2: { content: 'Как мне к Вам обращаться?', human: [3] },
    3: { content: '{{name}}, что Вас интересует?', human: [4, 5] },
    4: { content: '{{name}}, для этого перейдите на <a href="https://itchief.ru/javascript/chatbot-for-website" target="_blank">эту страницу</a>. Она содержит подробную инструкцию по использованию этого чат-бота.', human: [6] },
    5: { content: "{{name}}, какой у Вас вопрос?", human: [7] },
    6: { content: '{{name}}, мы получили Ваш вопрос! Скажите, как с Вами удобнее будет связаться?', human: [8, 9] },
    7: { content: '{{name}}, укажите пожалуйста ваш телефон', human: [10] },
    8: { content: '{{name}}, укажите пожалуйста ваш Email ниже', human: [10] },
    9: { content: 'Готово! {{name}}, мы свяжемся с вами в ближайшее время по {{contact}}. Всего хорошего!', human: [6] },
  },
  human: {
    0: { content: 'Привет! Я рад с тобой познакомиться', bot: 1 },
    1: { content: 'Салют!', bot: 2 },
    2: { content: 'Приветик, Инфинити!', bot: 2 },
    3: { content: '', bot: 3, name: 'name' },
    4: { content: 'Меня интересует, как я могу использовать этот чат-бот у себя на сайте', bot: 4 },
    5: { content: 'Хочу оставить запрос разработчику чат-бота', bot: 5 },
    6: { content: 'В начало', bot: 3 },
    7: { content: '', bot: 6, name: '' },
    8: { content: 'по телефону', bot: 7 },
    9: { content: 'по email', bot: 8 },
    10: { content: '', bot: 9, name: 'contact' },
  }
}

// корневой элемент
configChatbot.root = SimpleChatbot.createTemplate();
// URL chatbot.php
configChatbot.url = '/chatbot/chatbot.php';
// создание SimpleChatbot
let chatbot = new SimpleChatbot(configChatbot);
// при клике по кнопке configChatbot.btn
document.querySelector(configChatbot.btn).onclick = function (e) {
  this.classList.add('d-none');
  const $tooltip = this.querySelector('.chatbot__tooltip');
  if ($tooltip) {
    $tooltip.classList.add('d-none');
  }
  configChatbot.root.classList.toggle('chatbot_hidden');
  chatbot.init();
};
// добавление ключа для хранения отпечатка браузера в LocalStorage
let fingerprint = localStorage.getItem(configChatbot.key);
if (!fingerprint) {
  Fingerprint2.get(function (components) {
    fingerprint = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value
    }).join(), 31)
    localStorage.setItem(configChatbot.key, fingerprint)
  });
}
// 



cardBtn.forEach((cardBtn, i) => {
  cardBtn.addEventListener('click', () => {
      activeModal(i)
  })
})

modalClose.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
      modal.forEach((modalRemove) => {
          modalRemove.classList.remove('active-modal')
      })
  })
})


modal.forEach((modal) => {
  modal.addEventListener('click', () => {
      modal.classList.remove('active-modal')
  })
})

modalCard.forEach((modalCard) => {
  modalCard.addEventListener('click', (e) => {
      e.stopPropagation()
  })
})


