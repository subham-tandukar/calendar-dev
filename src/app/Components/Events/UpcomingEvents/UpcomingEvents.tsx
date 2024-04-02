"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRoot } from '../../../../context';
import { getRemainingDays, nepaliDaysRemaining } from '../../../../hooks';
const UpcomingEvents = ({ Upcomingeventdata }) => {
  const { animation, setAnimation, setClickedDate, dropdownitem } = useRoot();
  const [showAll, setShowAll] = useState(false);
  const dataToShow = showAll ? Upcomingeventdata : Upcomingeventdata.slice(0, 5);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const handleClick = (data) => {
    setClickedDate({
      date: data?.date?.ad_concat_date_en
    });
    setAnimation(false)
    setTimeout(() => {
      setAnimation(true)
    }, 0);
  }

  useEffect(() => {
    // Scroll to the element with the "animation" class in the middle of the viewport
    const animationElement = document.querySelector('.animation');
    if (animationElement) {
      const topOffset = animationElement.getBoundingClientRect().top;
      const middleOfViewport = window.innerHeight / 2;
      window.scrollTo({
        top: window.pageYOffset + topOffset - middleOfViewport,
        behavior: 'smooth'
      });
    }
  }, [animation])

  return (
    <>
      <div className="ok-block ok-block-leftbar-events">
        <div className="ok-block-heading">
          <h3>आगामी इभेन्टहरु</h3>
          {/* <div className="ok-block-heading-right-elem">
            <a href="#" className="view-all-btn">
              <img src="img/arrow-right.svg" alt="" />
            </a>
          </div> */}
        </div>
        <div className='overflow-sidebar'>
          {dataToShow && dataToShow.length > 0 ? (
            dataToShow.map((event, index) => {
              const remainingDays = getRemainingDays(event?.date?.ad_concat_date_en);
              return (
                <div key={index} className="card-day-event">
                  <div className="event-day-date">
                    {event.date.bs_date_np}
                    <span>{event.date.day_np.replace("वार", "")}</span>
                  </div>
                  <div className="event-day-info">
                    <Link
                      scroll={false}
                      prefetch={false}
                      onClick={() => handleClick(event)}
                      href={`${dropdownitem === "वि.सं." ? "bs" : "ad"}?year=${dropdownitem === "वि.सं." ? event?.date?.bs_year_en : event?.date.ad_year_en}&month=${dropdownitem === "वि.सं." ? event?.date?.bs_month_code_en : event?.date?.ad_month_code_en}`}>
                      {event.event_title_np}
                    </Link>
                    <span>{event.date.bs_month_np} {event.date.bs_date_np}, {event.date.bs_year_np}- {event.date.ad_month_en}, {event.date.ad_year_np}</span>
                  </div>
                  <div className="event-day-reminder">{nepaliDaysRemaining(remainingDays)}</div>
                </div>
              )
            })
          ) : (
            <div>No upcoming events</div>
          )}
          {
            !showAll && Upcomingeventdata.length > 5 ? (
              <div className='tx-align-r'>
                <button className="btn primary primary-gradient" onClick={handleViewAllClick}>सबै हेर्नुहोस्</button>
              </div>
            ) : null
          }
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
