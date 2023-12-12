import { ContractStatusEnum } from '../types/enums';

export const contracts = [
  {
    contractId: 1,
    contractNumber: 'ТРКБ-23411 от 11.10.2020',
    contractStatus: ContractStatusEnum.Active,
    years: [2023, 2022, 2021, 2020],
    type: 'paper',
  },
  {
    contractId: 2,
    contractNumber: 'ТРКБ-23322 от 22.05.2021',
    contractStatus: ContractStatusEnum.Terminated,
    years: [2023, 2022, 2021],
    type: 'paper',
  },
  {
    contractId: 3,
    contractNumber: 'ТРКБ-23233 от 33.08.2019',
    contractStatus: ContractStatusEnum.AcceptWaiting,
    years: [2022, 2021, 2020, 2019],
    type: 'paper',
  },
  {
    contractId: 3.1,
    contractNumber: 'ТРКБ-23233 от 33.1.08.2019',
    contractStatus: ContractStatusEnum.AcceptWaiting,
    years: [2022, 2021, 2020, 2019],
    type: 'offer',
  },
  {
    contractId: 4,
    contractNumber: 'ТРКБ-23044 от 44.11.2022',
    contractStatus: ContractStatusEnum.AcceptDeclined,
    years: [2023],
    type: 'paper',
  },
  {
    contractId: 5,
    contractNumber: 'ТРКБ-23055 от 55.11.2023',
    contractStatus: ContractStatusEnum.Stay,
    years: [],
    type: 'paper',
  },
  {
    contractId: 6,
    contractNumber: 'ТРКБ-23066 от 66.01.2023',
    contractStatus: ContractStatusEnum.Suspended,
    years: [2023],
    type: 'paper',
  },
  {
    contractId: 7,
    contractNumber: 'ТРКБ-23077 от 77.01.2023',
    contractStatus: ContractStatusEnum.ContractDataConfirmWaiting,
    years: [2023],
    type: 'paper',
  },
  {
    contractId: 8,
    contractNumber: 'ТРКБ-23088 от 88.01.2023',
    contractStatus: ContractStatusEnum.TariffAcceptWaiting,
    years: [2023],
    type: 'paper',
  },
  // {
  //   contractId: 8,
  //   contractNumber: 'ТРКБ-23088 от 88.01.2023',
  //   contractStatus: ContractStatusEnum.ContractDataConfirmed,
  //   years: [2023],
  //   type: 'paper',
  // tariffs: [
  //
  // ]
  // },

  // {
  //   contractId: 11,
  //   contractNumber: 'ТРКБ-23425 от 23.10.2020',
  //   contractStatus: ContractStatusEnum.Active,
  //   years: [2023, 2022, 2021, 2020],
  //   type: 'offer',
  // },
  // {
  //   contractId: 22,
  //   contractNumber: 'ТРКБ-23322 от 06.05.2021',
  //   contractStatus: ContractStatusEnum.Terminated,
  //   years: [2023, 2022, 2021],
  //   type: 'offer',
  // },
  // {
  //   contractId: 33,
  //   contractNumber: 'ТРКБ-23221 от 12.08.2019',
  //   contractStatus: ContractStatusEnum.AcceptWaiting,
  //   years: [2022, 2021, 2020, 2019],
  //   type: 'offer',
  // },
  // {
  //   contractId: 44,
  //   contractNumber: 'ТРКБ-23011 от 13.11.2022',
  //   contractStatus: ContractStatusEnum.AcceptDeclined,
  //   years: [2023],
  //   type: 'offer',
  // },
  // {
  //   contractId: 55,
  //   contractNumber: 'ТРКБ-23033 от 13.11.2023',
  //   contractStatus: ContractStatusEnum.Stay,
  //   years: [],
  //   type: 'offer',
  // },
  // {
  //   contractId: 66,
  //   contractNumber: 'ТРКБ-23066 от 11.01.2023',
  //   contractStatus: ContractStatusEnum.Suspended,
  //   years: [2023],
  //   type: 'offer',
  // },
];
