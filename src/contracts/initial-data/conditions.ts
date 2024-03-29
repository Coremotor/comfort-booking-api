import { ContractConditionStatusEnum, TCondition } from '../types/enums';

export const conditions: TCondition[] = [
  {
    acceptDate: new Date().toLocaleDateString('ru-RU'),
    startDate: new Date().toLocaleDateString('ru-RU'),
    endDate: new Date().toLocaleDateString('ru-RU'),
    id: 1,
    name: 'Самый лучший тариф от TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС»',
    provider: [
      { id: '13264', name: 'Былинкино' },
      { id: '83264', name: 'Пылинкино' },
      { id: '1864', name: 'ФГУП Гостиница Академическая в Москве' },
      { id: '33284', name: 'ФГУП Гостиница Золотое кольцо УД Президента РФ' },
    ],
    specialConditions:
      'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
      'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
      'Подробнее: https://www.travelline.ru/contacts/',
    status: ContractConditionStatusEnum.Active,
  },
  {
    acceptDate: new Date().toLocaleDateString('ru-RU'),
    startDate: new Date().toLocaleDateString('ru-RU'),
    endDate: new Date().toLocaleDateString('ru-RU'),
    id: 2,
    name: 'Лучший тариф 4-54',
    provider: [{ id: '13264', name: 'Былинкино' }],
    specialConditions:
      'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
      'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
      'Подробнее: https://www.travelline.ru/contacts/',
    status: ContractConditionStatusEnum.AcceptingExpired,
  },
  {
    acceptDate: new Date().toLocaleDateString('ru-RU'),
    startDate: new Date().toLocaleDateString('ru-RU'),
    endDate: new Date().toLocaleDateString('ru-RU'),
    id: 3,
    name: 'Специальный 2,3%, с СБП 1,5%, оплата в кредит 1%, оплата частями 5,4%',
    provider: [{ id: '13264', name: 'Былинкино' }],
    specialConditions:
      'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
      'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
      'Подробнее: https://www.travelline.ru/contacts/',
    status: ContractConditionStatusEnum.AcceptWaiting,
  },
  {
    acceptDate: new Date().toLocaleDateString('ru-RU'),
    startDate: new Date().toLocaleDateString('ru-RU'),
    endDate: new Date().toLocaleDateString('ru-RU'),
    id: 4,
    name: 'Тариф',
    provider: [{ id: '13264', name: 'Былинкино' }],
    specialConditions:
      'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
      'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
      'Подробнее: https://www.travelline.ru/contacts/',
    status: ContractConditionStatusEnum.ClientDeclined,
  },
  {
    acceptDate: new Date().toLocaleDateString('ru-RU'),
    startDate: new Date().toLocaleDateString('ru-RU'),
    endDate: new Date().toLocaleDateString('ru-RU'),
    id: 5,
    name: 'Самый тариф',
    provider: [{ id: '13264', name: 'Былинкино' }],
    specialConditions:
      'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
      'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
      'Подробнее: https://www.travelline.ru/contacts/',
    status: ContractConditionStatusEnum.Expired,
  },
  {
    acceptDate: new Date().toLocaleDateString('ru-RU'),
    startDate: new Date().toLocaleDateString('ru-RU'),
    endDate: new Date().toLocaleDateString('ru-RU'),
    id: 6,
    name: 'Самый тариф',
    provider: [{ id: '13264', name: 'Былинкино' }],
    specialConditions:
      'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
      'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
      'Подробнее: https://www.travelline.ru/contacts/',
    status: ContractConditionStatusEnum.BeginWaiting,
  },
];
