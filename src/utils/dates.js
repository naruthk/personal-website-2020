import moment from "moment";

export const DATE_FORMATS = {
  "D-M-YYYY": "D-M-YYYY",
  "DD-MM-YYYY": "DD-MM-YYYY",
  "MMMM-Do-YYYY": "LL",
};

export function prettyPrintDate({
  timestamp,
  format = DATE_FORMATS["MMMM-Do-YYYY"],
}) {
  const date = new Date(timestamp);
  return moment(date).format(format);
}
