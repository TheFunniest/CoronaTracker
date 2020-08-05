import React from "react";
import { BrowserRouter as Router,} from "react-router-dom";


// STYLES
import styles from "./App.module.css";

// API FUNCTIONS
import { fetchTotal } from "./api/queries";

// COMPONENTS
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import SearchBar from "./components/SearchBar/SearchBar";
import Logo from './components/Logo/logo'

// STATE MANAGEMENT
import {Provider} from "./components/context";

export default class App extends React.Component {
  state = {
    total: {},
    countries: {},
  };
  async componentDidMount() {
    let total = await fetchTotal();
    this.setState({ total, countries: total.Countries });
  }

  render() {
    return (
      <Provider>
        <Router>
          <div className={styles.contentBlock}>
            <div className={styles.cardsInfo}>
              <Logo/>
              <Cards data={this.state.total} />
              <SearchBar data={this.state.countries} />
            </div>
            <Chart />
          </div>
        </Router>
      </Provider>
    );
  }
}
