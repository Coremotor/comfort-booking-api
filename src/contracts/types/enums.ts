export enum ContractStatusEnum {
  AcceptWaiting, // Ожидает акцепта
  ContractDataConfirmWaiting, // Ожидает подтверждения данных
  Stay, // Принят
  Active, // Активен
  AcceptDeclined, // Акцепт договора отклонен
  Suspended, // Договор приостановлен
  Terminated, // Договор расторгнут
}

export enum ContractConditionStatusEnum {
  AcceptWaiting, // Ожидают акцепта
  Active, // Активны
  ClientDeclined, // Отклонены клиентом
  AcceptingExpired, // Истек срок принятия условий
  BeginWaiting, // Ожидают начала действия
  Expired, // Завершен срок действия
}

export type TContract = {
  contractId: number;
  contractNumber: string;
  contractStatus: ContractStatusEnum;
  years: number[];
  type: 'paper' | 'offer';
  contractConditions: { id: number, status: ContractConditionStatusEnum }[];
};
