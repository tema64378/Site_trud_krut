export const groupSlugs: Record<string, string> = {
  'Наблюдательный совет':                              'council',
  'Правление':                                         'board',
  'Руководство Центрального штаба':                    'leadership',
  'Руководители направлений':                          'directions',
  'Аппарат МООО «РСО»':                               'apparat',
  'Комиссарский отдел':                               'commissar',
  'PR-отдел':                                         'pr',
  'Отдел регионального развития':                     'regions',
  'Отдел реализации мероприятий по профобучению':     'education',
  'АНО ДПО «РСО-Развитие»':                          'razvitie',
  'Фонд поддержки движения':                          'fond',
  'Кол-центр':                                        'callcenter',
  'ООО «РСО Инжиниринг»':                            'engineering',
  'РСО Крым':                                         'krym',
};

// Обратный маппинг slug → название группы
export const slugToGroup: Record<string, string> = Object.fromEntries(
  Object.entries(groupSlugs).map(([group, slug]) => [slug, group])
);

// ЦШ = руководство + руководители направлений (объединённая вкладка)
export const hqGroups = ['Руководство Центрального штаба', 'Руководители направлений'];

// Слаги, принадлежащие дочерним организациям
export const subsidiarySlugs = ['razvitie', 'engineering', 'krym', 'fond'];

// Вкладки внутри «Дочерних организаций»
export const subsidiaryTabs = [
  { slug: 'razvitie',    label: 'РСО Развитие',             group: 'АНО ДПО «РСО-Развитие»' },
  { slug: 'engineering', label: 'РСО Инжиниринг',           group: 'ООО «РСО Инжиниринг»' },
  { slug: 'krym',        label: 'РСО Крым',                  group: 'РСО Крым' },
  { slug: 'fond',        label: 'Фонд поддержки движения',  group: 'Фонд поддержки движения' },
];

// Главные вкладки страницы структуры (порядок отображения)
export const mainTabs = [
  { slug: 'council',      label: 'Наблюдательный совет' },
  { slug: 'board',        label: 'Правление' },
  { slug: 'hq',           label: 'ЦШ' },
  { slug: 'apparat',      label: 'Аппарат' },
  { slug: 'commissar',    label: 'Комиссарский отдел' },
  { slug: 'regions',      label: 'Отдел рег. развития' },
  { slug: 'pr',           label: 'PR-отдел' },
  { slug: 'education',    label: 'Отдел профобучения' },
  { slug: 'subsidiaries', label: 'Дочерние организации' },
  { slug: 'callcenter',   label: 'Кол-центр' },
];
