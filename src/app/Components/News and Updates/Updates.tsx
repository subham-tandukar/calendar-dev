
"use client"

import React, { useState } from 'react';


const Updates = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [newsData, setNewsData] = useState(["शिशुको कान चिलाएमा आमाबुवाले के गल्ती गर्छन् ?"]);

  const handleTabChange = (tab: boolean | ((prevState: boolean) => boolean)) => {
    setActiveTab(tab);
    if (!tab) {
      setNewsData(["शिशुको कान चिलाएमा आमाबुवाले के गल्ती गर्छन् ?"]);
    }

   
  };

  return (
    <>
      <div className="okv4-tab-generic trending-on-calendar-left">
        <div className="tab-nav">
          <span
            className={`nav-w-icon ${activeTab ? 'active-tab' : ''}`}
            data-id="trending"
            onClick={() => handleTabChange(true)}
          >
            <span className="ok-icon ok-icon-trending"></span>
            ट्रेन्डिङ
          </span>
          <span
            className={`nav-w-icon ${!activeTab ? 'active-tab' : ''}`}
            data-id="latestUpdates"
            onClick={() => handleTabChange(false)}
          >
            <span className="ok-icon ok-icon-time"></span>
            ताजा अपडेट
          </span>
        </div>
        <div className="tab-content-wrap">
          <div
            id="trending"
            className="tab-container"
            style={{ display: activeTab ? 'block' : 'none' }}
          >
            {newsData.map((item, index) => (
              <div key={index} className="okv4-post-ltr is-trending">
                <span className="numr">{index + 1}.</span>
                <div className="okv4-post-content">
                  <span className="post-tag">छाला रोग</span>
                  <h2>
                    <a href="#">{item}</a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div
            id="latestUpdates"
            className="tab-container"
            style={{ display: !activeTab ? 'block' : 'none' }}
          >
            <div className="latest-posts-wrap">
              <div className="okv4-post-ltr">
                <span className="posted-hour">३१ मिनेट</span>
                <div className="okv4-post-content">
                  <h2>
                    <a href="#"></a>
                  </h2>
                </div>
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
