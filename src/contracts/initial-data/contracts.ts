import {
  ContractConditionStatusEnum,
  ContractStatusEnum,
  TContract,
} from '../types/enums';

export const contracts: TContract[] = [
  {
    contractId: 1,
    contractNumber: 'ТРКБ-23411 от 11.10.2020',
    contractStatus: ContractStatusEnum.Active,
    years: [2023, 2022, 2021, 2020],
    type: 'paper',
    contractConditions: [
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
          {
            id: '33284',
            name: 'ФГУП Гостиница Золотое кольцо УД Президента РФ',
          },
        ],
        specialConditions:
          'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
          'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
          'Подробнее: https://www.travelline.ru/contacts/',
        status: ContractConditionStatusEnum.Active,
      },
    ],
  },
  {
    contractId: 2,
    contractNumber: 'ТРКБ-23322 от 22.05.2021',
    contractStatus: ContractStatusEnum.ContractDataConfirmWaiting,
    years: [2023, 2022, 2021],
    type: 'paper',
    contractConditions: [
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
    ],
  },
  {
    contractId: 3,
    contractNumber: 'ТРКБ-23233 от 33.08.2019',
    contractStatus: ContractStatusEnum.Suspended,
    years: [2022, 2021, 2020, 2019],
    type: 'paper',
    contractConditions: [],
  },
  {
    contractId: 4,
    contractNumber: 'ТРКБ-23044 от 44.11.2022',
    contractStatus: ContractStatusEnum.Stay,
    years: [2023],
    type: 'paper',
    contractConditions: [
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
        status: ContractConditionStatusEnum.AcceptWaiting,
      },
    ],
  },
  {
    contractId: 41,
    contractNumber: 'ТРКБ-230441 от 441.11.2022',
    contractStatus: ContractStatusEnum.Stay,
    years: [2023],
    type: 'paper',
    contractConditions: [
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
    ],
  },
  {
    contractId: 5,
    contractNumber: 'ТРКБ-23055 от 55.11.2023',
    contractStatus: ContractStatusEnum.Active,
    years: [],
    type: 'offer',
    contractConditions: [
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
          {
            id: '33284',
            name: 'ФГУП Гостиница Золотое кольцо УД Президента РФ',
          },
        ],
        specialConditions:
          'ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» является оператором по обработке персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ, а также процессором по обработке персональных данных по Регламенту ЕС 2016/679 от 27 апреля 2016 г. При использовании TravelLine: Platform ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС» действует по поручению оператора, Средства/Объекта размещения, в соответствии с п. 3 ст. 6 Федерального закона РФ "О персональных данных" от 27.07.2006 N 152-ФЗ.\n' +
          'Если у вас появились предложения или вопросы по нашей Политике конфиденциальности, пишите по электронной почте privacy@travelline.ru или по адресу Российская Федерация, 424003, Республика Марий Эл, город Йошкар-Ола, Ленинский проспект 56А, ООО «ТРЭВЕЛ ЛАЙН СИСТЕМС».\n' +
          'Подробнее: https://www.travelline.ru/contacts/',
        status: ContractConditionStatusEnum.Active,
      },
    ],
  },
  {
    contractId: 6,
    contractNumber: 'ТРКБ-23066 от 66.01.2023',
    contractStatus: ContractStatusEnum.AcceptWaiting,
    years: [2023],
    type: 'offer',
    contractConditions: [
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
    ],
  },
  {
    contractId: 7,
    contractNumber: 'ТРКБ-23077 от 77.01.2023',
    contractStatus: ContractStatusEnum.AcceptDeclined,
    years: [2023],
    type: 'offer',
    contractConditions: [
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
    ],
  },
  {
    contractId: 8,
    contractNumber: 'ТРКБ-23088 от 88.01.2023',
    contractStatus: ContractStatusEnum.Terminated,
    years: [2023],
    type: 'offer',
    contractConditions: [],
  },
];
