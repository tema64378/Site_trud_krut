export const groupSlugs: Record<string, string> = {
  'Руководство Центрального штаба':                   'leadership',
  'Аппарат МООО «РСО»':                               'apparat',
  'Комиссарский отдел':                               'commissar',
  'PR-отдел':                                         'pr',
  'Отдел регионального взаимодействия':               'regions',
  'Отдел реализации мероприятий по профобучению':     'education',
  'Руководители направлений':                         'directions',
  'АНО ДПО «РСО-Развитие»':                          'razvitie',
  'Фонд поддержки движения':                          'fond',
  'Кол-центр':                                        'callcenter',
  'ООО «РСО Инжиниринг»':                             'engineering',
};

// Обратный маппинг slug → название группы
export const slugToGroup: Record<string, string> = Object.fromEntries(
  Object.entries(groupSlugs).map(([group, slug]) => [slug, group])
);
