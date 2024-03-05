export enum ContractStatusEnum {
  AcceptDeclined = 'AcceptDeclined', // Акцепт договора отклонен
  AcceptWaiting = 'AcceptWaiting', // Ожидает акцепта
  Active = 'Active', // Активен
  ContractDataConfirmWaiting = 'ContractDataConfirmWaiting', // Ожидает подтверждения данных
  Stay = 'Stay', // Принят
  Suspended = 'Suspended', // Договор приостановлен
  Terminated = 'Terminated', // Договор расторгнут
}

export enum ContractConditionStatusEnum {
  AcceptingExpired = 'AcceptingExpired', // Истек срок принятия условий
  AcceptWaiting = 'AcceptWaiting', // Ожидают акцепта
  Active = 'Active', // Активны
  BeginWaiting = 'BeginWaiting', // Ожидают начала действия
  ClientDeclined = 'ClientDeclined', // Отклонены клиентом
  Expired = 'Expired', // Завершен срок действия
}

export type TContract = {
  contractId: number;
  contractNumber: string;
  contractStatus: ContractStatusEnum;
  years: number[];
  type: 'paper' | 'offer';
  contractConditions: TCondition[];
};

export type TCondition = {
  acceptDate: string;
  startDate: string;
  endDate: string;
  id: number;
  name: string;
  provider: { id: string; name: string }[];
  specialConditions: string;
  status: ContractConditionStatusEnum;
};
