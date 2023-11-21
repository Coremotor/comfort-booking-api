const generateDailyRegisters = (contractId) => {
  const arr = [];
  for (let i = 1; i < 32; i++) {
    arr.push({
      id: Math.random(),
      dayNumber: i,
      number: `000${i}-${contractId}`,
    });
  }
  return arr;
};

export const generateOperationsDocuments = (period, contractId) => {
  const arr = [];
  for (let i = 11; i > 0; i--) {
    arr.push({
      year: period,
      month: i,
      operationsReportId: Math.random(),
      dailyRegisters: generateDailyRegisters(contractId),
    });
  }
  return arr;
};
