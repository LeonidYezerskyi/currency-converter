import axios from "axios";

export const fetchRates = async () => {
  try {
    const response = await axios.get(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    const rateData = response.data.reduce((acc, item) => {
      if (item.cc === "USD" || item.cc === "EUR") {
        acc[item.cc] = parseFloat(item.rate);
      }
      return acc;
    }, {});
    rateData["UAH"] = 1;
    return rateData;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};
