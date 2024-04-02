import NepaliCalenderComponent from "../../Components/Calendar/NepalICalendar/Page";

type Props = {
  searchParams: {
    year: string;
    month: string;
    calendarType: string;
    ad_month_en: string;
    ad_year_en: string;
  };
};

async function getTimeAndDate() {
  const response = await fetch("http://47.128.210.223/api/v1/calendar/today", {
    cache: "no-store",
    next: {
      revalidate: 5000
    }

  });
  const { date, time } = await response.json();

  return {
    year: date.bs_year_en,
    month: date.bs_month_code_en,
    currentdate: date,
    currenttime: time,

  };
}

export default async function Home({ searchParams }: Props) {
  const { year, month, currentdate, currenttime } =
    await getTimeAndDate();
  if (searchParams.year && searchParams.month) {
    return (
      <>
        <NepaliCalenderComponent
          year={searchParams.year}
          currentdate={currentdate}
          currenttime={currenttime}
          month={searchParams.month}
        />
      </>
    );
  }

  return (
    <>
      <NepaliCalenderComponent
        year={year}
        currentdate={currentdate}
        currenttime={currenttime}
        month={month}
      />
    </>
  );
}
