import { ContractStatusEnum } from '../types/enums';

export const contracts = [
  {
    contractId: 1,
    contractNumber: 'ТРКБ-23425 от 23.10.2020',
    contractStatus: ContractStatusEnum.Active,
    years: [2023, 2022, 2021, 2020],
  },
  {
    contractId: 2,
    contractNumber: 'ТРКБ-23322 от 06.05.2021',
    contractStatus: ContractStatusEnum.Terminated,
    years: [2023, 2022, 2021],
  },
  {
    contractId: 3,
    contractNumber: 'ТРКБ-23221 от 12.08.2019',
    contractStatus: ContractStatusEnum.AcceptWaiting,
    years: [2022, 2021, 2020, 2019],
  },
  {
    contractId: 4,
    contractNumber: 'ТРКБ-23011 от 13.11.2022',
    contractStatus: ContractStatusEnum.AcceptDeclined,
    years: [2023],
  },
  {
    contractId: 5,
    contractNumber: 'ТРКБ-23033 от 13.11.2023',
    contractStatus: ContractStatusEnum.Stay,
    years: [],
  },
];
