import React, { useEffect, useMemo, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Languages,
  BookOpen,
  User,
  ChevronRight,
  Play,
  Accessibility,
  Bell,
  FileText,
  MessageSquare,
  Sparkles,
  LifeBuoy,
  HandHelping,
  Settings,
  BarChart3,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Search,
  Video,
  Mic,
  Captions,
  Upload,
  Building2,
  Menu,
  X,
  BadgeCheck,
  Users,
  ClipboardList,
  UserRoundCog,
  WandSparkles,
  Clock3,
  Check,
  MapPin,
  Trophy,
  MessageCircleMore,
  Radio,
  LocateFixed,
  Bot,
  Send,
  Camera,
  PhoneCall,
  Brain,
  Lock,
} from "lucide-react";

const STORAGE_KEY = "akysign_ultimate_state_v3";

const translations = {
  en: {
    navFeatures: "Features",
    navRoles: "Roles",
    navContact: "Contact",
    getStarted: "Get Started",
    watchDemo: "Watch Demo",
    heroBadge: "Inclusive communication platform",
    heroTitle1: "Break communication barriers",
    heroTitle2: "with sign language AI",
    heroText:
      "AkySign helps people learn sign language, communicate in real time, and access jobs and support in one platform.",
    featuresBadge: "Features",
    featuresTitle: "Everything you need in one inclusive platform",
    featuresText:
      "AkySign combines translation, learning, opportunity, and support in one accessible experience.",
    rolesBadge: "Built for everyone",
    rolesTitle: "Designed for every part of the community",
    ctaBadge: "Get started",
    ctaTitle: "Start building a more inclusive future",
    ctaText:
      "Join AkySign and make communication, learning, and opportunity more accessible for everyone.",
    joinPlatform: "Join the Platform",
    registration: "Registration",
    createProfile: "Create your profile",
    chooseRoleText:
      "Choose your role and continue to your personal AkySign workspace.",
    selectRole: "Select your role",
    yourDetails: "Your details",
    surname: "Surname",
    name: "Name",
    age: "Age",
    continue: "Continue",
    continueGoogle: "Continue with Google",
    back: "Back",
    dashboard: "Dashboard",
    learning: "Learning",
    jobs: "Jobs",
    profile: "Profile",
    settings: "Settings",
    translator: "Translator",
    notifications: "Notifications",
    admin: "Admin",
    chat: "Chat",
    matching: "Matching",
    analytics: "Analytics",
    home: "Home",
    logout: "Logout",
    activeRole: "Active role",
    saveChanges: "Save changes",
    accessibilitySettings: "Accessibility settings",
    highContrast: "High contrast mode",
    largeText: "Large text",
    simplifiedMode: "Simplified mode",
    captions: "Captions by default",
    reduceMotion: "Reduce motion",
    biggerButtons: "Bigger buttons",
    keyboardFocus: "Stronger focus outlines",
    profileTitle: "My profile",
    profileText: "Manage your personal information and preferences.",
    learningTitle: "Learning space",
    learningText: "Continue learning with lessons, progress, and practice.",
    jobsTitle: "Jobs and opportunities",
    jobsText: "Find openings, support requests, and inclusive opportunities.",
    settingsTitle: "Platform settings",
    settingsText: "Adjust language, accessibility, and interface preferences.",
    translatorTitle: "AI Translator",
    translatorText:
      "Translate speech, text, and sign language through one clear interface.",
    notificationsTitle: "Notifications center",
    notificationsText:
      "Stay updated on lessons, jobs, support requests, and urgent alerts.",
    onboardingTitle: "Choose your priorities",
    onboardingText:
      "Tell us what matters most right now so we can personalize your workspace.",
    finishSetup: "Finish setup",
    learningGoal: "Learning",
    communicationGoal: "Communication",
    workGoal: "Work",
    supportGoal: "Support",
    student: "Student",
    employer: "Employer",
    disability_user: "User with disabilities",
    volunteer: "Volunteer",
    adminRole: "Administrator",
    dashboardTitles: {
      student: "Student dashboard",
      employer: "Employer dashboard",
      disability_user: "Accessibility dashboard",
      volunteer: "Volunteer dashboard",
      admin: "Admin dashboard",
    },
    dashboardSubtitles: {
      student:
        "Continue learning sign language, practice communication, and track your progress.",
      employer:
        "Post vacancies, discover inclusive hiring tools, and improve workplace communication.",
      disability_user:
        "Access support tools, easier communication features, and personalized assistance.",
      volunteer:
        "See active requests, help people communicate, and contribute to the community.",
      admin:
        "Moderate content, review users, and manage the platform from one place.",
    },
    open: "Open",
    apply: "Apply",
    manage: "Manage",
    postVacancy: "Post a vacancy",
    roleLearningGuide: "Employer communication guide",
    roleLearningGuideText:
      "Learn how to communicate clearly and inclusively with employees with hearing impairments.",
    search: "Search",
    filters: "Filters",
    level: "Level",
    category: "Category",
    clear: "Clear",
    uploadCv: "Upload CV",
    skills: "Skills",
    preferredCommunication: "Preferred communication",
    availability: "Availability",
    email: "Email",
    phone: "Phone",
    company: "Company",
    requestSupport: "Request support",
    startCamera: "Start Camera",
    startListening: "Start Listening",
    translate: "Translate",
    messageHistory: "Message history",
    typeMessage: "Type your message...",
    quickActions: "Quick actions",
    trustTitle: "Built for accessibility and inclusion",
    trustText:
      "Privacy-conscious, multilingual, and designed for inclusive communication.",
    privacy: "Privacy",
    accessibilityStatement: "Accessibility Statement",
    supportEmail: "support@akysign.org",
    footerMission:
      "AkySign connects learning, communication, support, and opportunities in one inclusive platform.",
    noResults: "No results found",
    adminTitle: "Admin panel",
    adminText:
      "Moderate vacancies, review support requests, manage users, and publish lessons.",
    recentActivity: "Recent activity",
    recommendations: "Recommendations",
    progressGraph: "Progress overview",
    systemStatus: "System status",
    live: "Live",
    createMockVacancy: "Create mock vacancy",
    addLesson: "Add lesson",
    sendNotice: "Send notice",
    saved: "Saved",
    invalidForm: "Please complete the required fields.",
    successProfile: "Profile updated successfully.",
    authStatus: "Signed in locally",
    chatTitle: "Live support chat",
    chatText: "Connect users, volunteers, and employers in one messaging space.",
    matchingTitle: "Smart matching",
    matchingText: "Match users to volunteers, jobs, or support based on goals and skills.",
    analyticsTitle: "Analytics and progress",
    analyticsText: "Track learning, activity, support, and platform engagement.",
    currentLocation: "Current location",
    detectLocation: "Detect location",
    videoCall: "Video call",
    startCall: "Start call",
    endCall: "End call",
    premium: "Premium",
    xp: "XP points",
    badges: "Badges",
    levelLabel: "Level",
    streak: "Streak",
    backendStatus: "Backend readiness",
    aiEngine: "AI engine",
    authTitle: "Auth and security",
    authText: "Prepared for real Google auth, protected routes, and backend integration.",
    matchingSuggestion: "Suggested match",
    matchNow: "Match now",
    userFlow: "Workflow",
    workflowText: "Applications, support requests, and volunteer acceptance in one flow.",
    sendMessage: "Send message",
    nearbyHelp: "Nearby help",
    gamification: "Gamification",
    xpReward: "+10 XP",
    backendMock: "Mock backend connected",
  },
  ru: {
    navFeatures: "Возможности",
    navRoles: "Роли",
    navContact: "Контакты",
    getStarted: "Начать",
    watchDemo: "Смотреть демо",
    heroBadge: "Инклюзивная платформа общения",
    heroTitle1: "Убираем барьеры в общении",
    heroTitle2: "с помощью AI и жестового языка",
    heroText:
      "AkySign помогает изучать язык жестов, общаться в реальном времени и получать доступ к вакансиям и поддержке на одной платформе.",
    featuresBadge: "Возможности",
    featuresTitle: "Все необходимое в одной инклюзивной платформе",
    featuresText:
      "AkySign объединяет перевод, обучение, возможности и поддержку в одном доступном интерфейсе.",
    rolesBadge: "Для всех",
    rolesTitle: "Платформа для каждой части сообщества",
    ctaBadge: "Начать",
    ctaTitle: "Создавайте более инклюзивное будущее",
    ctaText:
      "Присоединяйтесь к AkySign и делайте общение, обучение и возможности доступнее для всех.",
    joinPlatform: "Присоединиться",
    registration: "Регистрация",
    createProfile: "Создайте профиль",
    chooseRoleText:
      "Выберите свою роль и перейдите в личное рабочее пространство AkySign.",
    selectRole: "Выберите роль",
    yourDetails: "Ваши данные",
    surname: "Фамилия",
    name: "Имя",
    age: "Возраст",
    continue: "Продолжить",
    continueGoogle: "Продолжить через Google",
    back: "Назад",
    dashboard: "Главная",
    learning: "Обучение",
    jobs: "Вакансии",
    profile: "Профиль",
    settings: "Настройки",
    translator: "Переводчик",
    notifications: "Уведомления",
    admin: "Админ",
    chat: "Чат",
    matching: "Матчинг",
    analytics: "Аналитика",
    home: "Домой",
    logout: "Выйти",
    activeRole: "Активная роль",
    saveChanges: "Сохранить изменения",
    accessibilitySettings: "Настройки доступности",
    highContrast: "Высокий контраст",
    largeText: "Крупный текст",
    simplifiedMode: "Упрощенный режим",
    captions: "Субтитры по умолчанию",
    reduceMotion: "Меньше анимации",
    biggerButtons: "Крупные кнопки",
    keyboardFocus: "Более заметный фокус",
    profileTitle: "Мой профиль",
    profileText: "Управляйте личными данными и настройками.",
    learningTitle: "Пространство обучения",
    learningText: "Продолжайте обучение с уроками, прогрессом и практикой.",
    jobsTitle: "Вакансии и возможности",
    jobsText: "Ищите вакансии, запросы на помощь и инклюзивные возможности.",
    settingsTitle: "Настройки платформы",
    settingsText: "Изменяйте язык, доступность и параметры интерфейса.",
    translatorTitle: "AI-переводчик",
    translatorText:
      "Переводите речь, текст и жестовый язык через один понятный интерфейс.",
    notificationsTitle: "Центр уведомлений",
    notificationsText:
      "Следите за уроками, вакансиями, запросами помощи и срочными уведомлениями.",
    onboardingTitle: "Выберите приоритеты",
    onboardingText:
      "Скажите, что для вас сейчас важнее, и мы персонализируем рабочее пространство.",
    finishSetup: "Завершить настройку",
    learningGoal: "Обучение",
    communicationGoal: "Коммуникация",
    workGoal: "Работа",
    supportGoal: "Поддержка",
    student: "Ученик",
    employer: "Работодатель",
    disability_user: "Пользователь с ограниченными возможностями",
    volunteer: "Волонтер",
    adminRole: "Администратор",
    dashboardTitles: {
      student: "Панель ученика",
      employer: "Панель работодателя",
      disability_user: "Панель доступности",
      volunteer: "Панель волонтера",
      admin: "Панель администратора",
    },
    dashboardSubtitles: {
      student:
        "Продолжайте изучать язык жестов, практикуйте общение и отслеживайте свой прогресс.",
      employer:
        "Размещайте вакансии, изучайте инклюзивный найм и улучшайте коммуникацию на работе.",
      disability_user:
        "Используйте инструменты поддержки, удобные функции общения и персональную помощь.",
      volunteer:
        "Смотрите активные запросы, помогайте людям общаться и поддерживайте сообщество.",
      admin:
        "Модерируйте контент, проверяйте пользователей и управляйте платформой из одного места.",
    },
    open: "Открыть",
    apply: "Откликнуться",
    manage: "Управлять",
    postVacancy: "Разместить вакансию",
    roleLearningGuide: "Гид по коммуникации для работодателя",
    roleLearningGuideText:
      "Узнайте, как ясно и инклюзивно общаться с сотрудниками с нарушением слуха.",
    search: "Поиск",
    filters: "Фильтры",
    level: "Уровень",
    category: "Категория",
    clear: "Очистить",
    uploadCv: "Загрузить CV",
    skills: "Навыки",
    preferredCommunication: "Предпочтительный способ общения",
    availability: "Доступность",
    email: "Email",
    phone: "Телефон",
    company: "Компания",
    requestSupport: "Запросить помощь",
    startCamera: "Запустить камеру",
    startListening: "Слушать",
    translate: "Перевести",
    messageHistory: "История сообщений",
    typeMessage: "Введите сообщение...",
    quickActions: "Быстрые действия",
    trustTitle: "Создано для доступности и инклюзии",
    trustText:
      "Конфиденциально, многоязычно и спроектировано для инклюзивной коммуникации.",
    privacy: "Конфиденциальность",
    accessibilityStatement: "Заявление о доступности",
    supportEmail: "support@akysign.org",
    footerMission:
      "AkySign объединяет обучение, коммуникацию, поддержку и возможности в одной инклюзивной платформе.",
    noResults: "Ничего не найдено",
    adminTitle: "Админ-панель",
    adminText:
      "Модерируйте вакансии, проверяйте запросы на помощь, управляйте пользователями и публикуйте уроки.",
    recentActivity: "Последняя активность",
    recommendations: "Рекомендации",
    progressGraph: "Обзор прогресса",
    systemStatus: "Статус системы",
    live: "Активно",
    createMockVacancy: "Создать вакансию",
    addLesson: "Добавить урок",
    sendNotice: "Отправить уведомление",
    saved: "Сохранено",
    invalidForm: "Пожалуйста, заполните обязательные поля.",
    successProfile: "Профиль успешно обновлен.",
    authStatus: "Локальный вход выполнен",
    chatTitle: "Чат поддержки",
    chatText: "Соединяйте пользователей, волонтеров и работодателей в одном мессенджере.",
    matchingTitle: "Умный матчинг",
    matchingText: "Подбирайте волонтеров, вакансии и поддержку по целям и навыкам.",
    analyticsTitle: "Аналитика и прогресс",
    analyticsText: "Отслеживайте обучение, активность, помощь и вовлеченность платформы.",
    currentLocation: "Текущее местоположение",
    detectLocation: "Определить локацию",
    videoCall: "Видео-звонок",
    startCall: "Начать звонок",
    endCall: "Завершить звонок",
    premium: "Премиум",
    xp: "XP очки",
    badges: "Бейджи",
    levelLabel: "Уровень",
    streak: "Серия",
    backendStatus: "Готовность backend",
    aiEngine: "AI движок",
    authTitle: "Авторизация и безопасность",
    authText: "Подготовлено для реального Google auth, защищенных маршрутов и backend интеграции.",
    matchingSuggestion: "Рекомендуемый матч",
    matchNow: "Подобрать",
    userFlow: "Workflow",
    workflowText: "Отклики, запросы помощи и принятие заявок волонтерами в одном процессе.",
    sendMessage: "Отправить",
    nearbyHelp: "Помощь рядом",
    gamification: "Геймификация",
    xpReward: "+10 XP",
    backendMock: "Mock backend подключен",
  },
  kg: {
    navFeatures: "Мүмкүнчүлүктөр",
    navRoles: "Ролдор",
    navContact: "Байланыш",
    getStarted: "Баштоо",
    watchDemo: "Демону көрүү",
    heroBadge: "Инклюзивдүү байланыш платформасы",
    heroTitle1: "Байланыштагы тоскоолдуктарды жоёбуз",
    heroTitle2: "жаңдоо тили жана AI менен",
    heroText:
      "AkySign жаңдоо тилин үйрөнүүгө, реалдуу убакытта баарлашууга жана вакансиялар менен колдоого бир платформадан жетүүгө жардам берет.",
    featuresBadge: "Мүмкүнчүлүктөр",
    featuresTitle: "Бир инклюзивдүү платформада керектүүнүн баары",
    featuresText:
      "AkySign котормону, окууну, мүмкүнчүлүктөрдү жана колдоону бир жеткиликтүү интерфейсче бириктирет.",
    rolesBadge: "Баары үчүн",
    rolesTitle: "Коомчулуктун ар бир бөлүгү үчүн түзүлгөн",
    ctaBadge: "Баштоо",
    ctaTitle: "Көбүрөөк инклюзивдүү келечекти түзүңүз",
    ctaText:
      "AkySign платформасына кошулуп, байланыш, окуу жана мүмкүнчүлүктөрдү баарына жеткиликтүү кылыңыз.",
    joinPlatform: "Кошулуу",
    registration: "Каттоо",
    createProfile: "Профиль түзүңүз",
    chooseRoleText:
      "Өз ролуңузду тандап, жеке AkySign мейкиндигине өтүңүз.",
    selectRole: "Ролду тандаңыз",
    yourDetails: "Сиздин маалымат",
    surname: "Фамилия",
    name: "Аты",
    age: "Жашы",
    continue: "Улантуу",
    continueGoogle: "Google аркылуу улантуу",
    back: "Артка",
    dashboard: "Башкы бет",
    learning: "Окутуу",
    jobs: "Вакансиялар",
    profile: "Профиль",
    settings: "Жөндөөлөр",
    translator: "Котормочу",
    notifications: "Билдирмелер",
    admin: "Админ",
    chat: "Чат",
    matching: "Матчинг",
    analytics: "Аналитика",
    home: "Башкы бет",
    logout: "Чыгуу",
    activeRole: "Активдүү роль",
    saveChanges: "Өзгөртүүлөрдү сактоо",
    accessibilitySettings: "Жеткиликтүүлүк жөндөөлөрү",
    highContrast: "Жогорку контраст",
    largeText: "Чоң текст",
    simplifiedMode: "Жөнөкөйлөтүлгөн режим",
    captions: "Субтитрлер демейки боюнча",
    reduceMotion: "Анимацияны азайтуу",
    biggerButtons: "Чоң баскычтар",
    keyboardFocus: "Күчтүү фокус алкагы",
    profileTitle: "Менин профилим",
    profileText: "Жеке маалыматты жана жөндөөлөрдү башкарыңыз.",
    learningTitle: "Окутуу мейкиндиги",
    learningText: "Сабактар, прогресс жана практика менен улантыңыз.",
    jobsTitle: "Вакансиялар жана мүмкүнчүлүктөр",
    jobsText: "Вакансияларды, жардам сурамдарын жана инклюзивдүү мүмкүнчүлүктөрдү табыңыз.",
    settingsTitle: "Платформа жөндөөлөрү",
    settingsText: "Тилди, жеткиликтүүлүктү жана интерфейс параметрлерин өзгөртүңүз.",
    translatorTitle: "AI-котормочу",
    translatorText:
      "Сүйлөө, текст жана жаңдоо тилин бир түшүнүктүү интерфейс аркылуу которуңуз.",
    notificationsTitle: "Билдирмелер борбору",
    notificationsText:
      "Сабактар, вакансиялар, жардам сурамдары жана шашылыш билдирмелер боюнча жаңыланыңыз.",
    onboardingTitle: "Приоритеттерди тандаңыз",
    onboardingText:
      "Азыр сиз үчүн эмне маанилүү экенин айтыңыз, биз мейкиндикти ыңгайлаштырабыз.",
    finishSetup: "Орнотууну аяктоо",
    learningGoal: "Окутуу",
    communicationGoal: "Байланыш",
    workGoal: "Жумуш",
    supportGoal: "Колдоо",
    student: "Окуучу",
    employer: "Жумуш берүүчү",
    disability_user: "Мүмкүнчүлүгү чектелген колдонуучу",
    volunteer: "Волонтер",
    adminRole: "Администратор",
    dashboardTitles: {
      student: "Окуучунун панели",
      employer: "Жумуш берүүчүнүн панели",
      disability_user: "Жеткиликтүүлүк панели",
      volunteer: "Волонтердун панели",
      admin: "Админ панели",
    },
    dashboardSubtitles: {
      student:
        "Жаңдоо тилин үйрөнүүнү улантыңыз, баарлашууну машыгыңыз жана прогрессти көзөмөлдөңүз.",
      employer:
        "Вакансияларды жайгаштырыңыз, инклюзивдүү жалдоо инструменттерин колдонуңуз жана жумуштагы байланышты жакшыртыңыз.",
      disability_user:
        "Колдоо куралдарын, ыңгайлуу байланыш функцияларын жана жеке жардамды колдонуңуз.",
      volunteer:
        "Активдүү сурамдарды көрүңүз, адамдарга баарлашууга жардам бериңиз жана коомчулукка салым кошуңуз.",
      admin:
        "Контентти модерациялап, колдонуучуларды текшерип жана платформаны башкарыңыз.",
    },
    open: "Ачуу",
    apply: "Кайрылуу",
    manage: "Башкаруу",
    postVacancy: "Вакансия жайгаштыруу",
    roleLearningGuide: "Жумуш берүүчү үчүн байланыш боюнча колдонмо",
    roleLearningGuideText:
      "Угуусу начар кызматкерлер менен түшүнүктүү жана инклюзивдүү кантип баарлашууну үйрөнүңүз.",
    search: "Издөө",
    filters: "Фильтрлер",
    level: "Деңгээл",
    category: "Категория",
    clear: "Тазалоо",
    uploadCv: "CV жүктөө",
    skills: "Көндүмдөр",
    preferredCommunication: "Каалаган байланыш ыкмасы",
    availability: "Жеткиликтүүлүк",
    email: "Email",
    phone: "Телефон",
    company: "Компания",
    requestSupport: "Жардам сурамдоо",
    startCamera: "Камераны иштетүү",
    startListening: "Угуу",
    translate: "Которуу",
    messageHistory: "Билдирүү тарыхы",
    typeMessage: "Билдирүү жазыңыз...",
    quickActions: "Тез аракеттер",
    trustTitle: "Жеткиликтүүлүк жана инклюзия үчүн түзүлгөн",
    trustText:
      "Купуя, көп тилдүү жана инклюзивдүү байланыш үчүн иштелип чыккан.",
    privacy: "Купуялуулук",
    accessibilityStatement: "Жеткиликтүүлүк билдирүүсү",
    supportEmail: "support@akysign.org",
    footerMission:
      "AkySign окууну, байланышты, колдоону жана мүмкүнчүлүктөрдү бир инклюзивдүү платформага бириктирет.",
    noResults: "Эч нерсе табылган жок",
    adminTitle: "Админ панели",
    adminText:
      "Вакансияларды модерациялап, жардам сурамдарын карап, колдонуучуларды башкарып жана сабактарды чыгарыңыз.",
    recentActivity: "Акыркы активдүүлүк",
    recommendations: "Сунуштар",
    progressGraph: "Прогресс көрсөткүчү",
    systemStatus: "Система абалы",
    live: "Активдүү",
    createMockVacancy: "Вакансия түзүү",
    addLesson: "Сабак кошуу",
    sendNotice: "Билдирүү жөнөтүү",
    saved: "Сакталды",
    invalidForm: "Сураныч, милдеттүү талааларды толтуруңуз.",
    successProfile: "Профиль ийгиликтүү жаңыртылды.",
    authStatus: "Жергиликтүү кирүү аткарылды",
    chatTitle: "Колдоо чаты",
    chatText: "Колдонуучуларды, волонтерлорду жана жумуш берүүчүлөрдү бир чатка бириктириңиз.",
    matchingTitle: "Акылдуу матчинг",
    matchingText: "Максаттарга жана көндүмдөргө жараша волонтерлорду, жумуштарды жана колдоону тандаңыз.",
    analyticsTitle: "Аналитика жана прогресс",
    analyticsText: "Окууну, активдүүлүктү, колдоону жана платформанын катышуусун көзөмөлдөңүз.",
    currentLocation: "Учурдагы жайгашуу",
    detectLocation: "Жайгашууну аныктоо",
    videoCall: "Видео-чалуу",
    startCall: "Чалууну баштоо",
    endCall: "Чалууну токтотуу",
    premium: "Премиум",
    xp: "XP упайлары",
    badges: "Бейдждер",
    levelLabel: "Деңгээл",
    streak: "Серия",
    backendStatus: "Backend даярдыгы",
    aiEngine: "AI кыймылдаткычы",
    authTitle: "Авторизация жана коопсуздук",
    authText: "Чыныгы Google auth, корголгон маршруттар жана backend интеграциясы үчүн даяр.",
    matchingSuggestion: "Сунушталган матч",
    matchNow: "Танда",
    userFlow: "Workflow",
    workflowText: "Кайрылуулар, жардам сурамдары жана волонтердук кабыл алуу бир процесс ичинде.",
    sendMessage: "Жөнөтүү",
    nearbyHelp: "Жакынкы жардам",
    gamification: "Геймификация",
    xpReward: "+10 XP",
    backendMock: "Mock backend туташты",
  },
};

const features = [
  {
    icon: Languages,
    title: "AI Translation",
    text: "Translate speech, text, and sign language in real time through one intelligent interface.",
  },
  {
    icon: BookOpen,
    title: "Learning Platform",
    text: "Learn sign language through structured lessons, guided practice, and progress tracking.",
  },
  {
    icon: Briefcase,
    title: "Jobs & Volunteering",
    text: "Find inclusive opportunities, connect with employers, and support the community.",
  },
  {
    icon: User,
    title: "Personal Profile",
    text: "Manage your role, resume, activity, and learning journey in one place.",
  },
];

const landingRoles = [
  {
    icon: GraduationCap,
    title: "Student",
    text: "Learn sign language step by step, practice communication, and build confidence.",
  },
  {
    icon: Briefcase,
    title: "Employer",
    text: "Hire inclusively, understand accessibility, and create better communication at work.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer",
    text: "Support others, help with communication, and become part of an inclusive network.",
  },
];

const registerRoles = [
  {
    key: "student",
    icon: GraduationCap,
    title: { en: "Student", ru: "Ученик", kg: "Окуучу" },
    text: {
      en: "I want to learn sign language",
      ru: "Я хочу изучать язык жестов",
      kg: "Мен жаңдоо тилин үйрөнгүм келет",
    },
  },
  {
    key: "employer",
    icon: Briefcase,
    title: { en: "Employer", ru: "Работодатель", kg: "Жумуш берүүчү" },
    text: {
      en: "I want to post a job",
      ru: "Я хочу разместить вакансию",
      kg: "Мен вакансия жайгаштыргым келет",
    },
  },
  {
    key: "disability_user",
    icon: Accessibility,
    title: {
      en: "User with disabilities",
      ru: "Пользователь с ограниченными возможностями",
      kg: "Мүмкүнчүлүгү чектелген колдонуучу",
    },
    text: {
      en: "I need accessible tools, support, or easier communication",
      ru: "Мне нужны доступные инструменты, поддержка или более удобное общение",
      kg: "Мага жеткиликтүү куралдар, колдоо же жеңилирээк байланыш керек",
    },
  },
  {
    key: "volunteer",
    icon: HeartHandshake,
    title: { en: "Volunteer", ru: "Волонтер", kg: "Волонтер" },
    text: {
      en: "I need a translator or want to help",
      ru: "Мне нужен переводчик или я хочу помочь",
      kg: "Мага котормочу керек же мен жардам бергим келет",
    },
  },
  {
    key: "admin",
    icon: UserRoundCog,
    title: { en: "Administrator", ru: "Администратор", kg: "Администратор" },
    text: {
      en: "I manage the platform and review workflows",
      ru: "Я управляю платформой и проверяю процессы",
      kg: "Мен платформаны башкарып, процесстерди текшерем",
    },
  },
];

const notificationsSeed = {
  student: [
    { id: 1, type: "lesson", title: "New lesson unlocked", time: "10 min ago" },
    { id: 2, type: "progress", title: "You kept your 5-day streak", time: "1 h ago" },
  ],
  employer: [
    { id: 1, type: "job", title: "3 new applications received", time: "12 min ago" },
    { id: 2, type: "guide", title: "New inclusive hiring guide available", time: "2 h ago" },
  ],
  disability_user: [
    { id: 1, type: "support", title: "Support request updated", time: "8 min ago" },
    { id: 2, type: "tool", title: "New accessibility tool recommended", time: "1 h ago" },
  ],
  volunteer: [
    { id: 1, type: "request", title: "Urgent request near you", time: "5 min ago" },
    { id: 2, type: "community", title: "New volunteer task available", time: "45 min ago" },
  ],
  admin: [
    { id: 1, type: "moderation", title: "New job moderation queue", time: "6 min ago" },
    { id: 2, type: "report", title: "2 new support reports", time: "1 h ago" },
  ],
};

const lessonsSeed = [
  { id: 1, title: "Alphabet and basics", level: "Beginner", category: "Basics" },
  { id: 2, title: "Daily communication", level: "Beginner", category: "Conversation" },
  { id: 3, title: "Workplace gestures", level: "Intermediate", category: "Work" },
  { id: 4, title: "Real-time practice", level: "Advanced", category: "Practice" },
  { id: 5, title: "Emergency communication", level: "Intermediate", category: "Support" },
];

const jobsSeed = [
  { id: 1, title: "Office Assistant", category: "Office", level: "Entry" },
  { id: 2, title: "Support Operator", category: "Support", level: "Mid" },
  { id: 3, title: "Community Coordinator", category: "Community", level: "Mid" },
  { id: 4, title: "Volunteer Translator", category: "Volunteer", level: "Entry" },
  { id: 5, title: "Accessible HR Assistant", category: "Office", level: "Senior" },
];

const usersSeed = [
  { id: 1, name: "Amina", role: "volunteer", skills: ["sign language", "support"], city: "Bishkek" },
  { id: 2, name: "Daniel", role: "volunteer", skills: ["jobs", "sign language"], city: "Osh" },
  { id: 3, name: "Nurai", role: "student", skills: ["basic signs"], city: "Kant" },
  { id: 4, name: "TechHire KG", role: "employer", skills: ["office", "support"], city: "Bishkek" },
];

function usePersistentState(initialState) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...initialState, ...JSON.parse(saved) } : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

function clsx(...args) {
  return args.filter(Boolean).join(" ");
}

function getUIClasses(accessibility) {
  return clsx(
    "min-h-screen bg-[#F8FAFC] text-[#0F172A]",
    accessibility.highContrast && "contrast-125 saturate-125",
    accessibility.largeText && "text-[18px]",
    accessibility.simplifiedMode && "tracking-normal",
    accessibility.biggerButtons && "[&_button]:py-4 [&_button]:px-6 [&_button]:rounded-2xl",
    accessibility.keyboardFocus && "[&_button:focus-visible]:outline [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-slate-900 [&_input:focus-visible]:outline [&_textarea:focus-visible]:outline [&_select:focus-visible]:outline",
    accessibility.reduceMotion && "motion-reduce"
  );
}

function roleRecommendations(roleKey, goals) {
  const base = {
    student: ["Practice alphabet today", "Use translator for repetition", "Complete one beginner lesson"],
    employer: ["Review new applicants", "Read accessibility guide", "Post one inclusive vacancy"],
    disability_user: ["Open translator", "Request nearby support", "Save accessibility settings"],
    volunteer: ["Respond to one active request", "Open support chat", "Join a nearby help task"],
    admin: ["Review moderation queue", "Send one platform notice", "Publish one lesson update"],
  };
  const smart = [...(base[roleKey] || [])];
  if (goals.includes("work")) smart.unshift("Focus on work-related recommendations");
  if (goals.includes("support")) smart.unshift("Support-first recommendations enabled");
  return smart.slice(0, 4);
}

function matchCandidates(roleKey, goals, profileSkills = "") {
  const wanted = `${goals.join(" ")} ${profileSkills}`.toLowerCase();
  return usersSeed
    .filter((u) => u.role !== roleKey)
    .map((u) => ({
      ...u,
      score: u.skills.reduce((acc, skill) => acc + (wanted.includes(skill) ? 2 : 0), 0) + (wanted.includes(u.city.toLowerCase()) ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function Toast({ message, onClose }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-5 right-5 z-[100] rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white shadow-2xl">
      <div className="flex items-center gap-3">
        <Check className="h-4 w-4" />
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 rounded-lg bg-white/10 p-1">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Header({ t, onGetStarted, setLang, lang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#EEF2F7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AkySign" className="h-11 w-auto object-contain" />
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#features" className="text-[16px] font-medium text-slate-600 transition hover:text-slate-900">{t.navFeatures}</a>
          <a href="#roles" className="text-[16px] font-medium text-slate-600 transition hover:text-slate-900">{t.navRoles}</a>
          <a href="#contact" className="text-[16px] font-medium text-slate-600 transition hover:text-slate-900">{t.navContact}</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {["en", "ru", "kg"].map((lng) => (
            <button key={lng} onClick={() => setLang(lng)} className={clsx("rounded-lg px-3 py-2 text-sm font-medium transition", lang === lng ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-white")}>{lng.toUpperCase()}</button>
          ))}
          <button onClick={onGetStarted} className="rounded-xl bg-[#111827] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-slate-800">{t.getStarted}</button>
        </div>

        <button onClick={() => setMobileOpen((v) => !v)} className="rounded-xl border border-slate-200 bg-white p-3 md:hidden">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#features" className="text-slate-700">{t.navFeatures}</a>
            <a href="#roles" className="text-slate-700">{t.navRoles}</a>
            <a href="#contact" className="text-slate-700">{t.navContact}</a>
            <div className="mt-2 flex gap-2">
              {["en", "ru", "kg"].map((lng) => (
                <button key={lng} onClick={() => setLang(lng)} className={clsx("rounded-lg px-3 py-2 text-sm font-medium transition", lang === lng ? "bg-slate-900 text-white" : "border border-slate-200")}>{lng.toUpperCase()}</button>
              ))}
            </div>
            <button onClick={onGetStarted} className="mt-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white">{t.getStarted}</button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ t, onGetStarted }) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-84px)] max-w-7xl flex-col items-center justify-center px-6 text-center md:px-8">
      <div className="max-w-5xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">{t.heroBadge}</div>
        <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-[#0F172A] md:text-7xl lg:text-[86px]">
          {t.heroTitle1}
          <br />
          <span className="text-[#6366F1]">{t.heroTitle2}</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-[24px] md:leading-10">{t.heroText}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button onClick={onGetStarted} className="inline-flex items-center gap-2 rounded-2xl bg-[#111827] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(17,24,39,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800">
            {t.getStarted}
            <ChevronRight className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-50">
            <Play className="h-5 w-5" />
            {t.watchDemo}
          </button>
        </div>
      </div>
    </section>
  );
}

function Features({ t }) {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.featuresBadge}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-6xl">{t.featuresTitle}</h2>
        <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">{t.featuresText}</p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="mb-6 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-900">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Roles({ t }) {
  return (
    <section id="roles" className="border-y border-slate-200 bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.rolesBadge}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-6xl">{t.rolesTitle}</h2>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {landingRoles.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
                <div className="mb-6 inline-flex rounded-2xl bg-[#EDE9FE] p-3 text-[#4F46E5]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA({ t, onGetStarted }) {
  return (
    <section id="contact" className="px-6 pb-16 md:px-8 md:pb-20">
      <div className="mx-auto max-w-6xl rounded-[34px] border border-slate-200 bg-[#111827] px-8 py-16 text-center text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] md:px-14 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">{t.ctaBadge}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-6xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{t.ctaText}</p>
        <div className="mt-10 flex justify-center">
          <button onClick={onGetStarted} className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100">{t.joinPlatform}</button>
        </div>
      </div>
    </section>
  );
}

function TrustFooter({ t }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <img src="/logo.png" alt="AkySign" className="h-10 w-auto object-contain" />
            <p className="mt-4 max-w-xl text-slate-600">{t.footerMission}</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">{t.trustTitle}</div>
            <p className="mt-3 text-slate-600">{t.trustText}</p>
          </div>
          <div className="space-y-3 text-slate-600">
            <div>{t.privacy}</div>
            <div>{t.accessibilityStatement}</div>
            <div>{t.supportEmail}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RegistrationPage({ t, lang, setLang, onContinue, onBack, showToast, onGoogleContinue }) {
  const [selectedRole, setSelectedRole] = useState("student");
  const [form, setForm] = useState({ surname: "", name: "", age: "", email: "", phone: "", company: "" });

  const submit = () => {
    if (!form.surname || !form.name || !form.age) {
      showToast(t.invalidForm);
      return;
    }
    onContinue({ role: selectedRole, form });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="border-b border-slate-200/80 bg-[#EEF2F7]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <img src="/logo.png" alt="AkySign" className="h-11 w-auto object-contain" />
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">{t.back}</button>
            {["en", "ru", "kg"].map((lng) => (
              <button key={lng} onClick={() => setLang(lng)} className={clsx("rounded-lg px-3 py-2 text-sm font-medium transition", lang === lng ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-white")}>{lng.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.registration}</p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-[#0F172A] md:text-7xl">{t.createProfile}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-[22px] md:leading-9">{t.chooseRoleText}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{t.selectRole}</h2>
            <div className="mt-6 grid gap-4">
              {registerRoles.map((item) => {
                const Icon = item.icon;
                const active = selectedRole === item.key;
                return (
                  <button key={item.key} onClick={() => setSelectedRole(item.key)} className={clsx("rounded-[24px] border p-5 text-left transition", active ? "border-slate-900 bg-slate-900 text-white shadow-lg" : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50")}>
                    <div className="mb-3 flex items-center gap-3">
                      <div className={clsx("rounded-2xl p-3", active ? "bg-white/10 text-white" : "bg-slate-100 text-slate-900")}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-semibold">{item.title[lang]}</span>
                    </div>
                    <p className={clsx("text-sm leading-7", active ? "text-slate-200" : "text-slate-600")}>{item.text[lang]}</p>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{t.yourDetails}</h2>
            <div className="mt-6 grid gap-4">
              <input value={form.surname} onChange={(e) => setForm((p) => ({ ...p, surname: e.target.value }))} placeholder={t.surname} className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400" />
              <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder={t.name} className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400" />
              <input value={form.age} onChange={(e) => setForm((p) => ({ ...p, age: e.target.value }))} placeholder={t.age} className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400" />
              <input value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder={t.email} className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400" />
              <input value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder={t.phone} className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400" />
              <input value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} placeholder={t.company} className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-slate-400" />
            </div>
            <div className="mt-6 grid gap-3">
              <button onClick={submit} className="rounded-2xl bg-[#111827] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">{t.continue}</button>
              <button onClick={() => onGoogleContinue(selectedRole)} className="rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">{t.continueGoogle}</button>
              <div className="text-sm text-slate-500">{t.authStatus}</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function OnboardingPage({ t, onFinish, goals, setGoals }) {
  const items = [
    { key: "learning", label: t.learningGoal, icon: BookOpen },
    { key: "communication", label: t.communicationGoal, icon: Languages },
    { key: "work", label: t.workGoal, icon: Briefcase },
    { key: "support", label: t.supportGoal, icon: LifeBuoy },
  ];

  const toggle = (key) => setGoals((prev) => (prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <main className="mx-auto max-w-5xl px-6 py-20 md:px-8">
        <div className="rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.onboardingTitle}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-6xl">{t.onboardingTitle}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{t.onboardingText}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;
              const active = goals.includes(item.key);
              return (
                <button key={item.key} onClick={() => toggle(item.key)} className={clsx("rounded-[24px] border p-6 text-left transition", active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-[#F8FAFC]")}>
                  <div className="mb-4 inline-flex rounded-2xl p-3 bg-white/10"><Icon className="h-6 w-6" /></div>
                  <div className="text-xl font-semibold">{item.label}</div>
                </button>
              );
            })}
          </div>
          <button onClick={onFinish} className="mt-10 rounded-2xl bg-[#111827] px-6 py-4 font-semibold text-white">{t.finishSetup}</button>
        </div>
      </main>
    </div>
  );
}

function AppSidebar({ t, currentPage, setCurrentPage, onBackHome, roleKey }) {
  const items = [
    { key: "dashboard", label: t.dashboard, icon: LayoutDashboard },
    { key: "translator", label: t.translator, icon: Languages },
    { key: "chat", label: t.chat, icon: MessageCircleMore },
    { key: "matching", label: t.matching, icon: Brain },
    { key: "learning", label: t.learning, icon: BookOpen },
    { key: "jobs", label: t.jobs, icon: Briefcase },
    { key: "analytics", label: t.analytics, icon: BarChart3 },
    { key: "notifications", label: t.notifications, icon: Bell },
    { key: "profile", label: t.profile, icon: User },
    { key: "settings", label: t.settings, icon: Settings },
    ...(roleKey === "admin" ? [{ key: "admin", label: t.admin, icon: UserRoundCog }] : []),
  ];

  return (
    <aside className="w-full rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm lg:w-72">
      <div className="mb-6 flex items-center gap-3">
        <img src="/logo.png" alt="AkySign" className="h-10 w-auto object-contain" />
      </div>
      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = currentPage === item.key;
          return (
            <button key={item.key} onClick={() => setCurrentPage(item.key)} className={clsx("flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition", active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50")}>
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6 border-t border-slate-200 pt-6">
        <button onClick={onBackHome} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-700 transition hover:bg-slate-50">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">{t.logout}</span>
        </button>
      </div>
    </aside>
  );
}

function WorkspaceHeader({ t, lang, setLang, onBackHome }) {
  return (
    <header className="border-b border-slate-200/80 bg-[#EEF2F7]/90">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-8">
        <div className="text-sm font-medium text-slate-500">AkySign Workspace</div>
        <div className="flex items-center gap-2">
          {["en", "ru", "kg"].map((lng) => (
            <button key={lng} onClick={() => setLang(lng)} className={clsx("rounded-lg px-3 py-2 text-sm font-medium transition", lang === lng ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-white")}>{lng.toUpperCase()}</button>
          ))}
          <button onClick={onBackHome} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">{t.home}</button>
        </div>
      </div>
    </header>
  );
}

function QuickActions({ t, roleKey, setCurrentPage }) {
  const map = {
    student: [
      { key: "learning", label: "Continue Lesson", icon: BookOpen },
      { key: "translator", label: "Open Translator", icon: Languages },
    ],
    employer: [
      { key: "jobs", label: "Post Vacancy", icon: Briefcase },
      { key: "chat", label: "Open Chat", icon: MessageCircleMore },
    ],
    disability_user: [
      { key: "translator", label: "Open Translator", icon: Languages },
      { key: "matching", label: "Find Help", icon: Brain },
    ],
    volunteer: [
      { key: "matching", label: "See Requests", icon: HandHelping },
      { key: "chat", label: "Open Chat", icon: MessageCircleMore },
    ],
    admin: [
      { key: "admin", label: "Open Admin", icon: UserRoundCog },
      { key: "notifications", label: "Broadcast", icon: Bell },
    ],
  };
  const config = map[roleKey] || map.student;
  return (
    <section className="mb-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.quickActions}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {config.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} onClick={() => setCurrentPage(item.key)} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function MiniGraph({ values }) {
  const max = Math.max(...values, 1);
  return (
    <div className="mt-4 flex h-32 items-end gap-3">
      {values.map((v, i) => (
        <div key={i} className="flex-1 rounded-t-2xl bg-slate-900/90" style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}

function DashboardOverview({ t, roleKey, setCurrentPage, goals, xp, badges }) {
  const statsMap = {
    student: [
      { label: "Current level", value: "Beginner" },
      { label: "Lessons done", value: "08" },
      { label: "Practice streak", value: "5 days" },
    ],
    employer: [
      { label: "Open vacancies", value: "03" },
      { label: "Applications", value: "14" },
      { label: "Team readiness", value: "76%" },
    ],
    disability_user: [
      { label: "Support requests", value: "02" },
      { label: "Saved tools", value: "06" },
      { label: "Accessibility mode", value: "On" },
    ],
    volunteer: [
      { label: "Active requests", value: "07" },
      { label: "People helped", value: "21" },
      { label: "Response rate", value: "92%" },
    ],
    admin: [
      { label: "Pending reviews", value: "11" },
      { label: "Active users", value: "284" },
      { label: "Open reports", value: "04" },
    ],
  };

  const cardsMap = {
    student: [
      { icon: BookOpen, title: "Continue learning", text: "Open your current lesson path and continue from where you stopped.", action: "Open Learning" },
      { icon: Languages, title: "Open translator", text: "Practice real-time text and sign communication in one place.", action: "Open Translator" },
      { icon: BarChart3, title: "Track progress", text: "See your completed modules, streaks, and learning milestones.", action: "View Progress" },
      { icon: Trophy, title: t.gamification, text: `${t.xp}: ${xp}. ${t.badges}: ${badges.length}.`, action: t.xpReward },
    ],
    employer: [
      { icon: Briefcase, title: "Post a vacancy", text: "Create inclusive job posts and reach candidates through the platform.", action: "Create Job" },
      { icon: MessageSquare, title: "Communication tips", text: "Learn how to communicate better with employees with hearing impairments.", action: "Open Guide" },
      { icon: FileText, title: "Candidate requests", text: "Review incoming applications and support requests in one dashboard.", action: "Review Requests" },
      { icon: Lock, title: t.authTitle, text: t.authText, action: t.backendMock },
    ],
    disability_user: [
      { icon: LifeBuoy, title: "Request support", text: "Send a support request and get help from volunteers or the platform team.", action: "Request Help" },
      { icon: Languages, title: "Open translator", text: "Use communication tools designed for easier real-time interaction.", action: "Open Translator" },
      { icon: Accessibility, title: "Personal tools", text: "Access simplified navigation, personalized settings, and accessibility features.", action: "Open Tools" },
      { icon: MapPin, title: t.nearbyHelp, text: "Find volunteers and support closer to your location.", action: t.detectLocation },
    ],
    volunteer: [
      { icon: HandHelping, title: "Active requests", text: "Review current support and communication requests from users.", action: "See Requests" },
      { icon: HeartHandshake, title: "Help someone now", text: "Quickly join a request and provide communication assistance.", action: "Start Helping" },
      { icon: MessageSquare, title: "Community tasks", text: "Take part in volunteer tasks, moderation, and support activities.", action: "Open Tasks" },
      { icon: PhoneCall, title: t.videoCall, text: "Start a direct support session for faster communication.", action: t.startCall },
    ],
    admin: [
      { icon: ClipboardList, title: "Moderate vacancies", text: "Review and publish employer vacancies before they go live.", action: "Review Jobs" },
      { icon: Users, title: "Manage users", text: "Inspect profiles, roles, and activity history in one place.", action: "Open Users" },
      { icon: BookOpen, title: "Publish lessons", text: "Add or edit learning modules for the platform.", action: "Manage Lessons" },
      { icon: Bell, title: "Broadcast notice", text: "Send important updates and announcements to all users.", action: "Send Notice" },
    ],
  };

  const recommendations = roleRecommendations(roleKey, goals);
  const stats = statsMap[roleKey] || statsMap.student;
  const cards = cardsMap[roleKey] || cardsMap.student;

  return (
    <>
      <QuickActions t={t} roleKey={roleKey} setCurrentPage={setCurrentPage} />

      <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.dashboard}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">{t.dashboardTitles[roleKey]}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{t.dashboardSubtitles[roleKey]}</p>

            {goals?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {goals.map((goal) => (
                  <span key={goal} className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1 text-sm text-slate-600">{goal}</span>
                ))}
              </div>
            )}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[22px] border border-slate-200 bg-[#F8FAFC] p-5">
                  <div className="text-sm text-slate-500">{item.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
            <div className="flex items-center gap-2 text-slate-900">
              <BarChart3 className="h-5 w-5" />
              <span className="font-semibold">{t.progressGraph}</span>
            </div>
            <MiniGraph values={[20, 35, 50, 44, 70, 80, 92]} />
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="font-semibold text-slate-900">{t.systemStatus}</div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                <BadgeCheck className="h-4 w-4" />
                {t.live}
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              {t.backendStatus}: <span className="font-semibold text-slate-900">{t.backendMock}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1">
                <div className="mb-5 inline-flex rounded-2xl bg-[#EEF2FF] p-3 text-[#4F46E5]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
                <button className="mt-6 rounded-2xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">{item.action}</button>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <Clock3 className="h-5 w-5" />
              <span className="font-semibold">{t.recentActivity}</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-[#F8FAFC] p-4">Opened lesson dashboard</div>
              <div className="rounded-2xl bg-[#F8FAFC] p-4">Updated accessibility preferences</div>
              <div className="rounded-2xl bg-[#F8FAFC] p-4">Visited translator workspace</div>
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <WandSparkles className="h-5 w-5" />
              <span className="font-semibold">{t.recommendations}</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {recommendations.map((item) => (
                <div key={item} className="rounded-2xl bg-[#F8FAFC] p-4">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TranslatorPage({ t, translatorState, setTranslatorState, addXP, accessibilityState }) {
  const [input, setInput] = useState("");
  const [spoken, setSpoken] = useState("");

  useEffect(() => {
    if (!translatorState.listening) return;
    const timer = setTimeout(() => {
      const text = "Hello, I need support today";
      setSpoken(text);
      setTranslatorState((prev) => ({
        ...prev,
        history: [{ id: Date.now(), source: "speech", content: text }, ...prev.history].slice(0, 8),
      }));
      addXP(10);
    }, 1200);
    return () => clearTimeout(timer);
  }, [translatorState.listening, setTranslatorState, addXP]);

  const addHistory = (message) => {
    setTranslatorState((prev) => ({
      ...prev,
      history: [{ id: Date.now(), ...message }, ...prev.history].slice(0, 8),
    }));
    addXP(10);
  };

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.translator}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.translatorTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.translatorText}</p>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-semibold text-slate-900">Live Input</div>
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#4F46E5]">{t.aiEngine}</span>
          </div>
          <div className="flex h-[320px] items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-white text-slate-400">
            {translatorState.cameraOn ? <Camera className="h-10 w-10" /> : "Video / Camera Preview"}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={() => setTranslatorState((prev) => ({ ...prev, cameraOn: !prev.cameraOn }))} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
              <Video className="h-4 w-4" />
              {t.startCamera}
            </button>
            <button onClick={() => setTranslatorState((prev) => ({ ...prev, listening: !prev.listening }))} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900">
              <Mic className="h-4 w-4" />
              {t.startListening}
            </button>
          </div>

          {spoken && (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Speech → Text: {spoken}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-5">
            <div className="mb-3 flex items-center gap-2 text-slate-900">
              <MessageSquare className="h-5 w-5" />
              <span className="font-semibold">Text Input</span>
            </div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={5} placeholder={t.typeMessage} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
            <button onClick={() => { if (!input.trim()) return; addHistory({ source: "text", content: input.trim() }); setInput(""); }} className="mt-4 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              {t.translate}
            </button>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-5">
            <div className="mb-3 flex items-center gap-2 text-slate-900">
              <Captions className="h-5 w-5" />
              <span className="font-semibold">Output</span>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-600">
              {accessibilityState.captions ? "Captions enabled. " : ""}
              Sign animation / translated text appears here.
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-5">
            <div className="mb-3 font-semibold text-slate-900">{t.messageHistory}</div>
            <div className="space-y-3">
              {translatorState.history.length === 0 ? (
                <div className="text-slate-500">No messages yet.</div>
              ) : (
                translatorState.history.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-xs uppercase tracking-wide text-slate-400">{item.source}</div>
                    <div className="mt-1 text-slate-700">{item.content}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatPage({ t, roleKey, chatState, setChatState, addXP }) {
  const [message, setMessage] = useState("");
  const recipients = {
    student: "Volunteer Support",
    employer: "Candidate Support",
    disability_user: "Volunteer Support",
    volunteer: "User Request",
    admin: "Global Team",
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, { id: Date.now(), from: "You", to: recipients[roleKey], text: message.trim() }],
    }));
    setMessage("");
    addXP(5);
  };

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.chat}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.chatTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.chatText}</p>

      <div className="mt-8 grid gap-6 xl:grid-cols-[300px_1fr]">
        <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
          <div className="font-semibold text-slate-900">Rooms</div>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-white p-4 font-medium text-slate-900">{recipients[roleKey]}</div>
            <div className="rounded-2xl bg-white p-4 font-medium text-slate-900">General Community</div>
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
          <div className="space-y-3">
            {chatState.messages.map((m) => (
              <div key={m.id} className="rounded-2xl bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">{m.from} → {m.to}</div>
                <div className="mt-1 text-slate-600">{m.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.typeMessage} className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
            <button onClick={sendMessage} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
              <Send className="h-4 w-4" />
              {t.sendMessage}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MatchingPage({ t, roleKey, goals, profileState, locationState, detectLocation }) {
  const matches = matchCandidates(roleKey, goals, profileState.skills || "");
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.matching}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.matchingTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.matchingText}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button onClick={detectLocation} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          <LocateFixed className="h-4 w-4" />
          {t.detectLocation}
        </button>
        <span className="rounded-full border border-slate-200 bg-[#F8FAFC] px-4 py-2 text-sm text-slate-600">
          {t.currentLocation}: {locationState.city || "Unknown"}
        </span>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {matches.map((item) => (
          <div key={item.id} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
            <div className="text-xl font-semibold text-slate-900">{item.name}</div>
            <div className="mt-2 text-slate-500">{item.role}</div>
            <div className="mt-2 text-sm text-slate-500">{item.city}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white px-3 py-1 text-xs text-slate-600">{skill}</span>
              ))}
            </div>
            <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">{t.matchNow}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function LearningPage({ t, roleKey, lessons }) {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");

  const filtered = lessons.filter((lesson) => {
    const s = lesson.title.toLowerCase().includes(search.toLowerCase());
    const l = level ? lesson.level === level : true;
    const c = category ? lesson.category === category : true;
    return s && l && c;
  });

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.learning}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.learningTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.learningText}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_200px_200px_auto]">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.search} className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] py-3 pl-11 pr-4 outline-none" />
        </div>
        <select value={level} onChange={(e) => setLevel(e.target.value)} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3">
          <option value="">{t.level}</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3">
          <option value="">{t.category}</option>
          <option>Basics</option>
          <option>Conversation</option>
          <option>Work</option>
          <option>Practice</option>
          <option>Support</option>
        </select>
        <button onClick={() => { setSearch(""); setLevel(""); setCategory(""); }} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700">{t.clear}</button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.length === 0 ? (
          <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5 text-slate-500">{t.noResults}</div>
        ) : (
          filtered.map((lesson, idx) => (
            <div key={lesson.id} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
              <div className="text-sm text-slate-500">Module {idx + 1}</div>
              <div className="mt-2 text-xl font-semibold text-slate-900">{lesson.title}</div>
              <div className="mt-2 flex gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-white px-2 py-1">{lesson.level}</span>
                <span className="rounded-full bg-white px-2 py-1">{lesson.category}</span>
              </div>
              <button className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">{t.open}</button>
            </div>
          ))
        )}
      </div>

      {roleKey === "employer" && (
        <div className="mt-8 rounded-[24px] border border-slate-200 bg-[#EEF2FF] p-5">
          <div className="flex items-center gap-3 text-slate-900">
            <ShieldCheck className="h-5 w-5" />
            <span className="font-semibold">{t.roleLearningGuide}</span>
          </div>
          <p className="mt-3 text-slate-600">{t.roleLearningGuideText}</p>
        </div>
      )}
    </section>
  );
}

function JobsPage({ t, roleKey, jobs, addWorkflow }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = jobs.filter((job) => {
    const s = job.title.toLowerCase().includes(search.toLowerCase());
    const c = category ? job.category === category : true;
    return s && c;
  });

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.jobs}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.jobsTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.jobsText}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_220px_auto]">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.search} className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] py-3 pl-11 pr-4 outline-none" />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3">
          <option value="">{t.category}</option>
          <option>Office</option>
          <option>Support</option>
          <option>Community</option>
          <option>Volunteer</option>
        </select>
        <button onClick={() => { setSearch(""); setCategory(""); }} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700">{t.clear}</button>
      </div>

      <div className="mt-8 space-y-4">
        {filtered.length === 0 ? (
          <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5 text-slate-500">{t.noResults}</div>
        ) : (
          filtered.map((job, idx) => (
            <div key={job.id} className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xl font-semibold text-slate-900">{job.title}</div>
                <div className="mt-1 text-slate-500">Inclusive Hub {idx + 1}</div>
              </div>
              <button onClick={() => addWorkflow(`${roleKey} acted on ${job.title}`)} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                {roleKey === "employer" || roleKey === "admin" ? t.manage : t.apply}
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function NotificationsPage({ t, roleKey, notifications, addNotification }) {
  const items = notificationsSeed[roleKey] || notificationsSeed.student;
  const merged = [...notifications, ...items];
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.notifications}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.notificationsTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.notificationsText}</p>
      <div className="mt-6 flex gap-3">
        <button onClick={() => addNotification({ id: Date.now(), type: "custom", title: "New custom notification", time: "now" })} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">{t.sendNotice}</button>
      </div>
      <div className="mt-8 space-y-4">
        {merged.map((item) => (
          <div key={item.id} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="font-semibold text-slate-900">{item.title}</div>
              <div className="text-sm text-slate-400">{item.time}</div>
            </div>
            <div className="mt-2 text-sm uppercase tracking-wide text-slate-500">{item.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function ProfilePage({ t, userData, roleLabel, profileState, setProfileState, showToast, xp, badges }) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.profile}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.profileTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.profileText}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <InfoCard label={t.surname} value={userData?.form?.surname || "—"} />
        <InfoCard label={t.name} value={userData?.form?.name || "—"} />
        <InfoCard label={t.age} value={userData?.form?.age || "—"} />
        <InfoCard label={t.activeRole} value={roleLabel} />
        <InfoCard label={t.email} value={userData?.form?.email || "—"} />
        <InfoCard label={t.phone} value={userData?.form?.phone || "—"} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
          <div className="mb-4 flex items-center gap-2 text-slate-900">
            <Upload className="h-5 w-5" />
            <span className="font-semibold">{t.uploadCv}</span>
          </div>
          <button onClick={() => setProfileState((prev) => ({ ...prev, cvName: "resume.pdf" }))} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">{t.uploadCv}</button>
          <div className="mt-3 text-slate-500">{profileState.cvName || "No file uploaded"}</div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
          <div className="font-semibold text-slate-900">{t.skills}</div>
          <input value={profileState.skills} onChange={(e) => setProfileState((prev) => ({ ...prev, skills: e.target.value }))} placeholder={t.skills} className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
          <div className="font-semibold text-slate-900">{t.preferredCommunication}</div>
          <input value={profileState.communication} onChange={(e) => setProfileState((prev) => ({ ...prev, communication: e.target.value }))} placeholder={t.preferredCommunication} className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
          <div className="font-semibold text-slate-900">{t.availability}</div>
          <input value={profileState.availability} onChange={(e) => setProfileState((prev) => ({ ...prev, availability: e.target.value }))} placeholder={t.availability} className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <InfoCard label={t.xp} value={String(xp)} />
        <InfoCard label={t.badges} value={String(badges.length)} />
        <InfoCard label={t.levelLabel} value={String(Math.max(1, Math.floor(xp / 50) + 1))} />
      </div>

      <button onClick={() => showToast(t.successProfile)} className="mt-8 rounded-2xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white">{t.saveChanges}</button>
    </section>
  );
}

function SettingsPage({ t, lang, setLang, accessibilityState, setAccessibilityState }) {
  const toggle = (key) => setAccessibilityState((prev) => ({ ...prev, [key]: !prev[key] }));
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.settings}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.settingsTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.settingsText}</p>

      <div className="mt-8 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
        <div className="mb-4 flex items-center gap-2 text-slate-900"><Globe className="h-5 w-5" /><span className="font-semibold">Language</span></div>
        <div className="flex flex-wrap gap-3">
          {["en", "ru", "kg"].map((lng) => (
            <button key={lng} onClick={() => setLang(lng)} className={clsx("rounded-xl px-4 py-2 text-sm font-semibold", lang === lng ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-900")}>{lng.toUpperCase()}</button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
        <div className="mb-4 flex items-center gap-2 text-slate-900"><Accessibility className="h-5 w-5" /><span className="font-semibold">{t.accessibilitySettings}</span></div>
        <div className="space-y-3">
          {[
            ["highContrast", t.highContrast],
            ["largeText", t.largeText],
            ["simplifiedMode", t.simplifiedMode],
            ["captions", t.captions],
            ["reduceMotion", t.reduceMotion],
            ["biggerButtons", t.biggerButtons],
            ["keyboardFocus", t.keyboardFocus],
          ].map(([key, label]) => (
            <button key={key} onClick={() => toggle(key)} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left">
              <span className="font-medium text-slate-900">{label}</span>
              {accessibilityState[key] ? <CheckCircle2 className="h-5 w-5 text-emerald-600" /> : <div className="h-5 w-5 rounded-full border border-slate-300" />}
            </button>
          ))}
        </div>
      </div>

      <button className="mt-8 rounded-2xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white">{t.saveChanges}</button>
    </section>
  );
}

function AnalyticsPage({ t, xp, badges, workflows, notifications }) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.analytics}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.analyticsTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.analyticsText}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <InfoCard label={t.xp} value={String(xp)} />
        <InfoCard label={t.badges} value={String(badges.length)} />
        <InfoCard label={t.notifications} value={String(notifications.length)} />
        <InfoCard label={t.userFlow} value={String(workflows.length)} />
      </div>

      <div className="mt-8 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
        <div className="font-semibold text-slate-900">{t.progressGraph}</div>
        <MiniGraph values={[12, 20, 34, 45, 52, 68, 88]} />
      </div>
    </section>
  );
}

function AdminPage({ t, notifications, addNotification, addLesson, addJob }) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6366F1]">{t.admin}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-900">{t.adminTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{t.adminText}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <button onClick={addJob} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 text-left">
          <Building2 className="h-6 w-6 text-slate-900" />
          <div className="mt-4 text-xl font-semibold text-slate-900">{t.createMockVacancy}</div>
        </button>
        <button onClick={addLesson} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 text-left">
          <BookOpen className="h-6 w-6 text-slate-900" />
          <div className="mt-4 text-xl font-semibold text-slate-900">{t.addLesson}</div>
        </button>
        <button onClick={() => addNotification({ id: Date.now(), type: "admin", title: "Platform notice sent", time: "now" })} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 text-left">
          <Bell className="h-6 w-6 text-slate-900" />
          <div className="mt-4 text-xl font-semibold text-slate-900">{t.sendNotice}</div>
        </button>
      </div>

      <div className="mt-8 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
        <div className="font-semibold text-slate-900">Recent admin notifications</div>
        <div className="mt-4 space-y-3">
          {notifications.slice(0, 5).map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">{item.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCallCard({ t, callState, setCallState }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
      <div className="flex items-center gap-2 text-slate-900">
        <Radio className="h-5 w-5" />
        <span className="font-semibold">{t.videoCall}</span>
      </div>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-slate-600">
        {callState.active ? "Call active (mock WebRTC state)" : "Ready to start a support call"}
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={() => setCallState({ active: true })} className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">{t.startCall}</button>
        <button onClick={() => setCallState({ active: false })} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900">{t.endCall}</button>
      </div>
    </div>
  );
}

function Workspace({
  t,
  lang,
  setLang,
  userData,
  onBackHome,
  onboardingGoals,
  profileState,
  setProfileState,
  notifications,
  addNotification,
  translatorState,
  setTranslatorState,
  accessibilityState,
  setAccessibilityState,
  lessons,
  jobs,
  addLesson,
  addJob,
  showToast,
  xp,
  addXP,
  badges,
  chatState,
  setChatState,
  workflows,
  addWorkflow,
  locationState,
  detectLocation,
  callState,
  setCallState,
}) {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const roleKey = userData?.role || "student";
  const roleLabel = t[roleKey] || roleKey;

  let pageContent = null;
  if (currentPage === "dashboard") {
    pageContent = <DashboardOverview t={t} roleKey={roleKey} setCurrentPage={setCurrentPage} goals={onboardingGoals} xp={xp} badges={badges} />;
  } else if (currentPage === "translator") {
    pageContent = <TranslatorPage t={t} translatorState={translatorState} setTranslatorState={setTranslatorState} addXP={addXP} accessibilityState={accessibilityState} />;
  } else if (currentPage === "chat") {
    pageContent = <ChatPage t={t} roleKey={roleKey} chatState={chatState} setChatState={setChatState} addXP={addXP} />;
  } else if (currentPage === "matching") {
    pageContent = <MatchingPage t={t} roleKey={roleKey} goals={onboardingGoals} profileState={profileState} locationState={locationState} detectLocation={detectLocation} />;
  } else if (currentPage === "learning") {
    pageContent = <LearningPage t={t} roleKey={roleKey} lessons={lessons} />;
  } else if (currentPage === "jobs") {
    pageContent = <JobsPage t={t} roleKey={roleKey} jobs={jobs} addWorkflow={addWorkflow} />;
  } else if (currentPage === "analytics") {
    pageContent = <AnalyticsPage t={t} xp={xp} badges={badges} workflows={workflows} notifications={notifications} />;
  } else if (currentPage === "notifications") {
    pageContent = <NotificationsPage t={t} roleKey={roleKey} notifications={notifications} addNotification={addNotification} />;
  } else if (currentPage === "profile") {
    pageContent = <ProfilePage t={t} userData={userData} roleLabel={roleLabel} profileState={profileState} setProfileState={setProfileState} showToast={showToast} xp={xp} badges={badges} />;
  } else if (currentPage === "settings") {
    pageContent = <SettingsPage t={t} lang={lang} setLang={setLang} accessibilityState={accessibilityState} setAccessibilityState={setAccessibilityState} />;
  } else if (currentPage === "admin" && roleKey === "admin") {
    pageContent = <AdminPage t={t} notifications={notifications} addNotification={addNotification} addLesson={addLesson} addJob={addJob} />;
  }

  return (
    <div className={getUIClasses(accessibilityState)}>
      <WorkspaceHeader t={t} lang={lang} setLang={setLang} onBackHome={onBackHome} />
      <main className="mx-auto max-w-[1600px] px-6 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[288px_1fr]">
          <AppSidebar t={t} currentPage={currentPage} setCurrentPage={setCurrentPage} onBackHome={onBackHome} roleKey={roleKey} />
          <div className="space-y-6">
            {pageContent}
            <VideoCallCard t={t} callState={callState} setCallState={setCallState} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [state, setState] = usePersistentState({
    screen: "landing",
    lang: "en",
    userData: null,
    onboardingGoals: [],
    profileState: { cvName: "", skills: "", communication: "", availability: "" },
    notifications: [],
    translatorState: { cameraOn: false, listening: false, history: [] },
    accessibilityState: {
      highContrast: false,
      largeText: false,
      simplifiedMode: false,
      captions: true,
      reduceMotion: false,
      biggerButtons: false,
      keyboardFocus: true,
    },
    lessons: lessonsSeed,
    jobs: jobsSeed,
    users: usersSeed,
    chatState: {
      messages: [
        { id: 1, from: "Volunteer Support", to: "You", text: "Hello! How can I help you today?" },
      ],
    },
    workflows: [],
    locationState: { city: "" },
    callState: { active: false },
    xp: 20,
    badges: ["Starter"],
    toast: "",
  });

  const t = useMemo(() => translations[state.lang], [state.lang]);

  const setLang = (lang) => setState((prev) => ({ ...prev, lang }));
  const handleGetStarted = () => setState((prev) => ({ ...prev, screen: "register" }));
  const handleBackToLanding = () => setState((prev) => ({ ...prev, screen: "landing" }));
  const handleContinue = (data) => setState((prev) => ({ ...prev, userData: data, screen: "onboarding" }));
  const handleGoogleContinue = (role = "student") => {
    const googleMockUser = {
      role,
      form: {
        surname: "Google",
        name: "User",
        age: "16",
        email: "user@gmail.com",
        phone: "+996 555 00 00 00",
        company: "",
      },
    };
    setState((prev) => ({ ...prev, userData: googleMockUser, screen: "onboarding", toast: t.authStatus }));
  };
  const finishOnboarding = () => setState((prev) => ({ ...prev, screen: "workspace" }));
  const showToast = (toast) => setState((prev) => ({ ...prev, toast }));
  const clearToast = () => setState((prev) => ({ ...prev, toast: "" }));

  const addXP = (amount) => {
    setState((prev) => {
      const nextXP = prev.xp + amount;
      const nextBadges = [...prev.badges];
      if (nextXP >= 50 && !nextBadges.includes("Momentum")) nextBadges.push("Momentum");
      if (nextXP >= 100 && !nextBadges.includes("Champion")) nextBadges.push("Champion");
      return { ...prev, xp: nextXP, badges: nextBadges, toast: t.xpReward };
    });
  };

  const addNotification = (item) => setState((prev) => ({ ...prev, notifications: [item, ...prev.notifications] }));
  const addLesson = () => {
    const lesson = { id: Date.now(), title: "Admin created lesson", level: "Beginner", category: "Basics" };
    setState((prev) => ({ ...prev, lessons: [lesson, ...prev.lessons], toast: t.saved }));
  };
  const addJob = () => {
    const job = { id: Date.now(), title: "Admin mock vacancy", category: "Office", level: "Entry" };
    setState((prev) => ({ ...prev, jobs: [job, ...prev.jobs], toast: t.saved }));
  };
  const addWorkflow = (entry) => setState((prev) => ({ ...prev, workflows: [{ id: Date.now(), entry }, ...prev.workflows], toast: t.saved }));
  const detectLocation = () => setState((prev) => ({ ...prev, locationState: { city: "Bishkek" }, toast: t.saved }));

  if (state.screen === "register") {
    return (
      <>
        <RegistrationPage t={t} lang={state.lang} setLang={setLang} onContinue={handleContinue} onBack={handleBackToLanding} showToast={showToast} onGoogleContinue={handleGoogleContinue} />
        <Toast message={state.toast} onClose={clearToast} />
      </>
    );
  }

  if (state.screen === "onboarding") {
    return (
      <>
        <OnboardingPage t={t} goals={state.onboardingGoals} setGoals={(goals) => setState((prev) => ({ ...prev, onboardingGoals: goals }))} onFinish={finishOnboarding} />
        <Toast message={state.toast} onClose={clearToast} />
      </>
    );
  }

  if (state.screen === "workspace") {
    return (
      <>
        <Workspace
          t={t}
          lang={state.lang}
          setLang={setLang}
          userData={state.userData}
          onboardingGoals={state.onboardingGoals}
          profileState={state.profileState}
          setProfileState={(profileState) => setState((prev) => ({ ...prev, profileState }))}
          notifications={state.notifications}
          addNotification={addNotification}
          translatorState={state.translatorState}
          setTranslatorState={(translatorState) => setState((prev) => ({ ...prev, translatorState }))}
          accessibilityState={state.accessibilityState}
          setAccessibilityState={(accessibilityState) => setState((prev) => ({ ...prev, accessibilityState }))}
          lessons={state.lessons}
          jobs={state.jobs}
          onBackHome={handleBackToLanding}
          addLesson={addLesson}
          addJob={addJob}
          showToast={showToast}
          xp={state.xp}
          addXP={addXP}
          badges={state.badges}
          chatState={state.chatState}
          setChatState={(chatState) => setState((prev) => ({ ...prev, chatState }))}
          workflows={state.workflows}
          addWorkflow={addWorkflow}
          locationState={state.locationState}
          detectLocation={detectLocation}
          callState={state.callState}
          setCallState={(callState) => setState((prev) => ({ ...prev, callState }))}
        />
        <Toast message={state.toast} onClose={clearToast} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Header t={t} onGetStarted={handleGetStarted} setLang={setLang} lang={state.lang} />
      <main>
        <Hero t={t} onGetStarted={handleGetStarted} />
        <Features t={t} />
        <Roles t={t} />
        <CTA t={t} onGetStarted={handleGetStarted} />
      </main>
      <TrustFooter t={t} />
      <Toast message={state.toast} onClose={clearToast} />
    </div>
  );
}
