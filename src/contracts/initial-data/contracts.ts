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
    contractConditions: [{ id: 1, status: ContractConditionStatusEnum.Active }],
  },
  {
    contractId: 2,
    contractNumber: 'ТРКБ-23322 от 22.05.2021',
    contractStatus: ContractStatusEnum.ContractDataConfirmWaiting,
    years: [2023, 2022, 2021],
    type: 'paper',
    contractConditions: [
      { id: 1, status: ContractConditionStatusEnum.AcceptWaiting },
    ],
  },
  {
    contractId: 3,
    contractNumber: 'ТРКБ-23233 от 33.08.2019',
    contractStatus: ContractStatusEnum.Suspended,
    years: [2022, 2021, 2020, 2019],
    type: 'paper',
    contractConditions: [
      { id: 1, status: ContractConditionStatusEnum.Expired },
    ],
  },
  {
    contractId: 4,
    contractNumber: 'ТРКБ-23044 от 44.11.2022',
    contractStatus: ContractStatusEnum.Stay,
    years: [2023],
    type: 'paper',
    contractConditions: [
      { id: 1, status: ContractConditionStatusEnum.AcceptWaiting },
    ],
  },
  {
    contractId: 41,
    contractNumber: 'ТРКБ-230441 от 441.11.2022',
    contractStatus: ContractStatusEnum.Stay,
    years: [2023],
    type: 'paper',
    contractConditions: [
      { id: 1, status: ContractConditionStatusEnum.ClientDeclined },
    ],
  },
  {
    contractId: 5,
    contractNumber: 'ТРКБ-23055 от 55.11.2023',
    contractStatus: ContractStatusEnum.Active,
    years: [],
    type: 'offer',
    contractConditions: [{ id: 1, status: ContractConditionStatusEnum.Active }],
  },
  {
    contractId: 6,
    contractNumber: 'ТРКБ-23066 от 66.01.2023',
    contractStatus: ContractStatusEnum.AcceptWaiting,
    years: [2023],
    type: 'offer',
    contractConditions: [{ id: 1, status: ContractConditionStatusEnum.Active }],
  },
  {
    contractId: 7,
    contractNumber: 'ТРКБ-23077 от 77.01.2023',
    contractStatus: ContractStatusEnum.AcceptDeclined,
    years: [2023],
    type: 'offer',
    contractConditions: [
      { id: 1, status: ContractConditionStatusEnum.ClientDeclined },
    ],
  },
  {
    contractId: 8,
    contractNumber: 'ТРКБ-23088 от 88.01.2023',
    contractStatus: ContractStatusEnum.Terminated,
    years: [2023],
    type: 'offer',
    contractConditions: [
      // { id: 1, status: ContractConditionStatusEnum.AcceptWaiting },
      { id: 2, status: ContractConditionStatusEnum.Active },
      { id: 3, status: ContractConditionStatusEnum.ClientDeclined },
      { id: 4, status: ContractConditionStatusEnum.AcceptingExpired },
      { id: 5, status: ContractConditionStatusEnum.BeginWaiting },
      { id: 6, status: ContractConditionStatusEnum.Expired },
    ],
  },
];
