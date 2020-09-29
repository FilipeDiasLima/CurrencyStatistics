import api from "../service/api";

export default async function currencyVariationStatus(
  curr: string,
  date: string
) {
  let ano = "";
  let mes = "";
  let dia = "";
  let acu = 0;

  for (let i = 0; i < date.length; i++) {
    if (date[i] !== "-" && acu === 0) {
      ano += date[i];
    }
    if (date[i] === "-") {
      acu++;
    }
    if (date[i] !== "-" && acu === 1) {
      mes += date[i];
    }
    if (date[i] !== "-" && acu === 2) {
      dia += date[i];
    }
  }

  // convert
  const anoFormat = Number(ano);
  const mesFormat = Number(mes);
  const diaFormat = Number(dia);

  const previousDate1 = `${anoFormat}-${mesFormat}-${diaFormat - 1}`;
  const previousDate2 = `${anoFormat}-${mesFormat}-${diaFormat - 2}`;
  const previousDate3 = `${anoFormat}-${mesFormat}-${diaFormat - 3}`;

  // operation

  const response = await api.get(`/${date}?base=USD`);
  const response1 = await api.get(`/${previousDate1}?base=USD`);
  const response2 = await api.get(`/${previousDate2}?base=USD`);
  const response3 = await api.get(`/${previousDate3}?base=USD`);

  let responses = [];
  responses.push(response.data.rates[curr]);
  responses.push(response1.data.rates[curr]);
  responses.push(response2.data.rates[curr]);
  responses.push(response3.data.rates[curr]);

  /*
  let response: ResponseDataProps;
  let response1;
  let response2;
  let response3;

  
  api.get(`/${date}?base=USD`).then((responseAux) => {
    response = responseAux.data;
  });
  api.get(`/${previousDate1}?base=USD`).then((responseAux) => {
    response1 = responseAux;
  });
  api.get(`/${previousDate2}?base=USD`).then((responseAux) => {
    response2 = responseAux;
  });
  api.get(`/${previousDate3}?base=USD`).then((responseAux) => {
    response3 = responseAux;
  });
  */

  let resultsArr = [];

  resultsArr.push(response.data.rates[curr] - response1.data.rates[curr]);
  resultsArr.push(response1.data.rates[curr] - response2.data.rates[curr]);
  resultsArr.push(response2.data.rates[curr] - response3.data.rates[curr]);

  let status = [];

  for (let i = 0; i < resultsArr.length; i++) {
    if (resultsArr[i] < 0) {
      status[i] = "down";
    } else if (resultsArr[i] > 0) {
      status[i] = "up";
    } else {
      status[i] = "neutral";
    }
  }

  return { status, resultsArr, responses };
}
