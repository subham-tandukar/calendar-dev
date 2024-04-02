import React from 'react';

const Festival = ({ festivaldata , currentnepalimonth}) => {
  return (
    <>
      <div className="card-all-festivals">
        <h3>{currentnepalimonth} का पर्वहरू</h3>

        <div className="tags-wrapper" >
        {festivaldata && festivaldata.length > 0 ? (
          festivaldata.map((festival, index) => (
              <a href="#" key={index}>{festival.event_title_np}</a>
              ))
              ) : (
                  <p>No data available</p>
                  )}
                  </div>

      </div>
    </>
  );
};

export default Festival;
