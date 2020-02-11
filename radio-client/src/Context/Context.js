import React from "react";

export default React.createContext({
  currentStation: 0,
  station: [],
  nextStation: () => {},
  previousStation: () => {}
});
