import { notFound } from "next/navigation";
import AD from "./EnglishCalendar";
import NotFound from "../../../not-found";
const fetchCalenderData = async (
  ad_year_en: number,
  ad_month_en: number,
  previous?: number,
  next?: number
) => {
  const queryParam = previous
    ? `/${ad_year_en}/${previous}`
    : next
      ? `/${ad_year_en}/${next}`
      : `/${ad_year_en}/${ad_month_en}`;
  try {
    const response = await fetch(
      `http://47.128.210.223/api/v1/calendar/month/ad${queryParam}`, {
      cache: "no-store",
      next: {
        revalidate: 5000
      }
    }
    );

    return {
      success: response.ok,
      data: await response.json(),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      success: false,
      data: null,
    };
  }
};


export default async function EnglishCalendarComponent({
  month,
  ad_month_en,
  currentdate,
  currenttime,
  ad_year_en,
}: {
  month: string;
  ad_year_en: number;
  currentdate: string;
  currenttime: number;
  ad_month_en: number;
  calendarType?: string;
}) {
  if (ad_month_en > 12 || ad_month_en < 1) {
    return <NotFound />
  }

  const [calenderData, previousdata, Nextmonthdata] = await Promise.all([
    fetchCalenderData(ad_year_en, ad_month_en),
    fetchCalenderData(ad_year_en, ad_month_en, parseInt(month) - 1),
    fetchCalenderData(
      ad_year_en,
      ad_month_en,
      undefined,
      (parseInt(month) + 1),

    ),
  ]);

  if (

    calenderData.success === false ||
    previousdata.success === false ||
    Nextmonthdata.success === false
  ) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <AD
      data={calenderData.data.data}
      tithiProps={[]}
      currentdate={currentdate}
      currenttime={currenttime}
      previousdata={previousdata.data}
      Nextmonthdata={Nextmonthdata.data}
      ad_year_en={ad_year_en}
      ad_month_en={ad_month_en}
    />
  );
}
