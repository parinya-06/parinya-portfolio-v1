import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="container-1200">
          <section className="intro__section" id="intro">
            <div className="intro__section--grid">
              <div className="intro__section--grid-right">
                <h2>About</h2>
                <p className="modified-large">
                    <h3>"KENG"</h3>
                    <h3>"Parinya Reuangsaen"</h3>
                    "เก่ง"  ปริญญา เรืองแสน เกิด 6 สิงหาคม พ.ศ 2541 อายุ 23 ปี 
                      ปัจจุบันศึกษาที่ มหาวิทยาลัยอุบลราชธานี คณะวิทยาศาสตร์ สาขา เทคโนโลยีสารสนเทศ ชั้นปีที่ 4
                      ชื่นชอบเทคโนโลยีตั้งแต่มัธยม สนใจในส่วนของ Hardware,Network และการเขียนเว็บไซต์
                </p>
                <p className="modified-large">
                  เคยมีประสบการณ์ได้ทำงานร่วมกับคณะวิทยาศาสตร์
                  ในการทำวีดีโอ โปรโมทสาขาทั้งหมดภายในคณะวิทยาศาสตร์โดยได้รับหน้าที่ให้เป็น 
                  ช่างถ่ายภาพนิ่ง เเละ ถ่ายวีดีโอ เเละ เคยได้ทำหนังสั้น โดยได้รับหน้าที่ตัดต่อ กำกับภาพ 
                </p>
              </div>
              <div className="intro__section--grid-left">
                <h2>SKILLS</h2>
                <div className="intro__section--grid-left-list">
                  <p className="modified color-green">#HTML</p>
                  <p className="modified color-yellow">#CSS</p>
                  <p className="modified color-blue">#React</p>
                  <p className="modified color-blue">#React Native</p>
                  <p className="modified color-pink">#PHP</p>
                  <p className="modified color-dark">#Photoshop</p>
                  <p className="modified color-pink">#Figma</p>
                  <p className="modified color-blue-sec">#Illustrator</p>
                  <p className="modified color-green">#Hardware skills</p>
                  <p className="modified color-dark">#Network skills</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Intro;
