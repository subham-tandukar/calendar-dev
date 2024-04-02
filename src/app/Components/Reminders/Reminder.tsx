
"use client"
import React, { useState } from 'react';
import ReminderPopUp from '../Offcanvas/Popup/ReminderPopUp';
import ReminderDetailsPopUp from '../Offcanvas/Popup/ReminderDetailsPopUp';



const Reminder = () => {
  const [openReminderPopup, setReminderPopup] = useState(false);
  const [reminderDetailPopup, setReminderDetailPopup] = useState(false);

  const handlereminderpopup = () => {
    setReminderPopup(!openReminderPopup)
  }
  const handlereminderdetailpopup = () => {
    setReminderDetailPopup(!reminderDetailPopup)
  }
  const handlereminderpopupclose = () => {
    setReminderPopup(false)
  }
  const reminderDetailsclose = () => {
    setReminderDetailPopup(false)
  }
  return (
    <>
      <div className="my-reminders mt-30">
        <div className="block-heading">
          <h3>मेरो रिमाइन्डर <span className="add-scheule-btn">+</span></h3>
          <button onClick={handlereminderpopup} className="btn primary primary-gradient">सबै रिमाइन्डर</button>
        </div>
        <div className="reminder-card-wrapper grid-item grid-item-2 grid-gap-20">
          <div>
            <div className="card-day-event">
              <div className="event-day-date">
                ६ <br />
                <span>सोम</span>
              </div>
              <div className="event-day-info">
                <a href="#" onClick={handlereminderdetailpopup}>गोपालदाई संग मिटिङ</a>
                <span>साउन १५, २०८० - 26 Jul, 2023</span>
              </div>
              <div className="right-items">
                <div className="event-day-reminder">६ दिन बाकी</div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-day-event">
              <div className="event-day-date">
                १४ <br />
                <span>सोम</span>
              </div>
              <div className="event-day-info">
                <a href="#" onClick={handlereminderdetailpopup}>केहि जन्मदिन हरु सम्झान</a>
                <span>साउन १५, २०८० - 26 Jul, 2023</span>
              </div>
              <div className="right-items">
                <div className="event-day-reminder">६ दिन बाकी</div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-day-event">
              <div className="event-day-date">
                ६ <br />
                <span>सोम</span>
              </div>
              <div className="event-day-info">
                <a href="#" onClick={handlereminderdetailpopup}>गोपालदाई संग मिटिङ</a>
                <span>साउन १५, २०८० - 26 Jul, 2023</span>
              </div>
              <div className="right-items">
                <div className="event-day-reminder">६ दिन बाकी</div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-day-event">
              <div className="event-day-date">
                १४ <br />
                <span>सोम</span>
              </div>
              <div className="event-day-info">
                <a href="#" onClick={handlereminderdetailpopup}>केहि जन्मदिन हरु सम्झान</a>
                <span>साउन १५, २०८० - 26 Jul, 2023</span>
              </div>
              <div className="right-items">
                <div className="event-day-reminder">६ दिन बाकी</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openReminderPopup && <ReminderPopUp onClose={handlereminderpopupclose} />}
      {reminderDetailPopup && <ReminderDetailsPopUp onClose={reminderDetailsclose} />}

    </>
  );
};

export default Reminder;
