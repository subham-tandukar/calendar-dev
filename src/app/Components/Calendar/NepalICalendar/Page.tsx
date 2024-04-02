
"use client"
import React, { useState, useEffect } from 'react';
import NotFound from '../../../not-found';
import BS from './NepaliCalendar';

interface CalendarData {
  success: boolean;
  data: any;
}



interface Props {
  month: number;
  year: number;
  currentdate: string;
  currenttime: number;
}

const NepaliCalendarComponent: React.FC<Props> = ({
  month,
  year,
  currentdate,
  currenttime,
}) => {
  const [loading, setLoading] = useState(true);
  const [calendarData, setCalendarData] = useState<any>([]);
  const [previousCalendarData, setPreviousCalendarData] = useState<any>([]);
  const [nextCalendarData, setNextCalendarData] = useState<any>([]);

  const fetchCalendarData = async (
    year: number
  ): Promise<CalendarData> => {
    const queryParam = `/${year}`;
    try {
      const response = await fetch(
        `http://47.128.210.223/api/v1/calendar/yearly/bs${queryParam}`, {
        cache: "no-store",
        // next: {
        //   revalidate: 5000
        // }
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        let calendarResponse, nextResponse, prevResponse;

        if (month >= 12) {
          // Fetch data for current year and next year
          [calendarResponse, nextResponse] = await Promise.all([
            fetchCalendarData(year),
            fetchCalendarData(Number(year) + 1)
          ]);
        } else if (month <= 1) {
          // Fetch data for current year and next year
          [calendarResponse, prevResponse] = await Promise.all([
            fetchCalendarData(year),
            fetchCalendarData(Number(year) - 1)
          ]);
        } else {
          // Fetch data only for the current year
          calendarResponse = await fetchCalendarData(year);
          nextResponse = []; // or any default value you want
          prevResponse = []; // or any default value you want
        }
        if (
          calendarResponse && calendarResponse.success
        ) {
          setCalendarData(calendarResponse ? calendarResponse.data.data : []);
          setNextCalendarData(nextResponse ? nextResponse.data.data : []);
          setPreviousCalendarData(prevResponse ? prevResponse.data.data : []);

        } else {
          console.error("Error fetching data.");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year]);


  if (month > 12 || month < 1) {
    return <NotFound />;
  }


  return (
    <BS
      calendarData={calendarData}
      currentdate={currentdate}
      currenttime={currenttime}
      loading={loading}
      nextCalendarData={nextCalendarData}
      previousCalendarData={previousCalendarData}
      selectedmonth={month}
      selectedyear={year}
    />
  );
};

export default NepaliCalendarComponent;
