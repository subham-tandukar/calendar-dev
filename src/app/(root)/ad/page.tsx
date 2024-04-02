import EnglishCalendarComponent from "../../Components/Calendar/EnglishCalendar/Page";

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
    ad_year_en: date.ad_year_en,
    ad_month_en: date.ad_month_code_en,
  };
}

export default async function Home({ searchParams }: Props) {
  const { year, month, currentdate, currenttime, ad_year_en, ad_month_en } =
    await getTimeAndDate();

  if (searchParams.year && searchParams.month) {
    return (
      <>
        <EnglishCalendarComponent
          ad_year_en={parseInt(searchParams.year)}
          ad_month_en={parseInt(searchParams.month)}
          currentdate={currentdate}
          currenttime={currenttime}
          month={searchParams.month}
        />
      </>
    );
  }

  return (
    <>
      <EnglishCalendarComponent
        ad_year_en={parseInt(ad_year_en)}
        ad_month_en={parseInt(ad_month_en)}
        currentdate={currentdate}
        currenttime={currenttime}
        month={month}
      />
    </>
  );
}
