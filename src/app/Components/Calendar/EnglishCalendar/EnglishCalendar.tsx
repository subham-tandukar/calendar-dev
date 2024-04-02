"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Choosedate from '../../Offcanvas/Popup/Choosedate';
import { PageProps } from "../../../../types/Calendartypes";
import ScheduleOffcanvas from "../../Offcanvas/ScheduleOffCanvas/ScheduleOffcanvas";
import NextMonth from "./NextMonth";
import EnglishDayOffCanvas from "../../Offcanvas/DayOffCanvas/EnglishDayOffcanvas";
import PreviousMonths from "./PreviousMonth";
import NotFound from "../../../not-found";
import { useRoot } from "../../../../context";

export const EnglishCalendar: React.FC<PageProps> = ({
  data,
  currentdate,
  currenttime,
  previousdata,
  Nextmonthdata,
}) => {
  const { animation, clickedDate, dropdownitem, setDropdownitem, setAnimation } = useRoot();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isDayOffCanvasOpen, setDayisOffCanvasOpen] = useState<boolean>(false);
  const [Selecteddate, setSelecteddate] = useState<any | null>(null);
  const [ChoosedateOpen, Setchoosedate] = useState<boolean>(false);
  const calendardata = data;

  const { ad_year_en, ad_month_code_np } = calendardata[0] || {};
  const ad_month_en = parseInt(ad_month_code_np);

  const handleToggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const handleChoosedate = () => {
    Setchoosedate(!ChoosedateOpen)
  };

  const handleChoosedateClose = () => {
    Setchoosedate(false);
  }

  const handleCloseOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  const handleDayTogglecanvas = (_id: number) => {
    setDayisOffCanvasOpen(!isDayOffCanvasOpen);
  };

  const handleDayCloseOffCanvas = () => {
    setDayisOffCanvasOpen(false);
  };

  const [OpenDropdown, setOpenDropdown] = useState(false);

  const handleDropdownClick = () => {
    setOpenDropdown(!OpenDropdown)
  }
  // if (!calendardata || calendardata.length === 0) {
  //   return <NotFound />;
  // }

  useEffect(() => {
    setDropdownitem("ई.सं.")
  }, [])

  return (
    <>
      <div className="okv4-col order-2">
        <div className="calendar-dates">
          <div className="ok-block ok-block-cal-header">
            <div className="ok-block-cal-date-circle">
              {currentdate.ad_date_en}
            </div>
            <div className="ok-block-cal-date-circle-info">
              <div>
                {currentdate.ad_month_en}
                <span>
                  {currentdate.ad_month_en} {currentdate.ad_date_en},{" "}
                  {currentdate.ad_year_en}
                </span>
                <span> ऋतु : {currentdate.panchanga.ritu_np}</span>
              </div>
              <div className="flx flxwrp align-m">
                <div className="okelem-panchanga-dropdwon">
                  आजको पञ्चाङ्ग
                  <span className="reveal-dropdown">
                    <img src="img/arrow-right.svg" alt="" />
                  </span>
                </div>
                <div className="okelem-panchanga-source">
                  <img src="./img/toyanath-img.png" alt="" />
                  <a href="#">"तोयनाथ पंचाङ्ग"</a> सँगको सहकार्यमा
                </div>
              </div>
            </div>
            <div className="right-time-watch">
              <img src="./img/watch.png" alt="" />
              <div>
                <span className="right-time-watch-day">
                  {currentdate.day_en} <span>{currenttime}</span>
                </span>
                <span className="sun-rising-info">
                  <span>सूर्योदय {currentdate.panchanga.sunset_Nn}</span>
                  <span>सूर्यास्त {currentdate.panchanga.sunrise_np}</span>
                </span>
              </div>
            </div>
          </div>
        </div>


        <div className="okelm-calendar-card">

          {
            !calendardata || calendardata.length === 0 ? (
              null
            ) : (
              <div className="okelm-calendar-card-filter">
                <div className="select-by-year-months flex">
                  <div
                    onClick={handleDropdownClick}
                    className="select__box select__yr-month yr-month-wrapper"

                  >
                    {dropdownitem}
                    <MdOutlineKeyboardArrowDown />
                    {OpenDropdown && (
                      <div className="yr-month-dropdown">

                        <div onClick={() => { setDropdownitem("वि.सं."); setAnimation(false) }}>
                          <Link href={"bs"}>वि.सं. </Link>
                        </div>
                        <div onClick={() => { setDropdownitem("ई.सं."); setAnimation(false) }}>
                          <Link href={"ad"}>ई.सं.</Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className="select__box select__yr-month"
                    onClick={handleChoosedate}
                  >
                    वर्ष र महिना रोज्नुहोस्
                  </div>
                </div>
                <div className="jump-between-dates">
                  <Link
                    href={`ad?year=${ad_month_en === 1 ? ad_year_en - 1 : ad_year_en}&month=${ad_month_en - 1 < 1 ? 12 : ad_month_en - 1
                      }`}
                    className="prev-date"
                    prefetch={false}
                    scroll={false}
                  >
                    <img src="./img/arrow-left.svg" alt="" />
                  </Link>

                  {calendardata.length > 0 && (
                    <div key={1}>
                      <span className="current-date">
                        {calendardata[0].ad_month_en}{" "}
                        <span>{calendardata[0].ad_year_en}</span>
                      </span>
                    </div>
                  )}

                  <Link
                    href={`ad?year=${(ad_month_en === 12 ? parseInt(ad_year_en) + 1 : parseInt(ad_year_en))}&month=${((ad_month_en % 12) === 0 ? 1 : (ad_month_en) + 1)}`}
                    className="next-date"
                    prefetch={false}
                    scroll={false}
                  >
                    <img src="./img/arrow-left.svg" alt="" />
                  </Link>

                </div>
                <div className="schedule-btn-wrapper">
                  <button
                    className="btn primary primary-gradient schedule__offcanvas__btn"
                    onClick={handleToggleOffCanvas}
                  >
                    सेड्युलहरु +
                  </button>
                </div>
              </div>

            )}
          <div className="okelm-patro desktop-patro ">
            <div className="okelm-patro-row">
              <div className="okelm-patro-col heading">
                आइतवार
                <span>SUN</span>
              </div>
              <div className="okelm-patro-col heading">
                सोमवार
                <span>MON</span>
              </div>
              <div className="okelm-patro-col heading">
                मंगलवार
                <span>TUE</span>
              </div>
              <div className="okelm-patro-col heading">
                बुधवार
                <span>WED</span>
              </div>
              <div className="okelm-patro-col heading">
                बिहीवार
                <span>THU</span>
              </div>
              <div className="okelm-patro-col heading">
                शुक्रवार
                <span>FRI</span>
              </div>
              <div className="okelm-patro-col heading">
                शनिवार
                <span>SAT</span>
              </div>
            </div>

            {
              !calendardata || calendardata.length === 0 ? (
                <div className="okelm-nodata">
                  no data
                  <div className="mt-1">
                    <Link href={`ad?year=${currentdate.ad_year_en}&month=${currentdate.ad_month_code_en}`}>
                      Go back
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="okelm-patro-row">
                  <PreviousMonths previousdata={previousdata.data} data={data} />
                  {data.length > 1 &&
                    data.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          handleDayTogglecanvas(item.id);
                          setSelecteddate(item);
                        }}
                        className={`okelm-patro-col-day day__offcanvas__btn 
                      ${item.bs_date_np === currentdate.bs_date_np &&
                            item.bs_month_code_en === currentdate.bs_month_code_en
                            ? "is-today"
                            : item.day_en === "Saturday"
                              ? "holiday"
                              : item.events[0]?.is_public_holiday === true ?
                                "holiday" :
                                ""
                          }
                          ${animation && item?.ad_full_date_en === clickedDate?.date ? "animation" : ""}
                          `}
                      >
                        {item.events.map((event, index) => (
                          <React.Fragment key={index}>
                            {index === 0 && (
                              <>
                                <span className="box-top">{event.event_title_np}</span>
                              </>
                            )}
                          </React.Fragment>
                        ))}
                        <div
                          className={
                            item.bs_date_np === currentdate.ad_date_en &&
                              item.ad_month_code_en === currentdate.bs_month_code_en
                              ? "istoday"
                              : "okelm-patro-col heading"
                          }
                        >
                          <span>{item.ad_date_en}</span>
                          <span className="more-event">

                            {item.events?.length - 1 >= 1 && (
                              <>
                                + {item.events?.length - 1}
                              </>
                            )}

                          </span>
                        </div>
                        <div className="col-text-left">
                          <span>{item?.tithi?.tithi_title_np}</span>

                        </div>
                        <div className="eng-date">
                          <span>{item.bs_date_np}</span>
                        </div>
                      </div>
                    ))}
                  <NextMonth data={data} Nextmonthdata={Nextmonthdata.data} />
                </div>
              )}

          </div>
        </div>


      </div>
      {isOffCanvasOpen && <ScheduleOffcanvas   Selecteddate={Selecteddate} isDayCanvas={false} onClose={handleCloseOffCanvas} />}
      {ChoosedateOpen && <Choosedate currentdate={currentdate} currentYear={ad_year_en} currentMonth={ad_month_en} onClose={handleChoosedateClose} />}
      {isDayOffCanvasOpen && (
        <EnglishDayOffCanvas
          data={data}
          handleDayCloseOffCanvas={handleDayCloseOffCanvas}
          Selecteddate={Selecteddate}
        />
      )}
    </>
  );
};

export default EnglishCalendar;
