

import React from 'react';

const Eventsblog = () => {
  return (
    <>
      <div className="grid-parent">
        <div className="block-heading">
          <h3>इभेन्ट्स ब्लग</h3>
        </div>
        <div className="grid-item grid-item-3 grid-gap-25">
          <div className="post-item">
            <a href="#">
              <div className="post-image">
 
                <img
                  src="https://www.onlinekhabar.com/wp-content/uploads/2017/09/DR-HEMRAJ-KOIRALA.jpg"
                  alt=""
                />
              </div>
              <span className="post-cat">छाला रोग</span>
              <h3>धेरै सपना देख्नु स्वास्थ्यका लागि राम्रो होइन</h3>
              <div className="post-author">
                <img src="./img/author.png" alt="" />
                डा. विनोद चौलागाई
              </div>
            </a>
          </div>
          <div className="post-item">
            <a href="#">
              <div className="post-image">
                <img
                  src="https://www.onlinekhabar.com/wp-content/uploads/2021/03/barrow.jpg"
                  alt=""
                />
              </div>
              <span className="post-cat">छाला रोग</span>
              <h3>
                बर्राेको औषधीय महत्व : कसरी र केका लागि प्रयोग गर्ने ?
              </h3>
              <div className="post-author">
                <img src="./img/author.png" alt="" />
                डा. विनोद चौलागाई
              </div>
            </a>
          </div>
          <div className="post-item">
            <a href="#">
              <div className="post-image">
        
                <img
                  src="https://www.onlinekhabar.com/wp-content/uploads/2016/12/Jadibuti.jpg"
                  alt=""
                />
              </div>
              <span className="post-cat">छाला रोग</span>
              <h3>
                दुरा जातिको परम्परागत उपचार विधि : कुन रोगमा कुन जडीबुटी
                खाने ?
              </h3>
              <div className="post-author">
                <img src="./img/author.png" alt="" />
                डा. विनोद चौलागाई
              </div>
            </a>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Eventsblog;
