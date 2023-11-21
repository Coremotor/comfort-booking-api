const generateDailyRegisters = () => {
  const arr = [];
  for (let i = 1; i < 32; i++) {
    arr.push({
      id: Math.random(),
      dayNumber: i,
      number: `000${i}`,
    });
  }
  return arr;
};

const generateOperationsDocuments = () => {
  const arr = [];
  for (let i = 11; i > 0; i--) {
    arr.push({
      year: 2023,
      month: i,
      operationsReportId: Math.random(),
      dailyRegisters: generateDailyRegisters(),
    });
  }
  return arr;
};

export const operations_documents = generateOperationsDocuments();
// export const operations_documents = [];
