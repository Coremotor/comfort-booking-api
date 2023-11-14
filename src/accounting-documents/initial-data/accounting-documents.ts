export const accounting_documents = [
  {
    id: 1,
    period: 'Октябрь 2023',
    cb_docs: [
      {
        id: 1,
        name: 'Акт КБ-123456',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      { id: 2, name: 'Акт КБ-12', url: 'https://www.orimi.com/pdf-test.pdf' }, //pdf
      {
        id: 3,
        name: 'Отчет агента',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 4,
        name: 'Отчет агента',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 5,
        name: 'Счет-фактура 123-345',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 6,
        name: 'Корректировочный акт',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 7,
        name: 'Корректировочная счет-фактура',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
    ],
    ps_docs: [
      {
        id: 1,
        name: 'Акт платежной системы',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 2,
        name: 'Реестр платежной системы',
        url: 'http://localhost:5173/files/tests-example.xls',
      }, //xls
    ],
    all_docs_download_link: 'http://localhost:3000/files', //zip
  },
  {
    id: 2,
    period: 'Сентябрь 2023',
    cb_docs: [
      {
        id: 1,
        name: 'Акт КБ-123456',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 2,
        name: 'Отчет агента',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 3,
        name: 'Счет-фактура 123-345',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
    ],
    ps_docs: [],
    all_docs_download_link: 'http://localhost:3000/files', //zip
  },
  {
    id: 3,
    period: 'Август 2023',
    cb_docs: [
      {
        id: 1,
        name: 'Акт КБ-123456',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 2,
        name: 'Отчет агента',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 3,
        name: 'Счет-фактура 123-345',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 4,
        name: 'Корректировочный акт',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 5,
        name: 'Корректировочная счет-фактура',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
    ],
    ps_docs: [
      {
        id: 1,
        name: 'Акт платежной системы',
        url: 'http://localhost:5173/files/pdf-test.pdf',
      }, //pdf
      {
        id: 2,
        name: 'Реестр платежной системы',
        url: 'http://localhost:5173/files/tests-example.xls',
      }, //xls
    ],
    all_docs_download_link: 'http://localhost:3000/files', //zip
  },
];
