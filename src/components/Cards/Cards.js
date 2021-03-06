import React, {  useEffect, useContext } from "react";
import {  useLocation } from "react-router-dom";
// STYLES
import styles from "./Cards.module.css";

// USED COMPONENTS
import { Grid } from "@material-ui/core";
import Card from "./Card";

// STATE MANAGEMENT
import { Context } from "../../components/context";

const Cards = () => {
  let { state } = useLocation();
  let now = new Date().toDateString();
  const { getTotal, total, setTotal } = useContext(Context);
  
  
  useEffect(() => {
    setTotal(state);
  }, [state, setTotal]);
  
  
  useEffect(() => {
    if (!state) {
      getTotal();
    }
  }, []);
  if (total) {
    var {
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = total;
  }
  let info = {
    infected: {
      total_cases: TotalConfirmed,
      new_cases: NewConfirmed,
    },
    deaths: {
      total_cases: TotalDeaths,
      new_cases: NewDeaths,
    },
    recovered: {
      total_cases: TotalRecovered,
      new_cases: NewRecovered,
    },
  };

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          type={"Infected"}
          info={info.infected}
          now={now}
          todaysText={"New cases today"}
        />
        <Card
          type={"Deaths"}
          info={info.deaths}
          now={now}
          todaysText={"Number of deaths today"}
        />
        <Card
          type={"Recovered"}
          info={info.recovered}
          now={now}
          todaysText={"Number of active cases"}
        />
      </Grid>
    </div>
  );
};

export default Cards;
