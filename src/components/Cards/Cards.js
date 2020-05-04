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
  // let [info, setInfo] = useState({});
  let { state } = useLocation();
  let now = new Date().toDateString();
  const { getTotal, total, setTotal } = useContext(Context);
  
  
  useEffect(() => {
    setTotal(state);
  }, [state]);
  
  
  useEffect(() => {
    if (!state) {
      getTotal();
      console.log(total);
    }
  }, []);
  if (total) {
    var {
      total_cases,
      total_deaths,
      total_recovered,
      new_cases,
      new_deaths,
      active_cases,
    } = total;
  }
  let info = {
    infected: {
      total_cases,
      new_cases,
    },
    deaths: {
      total_cases: total_deaths,
      new_cases: new_deaths,
    },
    recovered: {
      total_cases: total_recovered,
      new_cases: active_cases,
    },
  };

  return (
    <div className={styles.container}>
      {console.log(total)}
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
