/* Set this to the 11-character YouTube video ID after the demo is uploaded. */
const YOUTUBE_VIDEO_ID = "";

const translations = {
  en: {
    skip: "Skip to content", alpha: "Independent project · Alpha", navWorkspace: "Workspace", navApproach: "Approach", navDemo: "Demo ↗",
    hero1: "Keep the thought.", hero2: "Find the thread.", heroCopy: "A personal knowledge workspace for the things you read, write and almost remember. Find them by meaning. Connect them with evidence.", seeDemo: "See it in action", explore: "Explore the workspace", localBadge: "Local-first", languagesBadge: "Multilingual search", reviewBadge: "Human-reviewed AI",
    workspaceHeading: "One workspace, a clearer picture", library: "Library", graph: "Graph", groups: "GROUPS", searchReady: "Search ready", localWorkspace: "Local workspace", addFiles: "Add files", exampleQuery: "Why did we separate the local model server?", byWords: "By words", byMeaning: "By meaning", filters: "Filters", found: "01 / FOUND", found2: "02 / FOUND", note1: "Working session", note2: "Prototype report", result1: "A model idle for one client may still be in use by another.", result2: "Separate processes let each application manage its own model.", sourcePassage: "SOURCE PASSAGE", passage: "Automatic unloading is allowed only on a server owned by Orion. A separate process leaves the other application’s session untouched.", source: "Original source", connection: "A connection worth checking", connectionText: "The prototype report supports this decision.", evidenceSources: "2 source passages", reviewLabel: "Ready for your review", figureCaption: "An illustrative workspace with authored demo documents.", figureNote: "Your knowledge, with a trail back to the source.",
    whyLabel: "WHY IT EXISTS", motivationHeading: "Saving something isn’t the same as finding it again.", motivationCopy: "A useful idea rarely lives in one place. It is scattered across a note, a document, a conversation. Weeks later, you remember the connection — but not the words.", motivationCopy2: "Smart Journal is built around that moment: bringing your material together, helping you find the meaning, and making the connections easier to inspect.",
    featuresLabel: "A MORE USEFUL WORKSPACE", featuresHeading: "From saved material\nto connected knowledge.", featuresIntro: "A calm interface. A few deliberate tools. Enough structure to stay useful.", f1Title: "Bring your sources together.", f1Copy: "Notes, documents and media belong in one library. Keep the originals, organise with groups and tags, and add the properties that matter to you.", f2Title: "Search the idea, not just the words.", f2Copy: "Use a phrase you remember, even when the wording is different. Multilingual search brings back relevant passages with their original context.", f2Footer: "Russian · English · French", f3Title: "Connect, with something to go on.", f3Copy: "Explore suggests relationships and shows supporting passages. Inspect the evidence, accept what is useful, and keep the final decision yours.", f3Footer: "Sources first. Your judgement last.",
    approachLabel: "DESIGNED WITH CARE", approachHeading: "Quiet on the surface.\nConsidered underneath.", approachCopy: "The interface and the local core are separate by design. Your sources stay distinct from AI suggestions, and background work stays visible and recoverable.", p1Title: "Local-first, by choice.", p1Copy: "Store your workspace on your computer. Choose local models for local processing, or explicitly configure a cloud provider.", p2Title: "Evidence has a place.", p2Copy: "A suggested relationship stays a suggestion until reviewed. Supporting sources remain part of the connection.", p3Title: "Progress you can see.", p3Copy: "Import in the background, pause the queue, watch model readiness, and back up or restore your workspace.", arch1: "Your material", arch1Sub: "Notes & original files", arch2: "Local workspace", arch2Sub: "Organised & preserved", arch3: "Search & Explore", arch3Sub: "Relevant passages & proposals", arch4: "Knowledge graph", arch4Sub: "Connections you have reviewed",
    demoLabel: "SEE THE WHOLE THREAD", demoHeading: "A thought. A source.\nA connection.", demoIntro: "A short walkthrough of finding an idea, checking the evidence and adding a reviewed relationship to the graph.", videoSoon: "THE WALKTHROUGH IS ON ITS WAY", videoTitle: "A little more time\nfor the finishing touches.", videoNote: "As of 05.10.2026, the demo video is rendering.\nIt will be uploaded here soon.", videoSource: "Coming via YouTube", videoBottom: "Product walkthrough · Authored demo documents", videoBottom2: "Available here soon", videoPlay: "Play the demo on YouTube", videoReady: "A closer look\nat Smart Journal.", videoReadyNote: "Watch the complete product walkthrough.", videoConsent: "Click to load the YouTube player", videoAvailable: "Watch the walkthrough",
    closingLabel: "BUILT TO KEEP THINKING", closingHeading: "Less searching for files.\nMore following ideas.", closingCopy: "Smart Journal is an independent project in active development. The alpha brings its core workflows into a working web interface; broader validation and packaging are still ahead.", projectLink: "Project on GitHub", footer: "An independent project. A workspace for your thinking.", navigation: "Main navigation", language: "Interface language", illustration: "Illustrative Smart Journal workspace with demo content", architecture: "High-level architecture"
  },
  fr: {
    skip: "Aller au contenu", alpha: "Projet indépendant · Alpha", navWorkspace: "L’espace", navApproach: "L’approche", navDemo: "Démo ↗",
    hero1: "Gardez l’idée.", hero2: "Retrouvez le fil.", heroCopy: "Un espace personnel pour ce que vous lisez, écrivez et tentez de retrouver. Cherchez par le sens. Reliez les idées à leurs sources.", seeDemo: "Voir la démonstration", explore: "Découvrir l’espace", localBadge: "Priorité au local", languagesBadge: "Recherche multilingue", reviewBadge: "L’IA, sous votre regard",
    workspaceHeading: "Un espace, une vue plus claire", library: "Bibliothèque", graph: "Graphe", groups: "GROUPES", searchReady: "Recherche prête", localWorkspace: "Espace local", addFiles: "Ajouter des fichiers", exampleQuery: "Pourquoi séparer le serveur du modèle local ?", byWords: "Par mots", byMeaning: "Par le sens", filters: "Filtres", found: "01 / RÉSULTAT", found2: "02 / RÉSULTAT", note1: "Réunion de travail", note2: "Rapport du prototype", result1: "Un modèle inactif pour un client peut servir à un autre.", result2: "Chaque application gère son modèle dans un processus distinct.", sourcePassage: "EXTRAIT DE LA SOURCE", passage: "La libération automatique est autorisée uniquement sur un serveur appartenant à Orion. Un processus distinct préserve la session de l’autre application.", source: "Source originale", connection: "Un lien à vérifier", connectionText: "Le rapport du prototype étaye cette décision.", evidenceSources: "2 extraits sources", reviewLabel: "À examiner", figureCaption: "Illustration de l’espace avec des documents fictifs de démonstration.", figureNote: "Vos connaissances, reliées à leurs sources.",
    whyLabel: "LA MOTIVATION", motivationHeading: "Conserver une idée ne suffit pas à la retrouver.", motivationCopy: "Une idée utile tient rarement dans un seul endroit. Une note, un document, une conversation en contiennent chacun un morceau. Plus tard, vous vous souvenez du lien, mais plus des mots.", motivationCopy2: "Smart Journal part de ce moment : rassembler vos contenus, retrouver leur sens et rendre les liens plus faciles à examiner.",
    featuresLabel: "UN ESPACE PLUS UTILE", featuresHeading: "Des contenus conservés\naux connaissances reliées.", featuresIntro: "Une interface calme. Des outils choisis. Une structure qui reste utile.", f1Title: "Rassemblez vos sources.", f1Copy: "Notes, documents et médias trouvent leur place dans une bibliothèque. Gardez les originaux, organisez-les par groupes et étiquettes, et ajoutez vos propres propriétés.", f2Title: "Cherchez l’idée, pas seulement les mots.", f2Copy: "Utilisez la phrase dont vous vous souvenez, même si le texte est différent. La recherche multilingue retrouve les passages et leur contexte d’origine.", f2Footer: "Russe · Anglais · Français", f3Title: "Reliez les idées, avec des sources.", f3Copy: "Explore propose des relations et montre les passages qui les étayent. Examinez-les, acceptez les liens utiles et gardez la décision finale.", f3Footer: "Les sources d’abord. Votre jugement ensuite.",
    approachLabel: "UNE CONCEPTION ATTENTIVE", approachHeading: "Simple en surface.\nRéfléchi en profondeur.", approachCopy: "L’interface et le cœur local sont séparés. Vos sources restent distinctes des propositions de l’IA. Les tâches de fond restent visibles et récupérables.", p1Title: "Le local, par choix.", p1Copy: "Votre espace est stocké sur votre ordinateur. Choisissez des modèles locaux pour le traitement local, ou configurez explicitement un fournisseur cloud.", p2Title: "Une place pour les preuves.", p2Copy: "Une relation proposée reste une proposition avant examen. Les sources justificatives restent attachées au lien.", p3Title: "Un progrès visible.", p3Copy: "Importez en arrière-plan, mettez la file en pause, suivez les modèles et sauvegardez ou restaurez votre espace.", arch1: "Vos contenus", arch1Sub: "Notes et fichiers originaux", arch2: "Espace local", arch2Sub: "Organisés et conservés", arch3: "Recherche et Explore", arch3Sub: "Passages et propositions", arch4: "Graphe de connaissances", arch4Sub: "Liens que vous avez examinés",
    demoLabel: "SUIVRE LE FIL", demoHeading: "Une idée. Une source.\nUn lien.", demoIntro: "Un parcours court : retrouver une idée, examiner ses sources et ajouter une relation validée au graphe.", videoSoon: "LA DÉMONSTRATION ARRIVE", videoTitle: "Encore un instant\npour les dernières finitions.", videoNote: "Au 05.10.2026, la vidéo de démonstration est en cours de rendu.\nElle sera bientôt mise en ligne ici.", videoSource: "Bientôt sur YouTube", videoBottom: "Parcours produit · Documents fictifs de démonstration", videoBottom2: "Bientôt disponible ici", videoPlay: "Lire la démonstration sur YouTube", videoReady: "Smart Journal,\nde plus près.", videoReadyNote: "Découvrez le parcours complet du produit.", videoConsent: "Cliquez pour charger le lecteur YouTube", videoAvailable: "Voir la démonstration",
    closingLabel: "POUR CONTINUER À PENSER", closingHeading: "Moins de fichiers à chercher.\nPlus d’idées à suivre.", closingCopy: "Smart Journal est un projet indépendant en développement actif. L’alpha réunit ses parcours essentiels dans une interface web fonctionnelle ; la validation élargie et la distribution restent à venir.", projectLink: "Le projet sur GitHub", footer: "Un projet indépendant. Un espace pour vos idées.", navigation: "Navigation principale", language: "Langue de l’interface", illustration: "Illustration de Smart Journal avec des contenus fictifs", architecture: "Architecture générale"
  },
  ru: {
    skip: "К содержимому", alpha: "Независимый проект · Альфа", navWorkspace: "Пространство", navApproach: "Подход", navDemo: "Демка ↗",
    hero1: "Сохраните мысль.", hero2: "Найдите связь.", heroCopy: "Личное пространство для того, что вы читаете, пишете и пытаетесь вспомнить. Ищите по смыслу. Связывайте идеи с опорой на источники.", seeDemo: "Посмотреть в действии", explore: "Знакомство с приложением", localBadge: "Приоритет локальности", languagesBadge: "Поиск на разных языках", reviewBadge: "Решение за человеком",
    workspaceHeading: "Одно пространство, ясная картина", library: "Библиотека", graph: "Граф", groups: "ГРУППЫ", searchReady: "Поиск готов", localWorkspace: "Локальное пространство", addFiles: "Добавить файлы", exampleQuery: "Зачем мы выделили отдельный сервер локальной модели?", byWords: "По словам", byMeaning: "По смыслу", filters: "Фильтры", found: "01 / НАЙДЕНО", found2: "02 / НАЙДЕНО", note1: "Рабочая встреча", note2: "Отчёт об испытании", result1: "Модель, свободная для одного клиента, может работать у другого.", result2: "Отдельный процесс позволяет управлять своей моделью.", sourcePassage: "ФРАГМЕНТ ИСТОЧНИКА", passage: "Автоматическая выгрузка разрешена только на сервере, которым владеет Orion. Отдельный процесс не затрагивает сессию другого приложения.", source: "Исходный файл", connection: "Связь, которую стоит проверить", connectionText: "Отчёт об испытании обосновывает это решение.", evidenceSources: "2 фрагмента источников", reviewLabel: "Готово к вашей проверке", figureCaption: "Иллюстрация интерфейса с авторскими документами для демки.", figureNote: "Знания, к которым можно вернуться через источник.",
    whyLabel: "ЗАЧЕМ ЭТО НУЖНО", motivationHeading: "Сохранить мысль — ещё не значит найти её снова.", motivationCopy: "Полезная идея редко живёт в одном месте. Она разбросана по заметкам, документам и разговорам. Через несколько недель вы помните связь, но уже не помните точные слова.", motivationCopy2: "Smart Journal создан для этого момента: собрать материалы вместе, найти нужный смысл и сделать связи между ними понятнее.",
    featuresLabel: "БОЛЬШЕ ПОЛЬЗЫ ОТ МАТЕРИАЛОВ", featuresHeading: "От сохранённых материалов\nк связанным знаниям.", featuresIntro: "Спокойный интерфейс. Продуманные инструменты. Структура, которая помогает.", f1Title: "Соберите источники вместе.", f1Copy: "Заметки, документы и медиа — в одной библиотеке. Храните оригиналы, объединяйте их группами и метками, добавляйте нужные вам свойства.", f2Title: "Ищите мысль, а не только слова.", f2Copy: "Используйте то, что помните, даже если формулировка другая. Поиск на разных языках возвращает фрагменты с их исходным контекстом.", f2Footer: "Русский · Английский · Французский", f3Title: "Связывайте с опорой на источники.", f3Copy: "Explore предлагает отношения и показывает обосновывающие фрагменты. Проверяйте их, принимайте полезные связи и оставляйте последнее слово за собой.", f3Footer: "Сначала источники. Затем ваше решение.",
    approachLabel: "ПРОДУМАННЫЙ ПОДХОД", approachHeading: "Простой снаружи.\nПродуманный внутри.", approachCopy: "Интерфейс отделён от локального ядра. Исходные материалы не смешиваются с предложениями ИИ. Фоновые задачи видны и могут быть восстановлены.", p1Title: "Локальность — ваш выбор.", p1Copy: "Пространство хранится на вашем компьютере. Выбирайте локальные модели для локальной обработки или явно настройте облачного провайдера.", p2Title: "У связи есть основания.", p2Copy: "Предложение остаётся предложением до проверки. Источники, на которых оно основано, сохраняются вместе со связью.", p3Title: "Прогресс виден.", p3Copy: "Импортируйте в фоне, ставьте очередь на паузу, следите за готовностью моделей, создавайте и восстанавливайте резервные копии.", arch1: "Ваши материалы", arch1Sub: "Заметки и исходные файлы", arch2: "Локальное пространство", arch2Sub: "Порядок и сохранность", arch3: "Поиск и Explore", arch3Sub: "Фрагменты и предложения", arch4: "Граф знаний", arch4Sub: "Проверенные вами связи",
    demoLabel: "ПРОЙТИ ВЕСЬ ПУТЬ", demoHeading: "Мысль. Источник.\nСвязь.", demoIntro: "Короткий путь от поиска идеи до проверки источников и добавления подтверждённой связи в граф.", videoSoon: "ДЕМОНСТРАЦИЯ СКОРО ПОЯВИТСЯ", videoTitle: "Ещё немного времени\nна последние штрихи.", videoNote: "На 05.10.2026 видео демонстрации в процессе рендеринга.\nСкоро оно будет загружено сюда.", videoSource: "Скоро на YouTube", videoBottom: "Демонстрация приложения · Авторские демодокументы", videoBottom2: "Скоро на этой странице", videoPlay: "Смотреть демонстрацию на YouTube", videoReady: "Smart Journal\nв действии.", videoReadyNote: "Посмотрите полный сценарий работы приложения.", videoConsent: "Нажмите, чтобы загрузить плеер YouTube", videoAvailable: "Посмотреть демонстрацию",
    closingLabel: "ЧТОБЫ ПРОДОЛЖАТЬ ДУМАТЬ", closingHeading: "Меньше поиска файлов.\nБольше связей между идеями.", closingCopy: "Smart Journal — независимый проект в активной разработке. Основные сценарии уже работают в веб-интерфейсе альфы; расширенная проверка и упаковка для распространения ещё впереди.", projectLink: "Проект на GitHub", footer: "Независимый проект. Пространство для ваших мыслей.", navigation: "Основная навигация", language: "Язык интерфейса", illustration: "Иллюстрация Smart Journal с демонстрационными материалами", architecture: "Общая архитектура"
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
  document.title = next === "fr" ? "Smart Journal — Retrouvez le fil" : next === "ru" ? "Smart Journal — Найдите связь" : "Smart Journal — Find the thread";
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
