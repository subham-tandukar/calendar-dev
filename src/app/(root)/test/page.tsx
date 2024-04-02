"use client"
import React, { useEffect, useState } from 'react';
import data1 from '../../../json/data1';
import Link from 'next/link';

type Props = {
  searchParams: {
    year: number;
    month: number;
  };
};

const Test: React.FC<Props> = ({ searchParams }) => {
  const [calendarData, setCalendarData] = useState<string[][]>([]);

  useEffect(() => {
    const fetchCalendarData = () => {
      const monthData = data1.find((item) => item.month === Number(searchParams.month))?.data || [];
      const previousMonth = data1.find((item) => item.month === Number(searchParams.month) - 1)?.data || [];
      const nextMonth = data1.find((item) => item.month === Number(searchParams.month) + 1)?.data || [];

      const firstIndex = monthData[0]?.day_code_en;
      const firstIndexData = parseInt(firstIndex) - 1;
      const lastIndex = monthData[monthData.length - 1]?.day_code_en;
      const lastIndexData = 7 - parseInt(lastIndex);

      let previousMonthData: { bs_month_np: string }[] = [];
      if (previousMonth.length === 0) {
        previousMonthData = Array(firstIndexData).fill({ bs_month_np: '' });
      } else {
        previousMonthData = previousMonth.slice(-firstIndexData);
      }

      let nextMonthData: { bs_month_np: string }[] = [];
      if (nextMonth.length === 0) {
        nextMonthData = Array(lastIndexData).fill({ bs_month_np: '' });
      } else {
        nextMonthData = nextMonth.slice(0, lastIndexData);
      }

      const allData = [...previousMonthData, ...monthData, ...nextMonthData];

      const calendarRows: string[][] = [];
      let currentRow: string[] = [];
      allData.forEach((item, index) => {
        currentRow.push(item.bs_month_np); // Assuming item.bs_month_np holds the day data
        if ((index + 1) % 7 === 0 || index === allData.length - 1) {
          calendarRows.push(currentRow);
          currentRow = [];
        }
      });

      setCalendarData(calendarRows);
    };

    fetchCalendarData();
  }, [searchParams]);



  return (
    <>
      <button>
        <Link href={`/test?month=${Number(searchParams.month) - 1}`}>
          Prev
        </Link>
      </button>

      <button>
        <Link href={`/test?month=${Number(searchParams.month) + 1}`}>
          Next
        </Link>
      </button>
      <div className='okelm-patro desktop-patro '>
        <div className="okelm-patro-row">
          <div className="okelm-patro-col heading">
            <span>Sun</span>
          </div>
          <div className="okelm-patro-col heading">
            <span>Mon</span>
          </div>
          <div className="okelm-patro-col heading">
            <span>Tues</span>
          </div>
          <div className="okelm-patro-col heading">
            <span>Wed</span>
          </div>
          <div className="okelm-patro-col heading">
            <span>Thurs</span>
          </div>
          <div className="okelm-patro-col heading">
            <span>Fri</span>
          </div>
          <div className="okelm-patro-col heading">
            <span>Sat</span>
          </div>
        </div>

        {calendarData.map((row, rowIndex) => (
          <div className="okelm-patro-row" key={rowIndex}>
            {row.map((day, dayIndex) => (
              <div className="okelm-patro-col-day" key={dayIndex}>
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Test;
