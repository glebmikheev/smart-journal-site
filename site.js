/* Add the 11-character YouTube ID when the demo is uploaded. */
const YOUTUBE_VIDEO_ID = "";

const translations = {
  "en": {
    "skip": "Skip to content",
    "navWorkspace": "The product",
    "navApproach": "Engineering",
    "navDemo": "Demo",
    "heroCopy": "Give your thoughts somewhere to grow. Keep notes and sources together, find what you remember by meaning, and follow the connections back to the original text.",
    "explore": "Discover the product",
    "localBadge": "Stored on your computer",
    "languagesBadge": "English · French · Russian",
    "reviewBadge": "You decide which links to keep",
    "workspaceHeading": "One workspace, a clearer picture",
    "library": "Library",
    "graph": "Graph",
    "groups": "GROUPS",
    "searchReady": "Search ready",
    "localWorkspace": "Local workspace",
    "addFiles": "Add files",
    "exampleQuery": "Why did we separate the local model server?",
    "byWords": "By words",
    "byMeaning": "By meaning",
    "filters": "Filters",
    "found": "01 / FOUND",
    "found2": "02 / FOUND",
    "note1": "Working session",
    "note2": "Prototype report",
    "result1": "A model idle for one client may still be in use by another.",
    "result2": "Separate processes let each application manage its own model.",
    "sourcePassage": "SOURCE PASSAGE",
    "passage": "Automatic unloading is allowed only on a server owned by Orion. A separate process leaves the other application’s session untouched.",
    "source": "Original source",
    "connection": "A connection worth checking",
    "connectionText": "The prototype report supports this decision.",
    "evidenceSources": "2 source passages",
    "reviewLabel": "Ready for your review",
    "figureCaption": "An illustrative workspace with authored demo documents.",
    "figureNote": "Your knowledge, with a trail back to the source.",
    "whyLabel": "WHY I BUILT IT",
    "motivationHeading": "I remembered the idea.\nI couldn’t find the document.",
    "motivationCopy": "Smart Journal began with that frustration. A personal tool for getting back to what you’ve read — and building on it.",
    "featuresLabel": "WHAT YOU CAN DO",
    "featuresHeading": "Put what you know to work.",
    "f1Title": "Keep the whole story.",
    "f1Copy": "A meeting note, a PDF, a recording: bring them into one library. Add groups, tags and your own properties.",
    "f2Title": "Find it in your own words.",
    "f2Copy": "Remember the idea but not the title? Search by meaning, then open the exact passage in its source.",
    "f2Footer": "Russian · English · French",
    "f3Title": "Understand the connection.",
    "f3Copy": "Explore proposes links between your notes with supporting passages. Read them, accept or reject, then see the result in the graph.",
    "f3Footer": "AI proposes. You review.",
    "approachLabel": "BEHIND THE PRODUCT",
    "approachHeading": "Built beyond the demo.",
    "approachCopy": "A working web application backed by a separate Python Core. The same API handles search, imports and reviewed connections.",
    "p1Title": "Local processing, optional cloud.",
    "p1Copy": "Files stay in your workspace. Local models can run on your machine; cloud providers are an explicit choice.",
    "p2Title": "Review that survives a restart.",
    "p2Copy": "Saved proposals retain their source references. Core checks those references and their versions before saving a connection.",
    "p3Title": "The everyday work matters too.",
    "p3Copy": "Background imports, a pauseable queue, model status, memory controls and backup/restore are part of the application.",
    "arch1": "Your material",
    "arch1Sub": "Notes & original files",
    "arch2": "Local workspace",
    "arch2Sub": "Organised & preserved",
    "arch3": "Search & Explore",
    "arch3Sub": "Relevant passages & proposals",
    "arch4": "Knowledge graph",
    "arch4Sub": "Connections you have reviewed",
    "demoHeading": "Smart Journal in action",
    "demoIntro": "Find a passage. Check its source. Connect the ideas.",
    "videoSoon": "PRODUCT WALKTHROUGH",
    "videoTitle": "The demo is on its way.",
    "videoNote": "As of 05.10.2026, the video is rendering.\nIt will be uploaded here soon.",
    "videoSource": "YouTube player will appear here",
    "videoBottom": "Search → sources → connections",
    "videoBottom2": "alpha v1.0",
    "videoPlay": "Play the demo on YouTube",
    "videoReady": "Watch Smart Journal in action.",
    "videoReadyNote": "From a remembered idea to its source and a reviewed connection.",
    "videoConsent": "Click to load the YouTube player",
    "videoAvailable": "alpha v1.0",
    "footer": "Designed and built by Gleb Mikheev",
    "navigation": "Main navigation",
    "language": "Interface language",
    "illustration": "Illustrative Smart Journal workspace with demo content",
    "architecture": "High-level architecture",
    "heroQuote": "“The happiness of your life depends upon the quality of your thoughts.”",
    "quoteAuthor": "Marcus Aurelius",
    "quoteCredit": "Meditations, III.9 · freely translated by Jeremy Collier",
    "mediaTypes": "Documents · Images · Audio · Video",
    "releaseNote": "alpha v1.0 · Core and web interface are working. Wider testing and distribution are next.",
    "pageTitle": "Smart Journal — Notes worth finding again"
  },
  "fr": {
    "skip": "Aller au contenu",
    "navWorkspace": "Le produit",
    "navApproach": "Conception",
    "navDemo": "Démo",
    "heroCopy": "Donnez à vos pensées un espace pour grandir. Rassemblez notes et sources, retrouvez une idée par le sens et remontez chaque lien jusqu’au texte original.",
    "explore": "Découvrir le produit",
    "localBadge": "Stocké sur votre ordinateur",
    "languagesBadge": "Anglais · Français · Russe",
    "reviewBadge": "Vous choisissez les liens à garder",
    "workspaceHeading": "Un espace, une vue plus claire",
    "library": "Bibliothèque",
    "graph": "Graphe",
    "groups": "GROUPES",
    "searchReady": "Recherche prête",
    "localWorkspace": "Espace local",
    "addFiles": "Ajouter des fichiers",
    "exampleQuery": "Pourquoi séparer le serveur du modèle local ?",
    "byWords": "Par mots",
    "byMeaning": "Par le sens",
    "filters": "Filtres",
    "found": "01 / RÉSULTAT",
    "found2": "02 / RÉSULTAT",
    "note1": "Réunion de travail",
    "note2": "Rapport du prototype",
    "result1": "Un modèle inactif pour un client peut servir à un autre.",
    "result2": "Chaque application gère son modèle dans un processus distinct.",
    "sourcePassage": "EXTRAIT DE LA SOURCE",
    "passage": "La libération automatique est autorisée uniquement sur un serveur appartenant à Orion. Un processus distinct préserve la session de l’autre application.",
    "source": "Source originale",
    "connection": "Un lien à vérifier",
    "connectionText": "Le rapport du prototype étaye cette décision.",
    "evidenceSources": "2 extraits sources",
    "reviewLabel": "À examiner",
    "figureCaption": "Illustration de l’espace avec des documents fictifs de démonstration.",
    "figureNote": "Vos connaissances, reliées à leurs sources.",
    "whyLabel": "POURQUOI CE PROJET",
    "motivationHeading": "Je me souvenais de l’idée.\nPas du document.",
    "motivationCopy": "Smart Journal est né de cette frustration : retrouver ce qu’on a lu pour continuer à réfléchir à partir de ses sources.",
    "featuresLabel": "CE QUE VOUS POUVEZ FAIRE",
    "featuresHeading": "Faites vivre vos connaissances.",
    "f1Title": "Gardez le contexte.",
    "f1Copy": "Une note de réunion, un PDF, un enregistrement : rassemblez-les dans une bibliothèque. Ajoutez groupes, étiquettes et propriétés personnalisées.",
    "f2Title": "Cherchez avec vos mots.",
    "f2Copy": "Vous vous souvenez de l’idée, mais pas du titre ? Cherchez par le sens, puis ouvrez le passage dans sa source.",
    "f2Footer": "Russe · Anglais · Français",
    "f3Title": "Comprenez le lien.",
    "f3Copy": "Explore propose des liens entre vos notes avec des extraits sources. Lisez, acceptez ou refusez, puis retrouvez le résultat dans le graphe.",
    "f3Footer": "L’IA propose. Vous examinez.",
    "approachLabel": "DERRIÈRE LE PRODUIT",
    "approachHeading": "Au-delà de la démo.",
    "approachCopy": "Une application web fonctionnelle, reliée à un cœur Python distinct. La même API gère recherche, imports et liens examinés.",
    "p1Title": "Traitement local, cloud facultatif.",
    "p1Copy": "Les fichiers restent dans votre espace. Les modèles locaux tournent sur votre machine ; le cloud est un choix explicite.",
    "p2Title": "Une vérification qui résiste au redémarrage.",
    "p2Copy": "Les propositions enregistrées conservent leurs références sources. Le cœur vérifie ces références et leurs versions avant de sauvegarder un lien.",
    "p3Title": "Le quotidien compte aussi.",
    "p3Copy": "Imports en arrière-plan, file avec pause, état des modèles, gestion mémoire et sauvegarde/restauration font partie de l’application.",
    "arch1": "Vos contenus",
    "arch1Sub": "Notes et fichiers originaux",
    "arch2": "Espace local",
    "arch2Sub": "Organisés et conservés",
    "arch3": "Recherche et Explore",
    "arch3Sub": "Passages et propositions",
    "arch4": "Graphe de connaissances",
    "arch4Sub": "Liens que vous avez examinés",
    "demoHeading": "Smart Journal en action",
    "demoIntro": "Retrouver un passage. Lire la source. Relier les idées.",
    "videoSoon": "DÉMONSTRATION DU PRODUIT",
    "videoTitle": "La démo arrive bientôt.",
    "videoNote": "Au 05.10.2026, la vidéo est en cours de rendu.\nElle sera bientôt mise en ligne ici.",
    "videoSource": "Le lecteur YouTube apparaîtra ici",
    "videoBottom": "Recherche → sources → liens",
    "videoBottom2": "alpha v1.0",
    "videoPlay": "Lire la démonstration sur YouTube",
    "videoReady": "Découvrez Smart Journal en action.",
    "videoReadyNote": "D’une idée retrouvée à sa source et à un lien que vous avez validé.",
    "videoConsent": "Cliquez pour charger le lecteur YouTube",
    "videoAvailable": "alpha v1.0",
    "footer": "Conçu et développé par Gleb Mikheev",
    "navigation": "Navigation principale",
    "language": "Langue de l’interface",
    "illustration": "Illustration de Smart Journal avec des contenus fictifs",
    "architecture": "Architecture générale",
    "heroQuote": "« Le bonheur de votre vie dépend de la qualité de vos pensées. »",
    "quoteAuthor": "Marc Aurèle",
    "quoteCredit": "Pensées, III.9 · d’après la traduction libre de Jeremy Collier",
    "mediaTypes": "Documents · Images · Audio · Vidéo",
    "releaseNote": "alpha v1.0 · Le cœur et l’interface web fonctionnent. Prochaines étapes : tests élargis et distribution.",
    "pageTitle": "Smart Journal — Des notes à retrouver"
  },
  "ru": {
    "skip": "К содержимому",
    "navWorkspace": "Приложение",
    "navApproach": "Разработка",
    "navDemo": "Демка",
    "heroCopy": "Дайте своим мыслям пространство для роста. Собирайте заметки и источники, находите нужное по смыслу и возвращайтесь от связей к исходному тексту.",
    "explore": "Посмотреть приложение",
    "localBadge": "Хранится на вашем компьютере",
    "languagesBadge": "Английский · Французский · Русский",
    "reviewBadge": "Вы решаете, какие связи оставить",
    "workspaceHeading": "Одно пространство, ясная картина",
    "library": "Библиотека",
    "graph": "Граф",
    "groups": "ГРУППЫ",
    "searchReady": "Поиск готов",
    "localWorkspace": "Локальное пространство",
    "addFiles": "Добавить файлы",
    "exampleQuery": "Зачем мы выделили отдельный сервер локальной модели?",
    "byWords": "По словам",
    "byMeaning": "По смыслу",
    "filters": "Фильтры",
    "found": "01 / НАЙДЕНО",
    "found2": "02 / НАЙДЕНО",
    "note1": "Рабочая встреча",
    "note2": "Отчёт об испытании",
    "result1": "Модель, свободная для одного клиента, может работать у другого.",
    "result2": "Отдельный процесс позволяет управлять своей моделью.",
    "sourcePassage": "ФРАГМЕНТ ИСТОЧНИКА",
    "passage": "Автоматическая выгрузка разрешена только на сервере, которым владеет Orion. Отдельный процесс не затрагивает сессию другого приложения.",
    "source": "Исходный файл",
    "connection": "Связь, которую стоит проверить",
    "connectionText": "Отчёт об испытании обосновывает это решение.",
    "evidenceSources": "2 фрагмента источников",
    "reviewLabel": "Готово к вашей проверке",
    "figureCaption": "Иллюстрация интерфейса с авторскими документами для демки.",
    "figureNote": "Знания, к которым можно вернуться через источник.",
    "whyLabel": "ЗАЧЕМ Я ЭТО СДЕЛАЛ",
    "motivationHeading": "Я помнил мысль.\nНо не мог найти документ.",
    "motivationCopy": "С этого и начался Smart Journal: личный инструмент, чтобы возвращаться к прочитанному и развивать свои идеи.",
    "featuresLabel": "ЧТО МОЖНО ДЕЛАТЬ",
    "featuresHeading": "Используйте то, что уже знаете.",
    "f1Title": "Сохраняйте контекст.",
    "f1Copy": "Заметка со встречи, PDF, запись разговора — всё в одной библиотеке. Добавляйте группы, метки и собственные свойства.",
    "f2Title": "Ищите своими словами.",
    "f2Copy": "Помните идею, но не заголовок? Найдите её по смыслу и откройте конкретный фрагмент в источнике.",
    "f2Footer": "Русский · Английский · Французский",
    "f3Title": "Разбирайтесь в связях.",
    "f3Copy": "Explore предлагает связи между заметками с исходными фрагментами. Прочитайте, примите или отклоните — и увидите результат в графе.",
    "f3Footer": "ИИ предлагает. Вы проверяете.",
    "approachLabel": "КАК ЭТО ПОСТРОЕНО",
    "approachHeading": "Больше, чем демка.",
    "approachCopy": "Работающее веб-приложение с отдельным ядром на Python. Один API для поиска, импорта и проверенных связей.",
    "p1Title": "Локальная обработка, облако по желанию.",
    "p1Copy": "Файлы хранятся в вашем пространстве. Локальные модели работают на вашем компьютере; облачного провайдера нужно выбрать явно.",
    "p2Title": "Проверка переживает перезапуск.",
    "p2Copy": "Сохранённые предложения содержат ссылки на источники. Перед сохранением связи Core проверяет эти ссылки и версии материалов.",
    "p3Title": "Повседневная работа тоже важна.",
    "p3Copy": "Фоновый импорт, очередь с паузой, статусы моделей, управление памятью и резервные копии уже есть в приложении.",
    "arch1": "Ваши материалы",
    "arch1Sub": "Заметки и исходные файлы",
    "arch2": "Локальное пространство",
    "arch2Sub": "Порядок и сохранность",
    "arch3": "Поиск и Explore",
    "arch3Sub": "Фрагменты и предложения",
    "arch4": "Граф знаний",
    "arch4Sub": "Проверенные вами связи",
    "demoHeading": "Smart Journal в действии",
    "demoIntro": "Найти фрагмент. Проверить источник. Связать идеи.",
    "videoSoon": "ДЕМОНСТРАЦИЯ ПРИЛОЖЕНИЯ",
    "videoTitle": "Демка скоро появится.",
    "videoNote": "На 05.10.2026 видео в процессе рендеринга.\nСкоро оно будет загружено сюда.",
    "videoSource": "Здесь появится плеер YouTube",
    "videoBottom": "Поиск → источники → связи",
    "videoBottom2": "alpha v1.0",
    "videoPlay": "Смотреть демонстрацию на YouTube",
    "videoReady": "Посмотрите Smart Journal в действии.",
    "videoReadyNote": "От найденной мысли к её источнику и проверенной вами связи.",
    "videoConsent": "Нажмите, чтобы загрузить плеер YouTube",
    "videoAvailable": "alpha v1.0",
    "footer": "Спроектировал и разработал Gleb Mikheev",
    "navigation": "Основная навигация",
    "language": "Язык интерфейса",
    "illustration": "Иллюстрация Smart Journal с демонстрационными материалами",
    "architecture": "Общая архитектура",
    "heroQuote": "«Счастье твоей жизни зависит от качества твоих мыслей».",
    "quoteAuthor": "Марк Аврелий",
    "quoteCredit": "«Размышления», III.9 · по вольному переводу Джереми Коллиера",
    "mediaTypes": "Документы · Фото · Аудио · Видео",
    "releaseNote": "alpha v1.0 · Ядро и веб-интерфейс работают. Впереди расширенная проверка и подготовка к распространению.",
    "pageTitle": "Smart Journal — Вернуться к своим мыслям"
  }
};

let language = "en";
function setText(element, text) {
  element.replaceChildren();
  text.split("\n").forEach((line, index) => {
    if (index) element.append(document.createElement("br"));
    element.append(document.createTextNode(line));
  });
}
function setLanguage(next) {
  if (!Object.hasOwn(translations, next)) return;
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (Object.hasOwn(translations[next], key)) setText(element, translations[next][key]);
  });
  document.querySelectorAll("[data-label]").forEach(element => {
    element.setAttribute("aria-label", translations[next][element.dataset.label]);
  });
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === next));
  });
  document.title = translations[next].pageTitle;
  const launch = document.querySelector(".youtube-launch");
  if (launch) launch.setAttribute("aria-label", translations[next].videoPlay);
  const frame = document.querySelector(".youtube-player");
  if (frame) frame.title = translations[next].videoPlay;
  try { localStorage.setItem("sj-site-language", next); } catch { /* Session-only choice. */ }
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

/* The player is fetched only after an explicit click. No YouTube request while pending. */
if (/^[A-Za-z0-9_-]{11}$/.test(YOUTUBE_VIDEO_ID)) {
  document.querySelector('[data-i18n="videoSoon"]').remove();
  document.querySelector('[data-i18n="videoTitle"]').dataset.i18n = "videoReady";
  document.querySelector('[data-i18n="videoNote"]').dataset.i18n = "videoReadyNote";
  document.querySelector('[data-i18n="videoSource"]').dataset.i18n = "videoConsent";
  document.querySelector('[data-i18n="videoBottom2"]').dataset.i18n = "videoAvailable";
  const slot = document.getElementById("video-slot");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "youtube-launch";
  button.append(...slot.childNodes);
  slot.replaceChildren(button);
  button.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.className = "youtube-player";
    frame.src = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`;
    frame.title = translations[language].videoPlay;
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    slot.replaceChildren(frame);
  }, { once: true });
}
try {
  const saved = localStorage.getItem("sj-site-language");
  if (saved && Object.hasOwn(translations, saved)) language = saved;
} catch { /* English remains the first-visit default. */ }
setLanguage(language);
