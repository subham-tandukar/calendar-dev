import NepaliCalendarComponent from "../Components/Calendar/NepalICalendar/Page";

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

export default async function Dashboard({ searchParams }) {
    const { year, month, currentdate, currenttime } =
        await getTimeAndDate();

    if (searchParams.year && searchParams.month) {
        return (
            <>
                <NepaliCalendarComponent
                    year={searchParams.year}
                    month={searchParams.month}
                    currentdate={currentdate}
                    currenttime={currenttime}
                />
            </>
        );
    }

    return (
        <>
            <NepaliCalendarComponent
                year={year}
                month={month}
                currentdate={currentdate}
                currenttime={currenttime}
            />
        </>
    );
}
