import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { fetchDailyData } from "../../api/queries";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      let dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };
    fetchAPI();
  }, []);
  let { state } = useLocation();
  if (state) {
    var { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = state;
  }

  const barChart = state ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [TotalConfirmed, TotalRecovered, TotalDeaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${Country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.chartBlock}>
      <div className={styles.container}>{Country ? barChart : lineChart}</div>
    </div>
  );
};

export default Chart;
