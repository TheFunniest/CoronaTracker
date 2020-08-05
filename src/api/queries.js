import API from "./api";
import chartAPI from "./api2";

export const fetchTotal = async () => {
  let { data } = await API.get("summary");
  let {
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  } = data.Global;
  let { Countries } = data;
  return {
    Countries,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  };
};

export const fetchCountries = async () => {
  let { data } = await API.get("stats");
  return data;
};

export const fetchDailyData = async () => {
  let { data } = await chartAPI.get("daily");
  let modifiedData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));

  return modifiedData;
};
