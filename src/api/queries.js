import API from "./api";
import chartAPI from "./api2";

export const fetchTotal = async () => {
  let { data } = await API.get("stats?country=Total");
  let {
    total_cases,
    total_recovered,
    total_deaths,
    new_cases,
    new_deaths,
    active_cases,
  } = data[7];
  console.log(data)
  return {
    total_cases,
    total_recovered,
    total_deaths,
    new_cases,
    new_deaths,
    active_cases,
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
