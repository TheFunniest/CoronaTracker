import React, { createContext, useState,  } from "react";

import { fetchTotal } from '../api/queries'


export const Context = createContext();

export const Provider = props => {

    const [total, setTotal] = useState([])

    const getTotal =  async () => {
      let totalData = await fetchTotal()
      setTotal(totalData)
      return totalData
    }


    const state = {
      getTotal,
      setTotal,
      total,
    }


  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};


