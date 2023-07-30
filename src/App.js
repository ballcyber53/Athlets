import { useEffect, useState } from "react";
import "./App.css";
import Athlete from "./components/Athlete";
import Carousel from "./components/Carousel";

const athletes = [
  {
    id: 1,
    content1:
      "Connect with coaches directly, you can ping coaches to view profile.",
    content2:
      "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    content3:
      "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
    imageDesktopUrl: "/assets/footballer.png",
    imageIpadUrl: "/assets/footballerIpad.png",
    imageMobileUrl: "/assets/footballerMobile.svg",
    imageAlt: "footballer",
    title: "ATHLETS",
    position: "content-left",
  },
  {
    id: 2,
    content1:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    content2:
      "Work with recruiter to increase your chances of finding talented athlete.",
    content3: "Save your time, recruit proper athlets for your team.",
    imageDesktopUrl: "/assets/basketball.png",
    imageIpadUrl: "/assets/basketballIpad.png",
    imageMobileUrl: "/assets/basketballMobile.svg",
    imageAlt: "basketball",
    title: "PLAYERS",
    position: "content-right",
  },

  // เพิ่มนักกีฬาเพิ่มเติมตามต้องการ
];

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isiPad, setIsiPad] = useState(false);
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", () => checkMobile());
    return () => {
      checkMobile();
    };
  }, []);

  const checkMobile = () => {
    const { innerWidth: width } = window;
    if (width <= 768) {
      setIsMobile(true);
    } else if (width > 768 && width <= 1024) {
      // iPad size falls between 768px and 1024px
      setIsMobile(false);
      setIsiPad(true);
    } else {
      setIsMobile(false);
      setIsiPad(false);
    }
    return null;
  };
  return (
    <div className="app">
      <div className={`desktop-view ${isMobile ? "d-none" : "d-block"}`}>
        <div className="athletes-section">
          <div className="athletes-list">
            {athletes.map((athlete, index) => {
              const isLastLoop = index === athletes.length - 1;
              return (
                <Athlete
                  key={index}
                  {...athlete}
                  isLastLoop={isLastLoop}
                  isMobile={isMobile}
                  isiPad={isiPad}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`mobile-view container ${isMobile ? "d-block" : "d-none"}`}
      >
        {/* {athletes.map((athlete, index) => {
          return (
            <> */}
        {/* {athlete.content1} */}
        <Carousel data={athletes} />
        {/* </>
          );
        })} */}
      </div>
    </div>
  );
}

export default App;
