const formatter = Intl.DateTimeFormat("fa-IR", { year: "numeric", month: "long", day: "numeric" });

export const farsiDates = (date: Date) => {
  return formatter.format(date);
};
