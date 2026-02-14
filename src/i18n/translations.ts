export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'zh' | 'ja' | 'ru' | 'ar' | 'hi' | 'bn';

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    protocol: string;
  };
  gps: {
    title: string;
    tracking: string;
    acquiring: string;
    error: string;
  };
  sos: {
    title: string;
    button: string;
    detecting: string;
    awaiting: string;
  };
  seismic: {
    title: string;
    scanning: string;
    alert: string;
    status: string;
    noEvents: string;
    acknowledge: string;
    lastScan: string;
  };
  environmental: {
    title: string;
    airQuality: string;
    crimeIndex: string;
    radius: string;
    awaiting: string;
    lastScan: string;
    standby: string;
    scanning: string;
    nominal: string;
  };
  skills: {
    title: string;
    category: string;
    requiredTools: string;
    equipButton: string;
    adPlacement: string;
    alertMode: string;
  };
  footer: {
    motto: string;
    privacy: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: 'THE STEWARD',
      subtitle: 'CRISIS NAVIGATOR',
      protocol: 'INDUSTRIAL MIDNIGHT PROTOCOL',
    },
    gps: {
      title: 'GPS SENTINEL',
      tracking: 'TRACKING ACTIVE',
      acquiring: 'ACQUIRING SIGNAL...',
      error: 'GPS ERROR',
    },
    sos: {
      title: 'GLOBAL SOS DIALER',
      button: 'INITIATE SOS CALL',
      detecting: 'DETECTING LOCATION...',
      awaiting: 'AWAITING GPS SIGNAL',
    },
    seismic: {
      title: 'SEISMIC SENTINEL',
      scanning: 'SCANNING USGS DATABASE...',
      alert: 'SEISMIC ALERT',
      status: 'STATUS: ALL CLEAR',
      noEvents: 'No M4.5+ events within 100km',
      acknowledge: 'ACKNOWLEDGE ALERT',
      lastScan: 'LAST SCAN',
    },
    environmental: {
      title: 'ENVIRONMENTAL SENTINEL',
      airQuality: 'AIR QUALITY',
      crimeIndex: 'CRIME INDEX',
      radius: 'RADIUS',
      awaiting: 'AWAITING GPS SIGNAL',
      lastScan: 'LAST SCAN',
      standby: 'STANDBY',
      scanning: 'SCANNING',
      nominal: 'NOMINAL',
    },
    skills: {
      title: 'BANQUET OF SKILLS',
      category: 'CATEGORY',
      requiredTools: 'REQUIRED TOOLS',
      equipButton: 'EQUIP HEARTH',
      adPlacement: 'SOVEREIGN AD PLACEMENT',
      alertMode: 'ALERT MODE: ADS DISABLED FOR OPERATIONAL CLARITY',
    },
    footer: {
      motto: "PIONEER DOESN'T KNOW TO REST. EVERYONE ISN'T SAME.",
      privacy: 'ALL DATA PROCESSING ON-DEVICE | SOVEREIGN PRIVACY PROTOCOL | NO EXTERNAL TRACKING',
    },
  },
  es: {
    header: {
      title: 'EL GUARDIÁN',
      subtitle: 'NAVEGADOR DE CRISIS',
      protocol: 'PROTOCOLO MEDIANOCHE INDUSTRIAL',
    },
    gps: {
      title: 'CENTINELA GPS',
      tracking: 'RASTREO ACTIVO',
      acquiring: 'ADQUIRIENDO SEÑAL...',
      error: 'ERROR GPS',
    },
    sos: {
      title: 'MARCADOR SOS GLOBAL',
      button: 'INICIAR LLAMADA SOS',
      detecting: 'DETECTANDO UBICACIÓN...',
      awaiting: 'ESPERANDO SEÑAL GPS',
    },
    seismic: {
      title: 'CENTINELA SÍSMICO',
      scanning: 'ESCANEANDO BASE DE DATOS USGS...',
      alert: 'ALERTA SÍSMICA',
      status: 'ESTADO: TODO DESPEJADO',
      noEvents: 'Sin eventos M4.5+ en 100km',
      acknowledge: 'RECONOCER ALERTA',
      lastScan: 'ÚLTIMO ESCANEO',
    },
    environmental: {
      title: 'CENTINELA AMBIENTAL',
      airQuality: 'CALIDAD DEL AIRE',
      crimeIndex: 'ÍNDICE DE CRIMINALIDAD',
      radius: 'RADIO',
      awaiting: 'ESPERANDO SEÑAL GPS',
      lastScan: 'ÚLTIMO ESCANEO',
      standby: 'EN ESPERA',
      scanning: 'ESCANEANDO',
      nominal: 'NOMINAL',
    },
    skills: {
      title: 'BIBLIOTECA DE HABILIDADES',
      category: 'CATEGORÍA',
      requiredTools: 'HERRAMIENTAS REQUERIDAS',
      equipButton: 'EQUIPAR HOGAR',
      adPlacement: 'PUBLICIDAD SOBERANA',
      alertMode: 'MODO ALERTA: ANUNCIOS DESACTIVADOS PARA CLARIDAD OPERACIONAL',
    },
    footer: {
      motto: 'EL PIONERO NO SABE DESCANSAR. NO TODOS SON IGUALES.',
      privacy: 'TODO PROCESAMIENTO DE DATOS EN DISPOSITIVO | PROTOCOLO DE PRIVACIDAD SOBERANA | SIN RASTREO EXTERNO',
    },
  },
  fr: {
    header: {
      title: 'LE GARDIEN',
      subtitle: 'NAVIGATEUR DE CRISE',
      protocol: 'PROTOCOLE MINUIT INDUSTRIEL',
    },
    gps: {
      title: 'SENTINELLE GPS',
      tracking: 'SUIVI ACTIF',
      acquiring: 'ACQUISITION DU SIGNAL...',
      error: 'ERREUR GPS',
    },
    sos: {
      title: 'COMPOSEUR SOS GLOBAL',
      button: 'INITIER APPEL SOS',
      detecting: 'DÉTECTION DE LA POSITION...',
      awaiting: 'EN ATTENTE DU SIGNAL GPS',
    },
    seismic: {
      title: 'SENTINELLE SISMIQUE',
      scanning: 'ANALYSE BASE DE DONNÉES USGS...',
      alert: 'ALERTE SISMIQUE',
      status: 'STATUT: TOUT VA BIEN',
      noEvents: 'Aucun événement M4.5+ dans 100km',
      acknowledge: 'RECONNAÎTRE ALERTE',
      lastScan: 'DERNIÈRE ANALYSE',
    },
    environmental: {
      title: 'SENTINELLE ENVIRONNEMENTALE',
      airQuality: 'QUALITÉ DE L\'AIR',
      crimeIndex: 'INDICE DE CRIMINALITÉ',
      radius: 'RAYON',
      awaiting: 'EN ATTENTE DU SIGNAL GPS',
      lastScan: 'DERNIÈRE ANALYSE',
      standby: 'EN VEILLE',
      scanning: 'ANALYSE',
      nominal: 'NOMINAL',
    },
    skills: {
      title: 'BIBLIOTHÈQUE DE COMPÉTENCES',
      category: 'CATÉGORIE',
      requiredTools: 'OUTILS REQUIS',
      equipButton: 'ÉQUIPER FOYER',
      adPlacement: 'PLACEMENT PUBLICITAIRE SOUVERAIN',
      alertMode: 'MODE ALERTE: PUBLICITÉS DÉSACTIVÉES POUR CLARTÉ OPÉRATIONNELLE',
    },
    footer: {
      motto: 'LE PIONNIER NE SAIT PAS SE REPOSER. TOUT LE MONDE N\'EST PAS PAREIL.',
      privacy: 'TRAITEMENT DES DONNÉES SUR APPAREIL | PROTOCOLE DE CONFIDENTIALITÉ SOUVERAINE | AUCUN SUIVI EXTERNE',
    },
  },
  de: {
    header: {
      title: 'DER VERWALTER',
      subtitle: 'KRISEN-NAVIGATOR',
      protocol: 'INDUSTRIELLES MITTERNACHTSPROTOKOLL',
    },
    gps: {
      title: 'GPS-WÄCHTER',
      tracking: 'VERFOLGUNG AKTIV',
      acquiring: 'SIGNAL WIRD ERFASST...',
      error: 'GPS-FEHLER',
    },
    sos: {
      title: 'GLOBALER SOS-ANRUFER',
      button: 'SOS-ANRUF STARTEN',
      detecting: 'STANDORT WIRD ERKANNT...',
      awaiting: 'WARTEN AUF GPS-SIGNAL',
    },
    seismic: {
      title: 'SEISMISCHER WÄCHTER',
      scanning: 'USGS-DATENBANK WIRD GESCANNT...',
      alert: 'SEISMISCHER ALARM',
      status: 'STATUS: ALLES KLAR',
      noEvents: 'Keine M4.5+ Ereignisse innerhalb 100km',
      acknowledge: 'ALARM BESTÄTIGEN',
      lastScan: 'LETZTER SCAN',
    },
    environmental: {
      title: 'UMWELT-WÄCHTER',
      airQuality: 'LUFTQUALITÄT',
      crimeIndex: 'KRIMINALITÄTSINDEX',
      radius: 'RADIUS',
      awaiting: 'WARTEN AUF GPS-SIGNAL',
      lastScan: 'LETZTER SCAN',
      standby: 'BEREITSCHAFT',
      scanning: 'SCANNEN',
      nominal: 'NOMINAL',
    },
    skills: {
      title: 'FÄHIGKEITSBIBLIOTHEK',
      category: 'KATEGORIE',
      requiredTools: 'ERFORDERLICHE WERKZEUGE',
      equipButton: 'HAUS AUSRÜSTEN',
      adPlacement: 'SOUVERÄNE WERBEPLATZIERUNG',
      alertMode: 'ALARMMODUS: WERBUNG DEAKTIVIERT FÜR OPERATIVE KLARHEIT',
    },
    footer: {
      motto: 'DER PIONIER KENNT KEINE RUHE. NICHT JEDER IST GLEICH.',
      privacy: 'ALLE DATENVERARBEITUNG AUF GERÄT | SOUVERÄNES DATENSCHUTZPROTOKOLL | KEINE EXTERNE VERFOLGUNG',
    },
  },
  it: {
    header: {
      title: 'IL CUSTODE',
      subtitle: 'NAVIGATORE DI CRISI',
      protocol: 'PROTOCOLLO MEZZANOTTE INDUSTRIALE',
    },
    gps: {
      title: 'SENTINELLA GPS',
      tracking: 'TRACCIAMENTO ATTIVO',
      acquiring: 'ACQUISIZIONE SEGNALE...',
      error: 'ERRORE GPS',
    },
    sos: {
      title: 'COMBINATORE SOS GLOBALE',
      button: 'AVVIA CHIAMATA SOS',
      detecting: 'RILEVAMENTO POSIZIONE...',
      awaiting: 'IN ATTESA DEL SEGNALE GPS',
    },
    seismic: {
      title: 'SENTINELLA SISMICA',
      scanning: 'SCANSIONE DATABASE USGS...',
      alert: 'ALLERTA SISMICA',
      status: 'STATO: TUTTO OK',
      noEvents: 'Nessun evento M4.5+ entro 100km',
      acknowledge: 'RICONOSCI ALLERTA',
      lastScan: 'ULTIMA SCANSIONE',
    },
    environmental: {
      title: 'SENTINELLA AMBIENTALE',
      airQuality: 'QUALITÀ DELL\'ARIA',
      crimeIndex: 'INDICE DI CRIMINALITÀ',
      radius: 'RAGGIO',
      awaiting: 'IN ATTESA DEL SEGNALE GPS',
      lastScan: 'ULTIMA SCANSIONE',
      standby: 'STANDBY',
      scanning: 'SCANSIONE',
      nominal: 'NOMINALE',
    },
    skills: {
      title: 'BIBLIOTECA DI ABILITÀ',
      category: 'CATEGORIA',
      requiredTools: 'STRUMENTI RICHIESTI',
      equipButton: 'EQUIPAGGIA CASA',
      adPlacement: 'POSIZIONAMENTO PUBBLICITARIO SOVRANO',
      alertMode: 'MODALITÀ ALLERTA: PUBBLICITÀ DISABILITATE PER CHIAREZZA OPERATIVA',
    },
    footer: {
      motto: 'IL PIONIERE NON SA RIPOSARE. NON TUTTI SONO UGUALI.',
      privacy: 'ELABORAZIONE DATI SU DISPOSITIVO | PROTOCOLLO PRIVACY SOVRANA | NESSUN TRACCIAMENTO ESTERNO',
    },
  },
  pt: {
    header: {
      title: 'O GUARDIÃO',
      subtitle: 'NAVEGADOR DE CRISE',
      protocol: 'PROTOCOLO MEIA-NOITE INDUSTRIAL',
    },
    gps: {
      title: 'SENTINELA GPS',
      tracking: 'RASTREAMENTO ATIVO',
      acquiring: 'ADQUIRINDO SINAL...',
      error: 'ERRO GPS',
    },
    sos: {
      title: 'DISCADOR SOS GLOBAL',
      button: 'INICIAR CHAMADA SOS',
      detecting: 'DETECTANDO LOCALIZAÇÃO...',
      awaiting: 'AGUARDANDO SINAL GPS',
    },
    seismic: {
      title: 'SENTINELA SÍSMICO',
      scanning: 'ESCANEANDO BANCO DE DADOS USGS...',
      alert: 'ALERTA SÍSMICO',
      status: 'STATUS: TUDO LIMPO',
      noEvents: 'Nenhum evento M4.5+ em 100km',
      acknowledge: 'RECONHECER ALERTA',
      lastScan: 'ÚLTIMA VARREDURA',
    },
    environmental: {
      title: 'SENTINELA AMBIENTAL',
      airQuality: 'QUALIDADE DO AR',
      crimeIndex: 'ÍNDICE DE CRIMINALIDADE',
      radius: 'RAIO',
      awaiting: 'AGUARDANDO SINAL GPS',
      lastScan: 'ÚLTIMA VARREDURA',
      standby: 'AGUARDANDO',
      scanning: 'ESCANEANDO',
      nominal: 'NOMINAL',
    },
    skills: {
      title: 'BIBLIOTECA DE HABILIDADES',
      category: 'CATEGORIA',
      requiredTools: 'FERRAMENTAS NECESSÁRIAS',
      equipButton: 'EQUIPAR LAR',
      adPlacement: 'POSICIONAMENTO DE ANÚNCIO SOBERANO',
      alertMode: 'MODO ALERTA: ANÚNCIOS DESATIVADOS PARA CLAREZA OPERACIONAL',
    },
    footer: {
      motto: 'O PIONEIRO NÃO SABE DESCANSAR. NEM TODOS SÃO IGUAIS.',
      privacy: 'TODO PROCESSAMENTO DE DADOS NO DISPOSITIVO | PROTOCOLO DE PRIVACIDADE SOBERANA | SEM RASTREAMENTO EXTERNO',
    },
  },
  zh: {
    header: {
      title: '管理员',
      subtitle: '危机导航器',
      protocol: '工业午夜协议',
    },
    gps: {
      title: 'GPS哨兵',
      tracking: '追踪激活',
      acquiring: '获取信号中...',
      error: 'GPS错误',
    },
    sos: {
      title: '全球SOS拨号器',
      button: '启动SOS呼叫',
      detecting: '检测位置中...',
      awaiting: '等待GPS信号',
    },
    seismic: {
      title: '地震哨兵',
      scanning: '扫描USGS数据库...',
      alert: '地震警报',
      status: '状态：一切正常',
      noEvents: '100公里内无M4.5+事件',
      acknowledge: '确认警报',
      lastScan: '上次扫描',
    },
    environmental: {
      title: '环境哨兵',
      airQuality: '空气质量',
      crimeIndex: '犯罪指数',
      radius: '半径',
      awaiting: '等待GPS信号',
      lastScan: '上次扫描',
      standby: '待机',
      scanning: '扫描中',
      nominal: '正常',
    },
    skills: {
      title: '技能库',
      category: '类别',
      requiredTools: '所需工具',
      equipButton: '装备之家',
      adPlacement: '主权广告位',
      alertMode: '警报模式：为操作清晰度禁用广告',
    },
    footer: {
      motto: '先锋不知休息。每个人都不一样。',
      privacy: '所有数据在设备上处理 | 主权隐私协议 | 无外部追踪',
    },
  },
  ja: {
    header: {
      title: 'スチュワード',
      subtitle: '危機ナビゲーター',
      protocol: '産業ミッドナイトプロトコル',
    },
    gps: {
      title: 'GPS センチネル',
      tracking: '追跡アクティブ',
      acquiring: '信号取得中...',
      error: 'GPSエラー',
    },
    sos: {
      title: 'グローバルSOSダイヤラー',
      button: 'SOS通話開始',
      detecting: '位置検出中...',
      awaiting: 'GPS信号待機中',
    },
    seismic: {
      title: '地震センチネル',
      scanning: 'USGSデータベーススキャン中...',
      alert: '地震警報',
      status: 'ステータス：異常なし',
      noEvents: '100km以内にM4.5+イベントなし',
      acknowledge: '警報確認',
      lastScan: '最終スキャン',
    },
    environmental: {
      title: '環境センチネル',
      airQuality: '空気質',
      crimeIndex: '犯罪指数',
      radius: '半径',
      awaiting: 'GPS信号待機中',
      lastScan: '最終スキャン',
      standby: 'スタンバイ',
      scanning: 'スキャン中',
      nominal: '正常',
    },
    skills: {
      title: 'スキルライブラリ',
      category: 'カテゴリー',
      requiredTools: '必要なツール',
      equipButton: 'ホーム装備',
      adPlacement: '主権広告配置',
      alertMode: 'アラートモード：運用の明確性のため広告無効',
    },
    footer: {
      motto: '開拓者は休むことを知らない。誰もが同じではない。',
      privacy: 'すべてのデータ処理はデバイス上 | 主権プライバシープロトコル | 外部追跡なし',
    },
  },
  ru: {
    header: {
      title: 'УПРАВЛЯЮЩИЙ',
      subtitle: 'НАВИГАТОР КРИЗИСОВ',
      protocol: 'ПРОМЫШЛЕННЫЙ ПОЛУНОЧНЫЙ ПРОТОКОЛ',
    },
    gps: {
      title: 'GPS СТРАЖ',
      tracking: 'ОТСЛЕЖИВАНИЕ АКТИВНО',
      acquiring: 'ПОЛУЧЕНИЕ СИГНАЛА...',
      error: 'ОШИБКА GPS',
    },
    sos: {
      title: 'ГЛОБАЛЬНЫЙ SOS НАБИРАТЕЛЬ',
      button: 'ИНИЦИИРОВАТЬ SOS ЗВОНОК',
      detecting: 'ОПРЕДЕЛЕНИЕ МЕСТОПОЛОЖЕНИЯ...',
      awaiting: 'ОЖИДАНИЕ GPS СИГНАЛА',
    },
    seismic: {
      title: 'СЕЙСМИЧЕСКИЙ СТРАЖ',
      scanning: 'СКАНИРОВАНИЕ БАЗЫ ДАННЫХ USGS...',
      alert: 'СЕЙСМИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ',
      status: 'СТАТУС: ВСЕ ЧИСТО',
      noEvents: 'Нет событий M4.5+ в пределах 100км',
      acknowledge: 'ПОДТВЕРДИТЬ ОПОВЕЩЕНИЕ',
      lastScan: 'ПОСЛЕДНЕЕ СКАНИРОВАНИЕ',
    },
    environmental: {
      title: 'ЭКОЛОГИЧЕСКИЙ СТРАЖ',
      airQuality: 'КАЧЕСТВО ВОЗДУХА',
      crimeIndex: 'ИНДЕКС ПРЕСТУПНОСТИ',
      radius: 'РАДИУС',
      awaiting: 'ОЖИДАНИЕ GPS СИГНАЛА',
      lastScan: 'ПОСЛЕДНЕЕ СКАНИРОВАНИЕ',
      standby: 'ОЖИДАНИЕ',
      scanning: 'СКАНИРОВАНИЕ',
      nominal: 'НОРМАЛЬНО',
    },
    skills: {
      title: 'БИБЛИОТЕКА НАВЫКОВ',
      category: 'КАТЕГОРИЯ',
      requiredTools: 'НЕОБХОДИМЫЕ ИНСТРУМЕНТЫ',
      equipButton: 'ОБОРУДОВАТЬ ДОМ',
      adPlacement: 'СУВЕРЕННОЕ РАЗМЕЩЕНИЕ РЕКЛАМЫ',
      alertMode: 'РЕЖИМ ТРЕВОГИ: РЕКЛАМА ОТКЛЮЧЕНА ДЛЯ ОПЕРАТИВНОЙ ЯСНОСТИ',
    },
    footer: {
      motto: 'ПЕРВОПРОХОДЕЦ НЕ ЗНАЕТ ОТДЫХА. НЕ ВСЕ ОДИНАКОВЫ.',
      privacy: 'ВСЯ ОБРАБОТКА ДАННЫХ НА УСТРОЙСТВЕ | СУВЕРЕННЫЙ ПРОТОКОЛ КОНФИДЕНЦИАЛЬНОСТИ | БЕЗ ВНЕШНЕГО ОТСЛЕЖИВАНИЯ',
    },
  },
  ar: {
    header: {
      title: 'الوصي',
      subtitle: 'ملاح الأزمات',
      protocol: 'بروتوكول منتصف الليل الصناعي',
    },
    gps: {
      title: 'حارس GPS',
      tracking: 'التتبع نشط',
      acquiring: 'الحصول على الإشارة...',
      error: 'خطأ GPS',
    },
    sos: {
      title: 'طالب SOS العالمي',
      button: 'بدء مكالمة SOS',
      detecting: 'اكتشاف الموقع...',
      awaiting: 'في انتظار إشارة GPS',
    },
    seismic: {
      title: 'الحارس الزلزالي',
      scanning: 'فحص قاعدة بيانات USGS...',
      alert: 'تنبيه زلزالي',
      status: 'الحالة: كل شيء واضح',
      noEvents: 'لا توجد أحداث M4.5+ ضمن 100 كم',
      acknowledge: 'الإقرار بالتنبيه',
      lastScan: 'آخر فحص',
    },
    environmental: {
      title: 'الحارس البيئي',
      airQuality: 'جودة الهواء',
      crimeIndex: 'مؤشر الجريمة',
      radius: 'نصف القطر',
      awaiting: 'في انتظار إشارة GPS',
      lastScan: 'آخر فحص',
      standby: 'استعداد',
      scanning: 'فحص',
      nominal: 'عادي',
    },
    skills: {
      title: 'مكتبة المهارات',
      category: 'الفئة',
      requiredTools: 'الأدوات المطلوبة',
      equipButton: 'تجهيز المنزل',
      adPlacement: 'موضع الإعلان السيادي',
      alertMode: 'وضع التنبيه: تم تعطيل الإعلانات من أجل الوضوح التشغيلي',
    },
    footer: {
      motto: 'الرائد لا يعرف الراحة. ليس الجميع متشابهين.',
      privacy: 'جميع معالجة البيانات على الجهاز | بروتوكول الخصوصية السيادي | لا يوجد تتبع خارجي',
    },
  },
  hi: {
    header: {
      title: 'प्रबंधक',
      subtitle: 'संकट नेविगेटर',
      protocol: 'औद्योगिक मध्यरात्रि प्रोटोकॉल',
    },
    gps: {
      title: 'GPS प्रहरी',
      tracking: 'ट्रैकिंग सक्रिय',
      acquiring: 'सिग्नल प्राप्त कर रहे हैं...',
      error: 'GPS त्रुटि',
    },
    sos: {
      title: 'वैश्विक SOS डायलर',
      button: 'SOS कॉल शुरू करें',
      detecting: 'स्थान का पता लगाया जा रहा है...',
      awaiting: 'GPS सिग्नल की प्रतीक्षा में',
    },
    seismic: {
      title: 'भूकंपीय प्रहरी',
      scanning: 'USGS डेटाबेस स्कैन कर रहे हैं...',
      alert: 'भूकंपीय अलर्ट',
      status: 'स्थिति: सब ठीक है',
      noEvents: '100 किमी के भीतर कोई M4.5+ घटना नहीं',
      acknowledge: 'अलर्ट स्वीकार करें',
      lastScan: 'अंतिम स्कैन',
    },
    environmental: {
      title: 'पर्यावरणीय प्रहरी',
      airQuality: 'वायु गुणवत्ता',
      crimeIndex: 'अपराध सूचकांक',
      radius: 'त्रिज्या',
      awaiting: 'GPS सिग्नल की प्रतीक्षा में',
      lastScan: 'अंतिम स्कैन',
      standby: 'स्टैंडबाय',
      scanning: 'स्कैन कर रहे हैं',
      nominal: 'सामान्य',
    },
    skills: {
      title: 'कौशल पुस्तकालय',
      category: 'श्रेणी',
      requiredTools: 'आवश्यक उपकरण',
      equipButton: 'घर को सुसज्जित करें',
      adPlacement: 'संप्रभु विज्ञापन स्थान',
      alertMode: 'अलर्ट मोड: संचालन स्पष्टता के लिए विज्ञापन अक्षम',
    },
    footer: {
      motto: 'अग्रणी आराम नहीं जानता। सब एक जैसे नहीं हैं।',
      privacy: 'सभी डेटा प्रोसेसिंग डिवाइस पर | संप्रभु गोपनीयता प्रोटोकॉल | कोई बाहरी ट्रैकिंग नहीं',
    },
  },
  bn: {
    header: {
      title: 'দ্য স্টুয়ার্ড',
      subtitle: 'সংকট নেভিগেটর',
      protocol: 'ইন্ডাস্ট্রিয়াল মিডনাইট প্রোটোকল',
    },
    gps: {
      title: 'GPS সেন্টিনেল',
      tracking: 'ট্র্যাকিং সক্রিয়',
      acquiring: 'সিগন্যাল গ্রহণ করছে...',
      error: 'GPS ত্রুটি',
    },
    sos: {
      title: 'গ্লোবাল SOS ডায়ালার',
      button: 'SOS কল শুরু করুন',
      detecting: 'অবস্থান সনাক্ত করছে...',
      awaiting: 'GPS সিগন্যালের অপেক্ষায়',
    },
    seismic: {
      title: 'ভূকম্পীয় সেন্টিনেল',
      scanning: 'USGS ডাটাবেস স্ক্যান করছে...',
      alert: 'ভূকম্পীয় সতর্কতা',
      status: 'স্ট্যাটাস: সব পরিষ্কার',
      noEvents: '১০০ কিমির মধ্যে কোনো M4.5+ ঘটনা নেই',
      acknowledge: 'সতর্কতা স্বীকার করুন',
      lastScan: 'শেষ স্ক্যান',
    },
    environmental: {
      title: 'পরিবেশগত সেন্টিনেল',
      airQuality: 'বায়ুর মান',
      crimeIndex: 'অপরাধ সূচক',
      radius: 'ব্যাসার্ধ',
      awaiting: 'GPS সিগন্যালের অপেক্ষায়',
      lastScan: 'শেষ স্ক্যান',
      standby: 'স্ট্যান্ডবাই',
      scanning: 'স্ক্যান করছে',
      nominal: 'স্বাভাবিক',
    },
    skills: {
      title: 'দক্ষতা লাইব্রেরি',
      category: 'বিভাগ',
      requiredTools: 'প্রয়োজনীয় সরঞ্জাম',
      equipButton: 'বাড়ি সজ্জিত করুন',
      adPlacement: 'সার্বভৌম বিজ্ঞাপন প্লেসমেন্ট',
      alertMode: 'সতর্কতা মোড: অপারেশনাল স্পষ্টতার জন্য বিজ্ঞাপন নিষ্ক্রিয়',
    },
    footer: {
      motto: 'অগ্রদূত বিশ্রাম জানে না। সবাই এক নয়।',
      privacy: 'সমস্ত ডেটা প্রসেসিং ডিভাইসে | সার্বভৌম গোপনীয়তা প্রোটোকল | কোনো বাহ্যিক ট্র্যাকিং নেই',
    },
  },
};

export const getLanguageFromCountry = (countryCode: string): Language => {
  const languageMap: Record<string, Language> = {
    BD: 'bn',
    US: 'en',
    GB: 'en',
    IN: 'hi',
    AU: 'en',
    CA: 'en',
    CN: 'zh',
    JP: 'ja',
    DE: 'de',
    FR: 'fr',
    IT: 'it',
    ES: 'es',
    BR: 'pt',
    MX: 'es',
    RU: 'ru',
    ZA: 'en',
    AE: 'ar',
    SA: 'ar',
    PK: 'ar',
    NG: 'en',
  };

  return languageMap[countryCode] || 'en';
};
