import React from "react";
import moment from "moment";

export const DateTime = ({ dateTime, format }) => (
  <span>{moment(dateTime).format(format)}</span>
);
