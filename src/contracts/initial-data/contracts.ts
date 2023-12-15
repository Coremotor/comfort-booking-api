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
    contractStatus: ContractStatusEnum.ContractDataConfirmWaiting,
    years: [2023, 2022, 2021],
    type: 'paper',
  },
  {
    contractId: 3,
    contractNumber: 'ТРКБ-23233 от 33.08.2019',
    contractStatus: ContractStatusEnum.TariffAcceptWaiting,
    years: [2022, 2021, 2020, 2019],
    type: 'paper',
  },
  {
    contractId: 4,
    contractNumber: 'ТРКБ-23044 от 44.11.2022',
    contractStatus: ContractStatusEnum.Stay,
    years: [2023],
    type: 'paper',
  },
  {
    contractId: 5,
    contractNumber: 'ТРКБ-23055 от 55.11.2023',
    contractStatus: ContractStatusEnum.Active,
    years: [],
    type: 'offer',
  },
  {
    contractId: 6,
    contractNumber: 'ТРКБ-23066 от 66.01.2023',
    contractStatus: ContractStatusEnum.AcceptWaiting,
    years: [2023],
    type: 'offer',
  },
  {
    contractId: 7,
    contractNumber: 'ТРКБ-23077 от 77.01.2023',
    contractStatus: ContractStatusEnum.AcceptDeclined,
    years: [2023],
    type: 'offer',
  },
];
