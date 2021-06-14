interface Day {
  date: Date;
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
    const YearObj = {
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
        const day = {
          date: new Date(year, month, curr),
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
