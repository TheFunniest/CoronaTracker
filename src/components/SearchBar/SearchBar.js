import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { Link, useLocation } from "react-router-dom";

const SearchBar = ({ data }) => {
  let { state } = useLocation()
  let [isHidden, setHide] = useState(false);
  let [items, setItems] = useState([]);
  let [search, setSearch] = useState(localStorage.getItem("userInput") || "");
  useEffect( () => {
    
    if(state) {
      setHide(true)
      localStorage.setItem("userInput", search);
      setSearch('')
    } 
  }, [state] )
  const searchCountries = (dataObj, country) => {
    if (country.length === "") {
      setHide(true)
      return [];
    }
    let countries = [];
    for (let val of dataObj) {
      if (val.Country.toLowerCase().startsWith(country)) {
        countries.push(val);
      }
    }
    return countries.length >= 5 ? countries.slice(0, 5) : countries;
  };

  const handleChange = (e) => {
    let searching = e.target.value;
    localStorage.setItem("userInput", search);
    setSearch(searching.charAt(0).toUpperCase() + searching.slice(1));
    setItems(searchCountries(data, searching.toLowerCase()));
    searching.length ? setHide(false) : setHide(true)
    
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBlock}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search..."
          className={styles.searchInput}
          name="search"
          value={search}
        />
      </div>
      {items.length ? (
        isHidden ?  null : (<ul className={styles.countriesList}>
          {items.map((el) => (
            <li
              className={styles.countryItem}
              key={el.CountryCode}
            >
              <Link
                className={styles.countryLink}
                to={{ pathname: `/${el.Country.toLowerCase()}`, state: el }}
                onClick= {() => setHide(true)}
              >
                {el.Country}
              </Link>
            </li>
          ))}
        </ul>) 
      ) : null}
    </div>
  );
};

export default SearchBar;
