interface Day {
  date: Date;
  date_locale: string;
}
interface Month {
  month: number;
  days: Day[];
}
interface Year {
  year: number;
  months: Month[];
}
export = async (date: Date) => {
  try {
    const year = date.getFullYear();
    const months: Month[] = [];
    const YearObj: Year = {
      year,
      months,
    };
    let month: number = 0;
    while (month <= 11) {
      const days: Day[] = [];
      const MonthObj: Month = { month, days };
      let curr: number = 1;
      const max: number = new Date(year, month + 1, 0).getDate();
      while (curr <= max) {
        const d = new Date(year, month, curr);
        const day = {
          date: d,
          date_locale: d.toLocaleDateString(),
        };
        MonthObj.days.push(day);
        curr += 1;
      }
      YearObj.months.push(MonthObj);
      month += 1;
    }
    return YearObj;
  } catch (error) {
    console.error(error);
    return { err: "server error" };
  }
};
