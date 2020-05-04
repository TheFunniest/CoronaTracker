import React from 'react'
import cx from "classnames";
import CountUp from "react-countup";


import styles from "./Cards.module.css";
import { Card as MUcard, CardContent, Grid, Typography } from "@material-ui/core";

const Card = ({ type,info,todaysText, now }) => {
    return (
        <Grid
          item
          component={MUcard}
          xs={12}
          sm={3}
          md={3}
          lg={3}
          className={cx(styles.card, styles[type])}
        >
          {console.log(type, styles)}
          <CardContent>
            <Typography gutterBottom color="textSecondary" variant="h6">
              {type}
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={info.total_cases ? info.total_cases : 0}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{now}</Typography>
            <Typography variant="body2"> {todaysText} {info.new_cases}</Typography>
          </CardContent>
        </Grid>
    )
}

export default Card

//