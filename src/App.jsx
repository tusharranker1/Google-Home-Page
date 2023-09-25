import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import ModeIcon from "@mui/icons-material/Mode";
import PublicIcon from "@mui/icons-material/Public";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import style from "./App.module.css";
import youtube from "./assets/youtbe.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagramIcon.png";
import plus from "./assets/plusIcon.png";
import g1 from "./assets/gCalender.png";
import g2 from "./assets/gDrive.png";
import g3 from "./assets/gDuo.png";
import g4 from "./assets/gMaps.png";
import g5 from "./assets/gMeet.png";
import g6 from "./assets/gPhotos.png";
import g7 from "./assets/gSearch.png";

import { useState } from "react";

function App() {
  const [option, setOption] = useState(false);

  const imagesMoreOption = [
    {
      id: 0,
      img: g1,
    },
    {
      id: 1,
      img: g2,
    },
    {
      id: 2,
      img: g3,
    },
    {
      id: 3,
      img: g4,
    },
    {
      id: 4,
      img: g5,
    },
    {
      id: 5,
      img: g6,
    },
    {
      id: 6,
      img: g7,
    },
    {
      id: 7,
      img: g1,
    },
    {
      id: 8,
      img: g2,
    },
  ];
  const webLinks = [
    {
      key: 1,
      img: youtube,
    },
    {
      key: 2,
      img: facebook,
    },
    {
      key: 3,
      img: instagram,
    },
    {
      key: 4,
      img: plus,
    },
  ];
  const [custom, setCustom] = useState(false);
  const [bg, setBg] = useState("white");
  const [gColor, setGColor] = useState(false);
  const [color, setColor] = useState("");
  return (
    <div className={style.googleHomeWrapper} style={{ backgroundColor: bg }}>
      {/*-------------------------- Nav Bar-------------------------- */}

      <nav className={style.navWrapper1}>
        <div className={style.left1}>
          <PublicIcon style={{ marginRight: "3px", fontSize: "14px" }} /> New
          Tab
        </div>
        <div className={style.right1}>
          <div className={style.vLine}></div>
          <div className={style.rContent}>
            <NoteAddIcon
              style={{
                marginRight: "10px",
                fontSize: "20px",
                color: "rgb(232, 182, 0)",
              }}
            />
            All Bookmarks
          </div>
        </div>
      </nav>
      {/* ------------------------Nav Bar 2-------------------- */}

      <nav className={style.navWrapper2}>
        <div className={style.right2}>
          <span
            className={style.rightSpan}
            onClick={() => {
              setOption(false);
            }}
          >
            Gmail
          </span>
          <span
            className={style.rightSpan}
            onClick={() => {
              setOption(false);
            }}
          >
            Images
          </span>
          <div
            className={style.grid}
            onClick={() => {
              setOption((prev) => {
                return !prev;
              });
            }}
          >
            <ViewCompactIcon className={style.moreOption} />
          </div>
          <span
            className={style.account}
            onClick={() => {
              setOption(false);
            }}
          >
            T
          </span>
        </div>
        <div
          className={style.moreOptionWrapper}
          style={{ opacity: option ? "1" : "0" }}
        >
          {imagesMoreOption.map((img) => {
            return <img key={img.id} src={img.img} />;
          })}
        </div>
      </nav>
      {/*-------------------------------------------- main Content--------------------------------------------- */}
      <div className={style.mainContent}>
        {/* -------------Google Heading----- */}
        <h1 className={style.heading}>
          <span
            className={style.google1}
            style={{ color: gColor ? color : "rgb(53, 137, 239)" }}
          >
            G
          </span>
          <span
            className={style.google2}
            style={{ color: gColor ? color : "red" }}
          >
            o
          </span>
          <span
            className={style.google3}
            style={{ color: gColor ? color : "rgb(255, 213, 0)" }}
          >
            o
          </span>
          <span
            className={style.google5}
            style={{ color: gColor ? color : "rgb(53, 137, 239)" }}
          >
            g
          </span>
          <span
            className={style.google4}
            style={{ color: gColor ? color : "green" }}
          >
            l
          </span>
          <span
            className={style.google2}
            style={{ color: gColor ? color : "red" }}
          >
            e
          </span>
        </h1>
        {/* ----------------------------Google Search Bar------------------------- */}

        <div className={style.searchWrapper}>
          <SearchIcon className={style.searchIcon} />
          <input type="text" placeholder="Search Google or type a URL"></input>
          <MicIcon className={style.mic} />
          <FilterCenterFocusIcon className={style.googleLens} />
        </div>

        {/* -----------------------------Recent Links---------------------------- */}

        <div className={style.linkBox}>
          {webLinks.map((link) => {
            return (
              <div key={link.key} className={style.websiteIconWrapper}>
                <div className={style.websiteIcon}>
                  <img src={link.img} alt="img" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --------------------------------------Custom Google Page--------------------------------------------- */}
      <div className={style.customizeWrapper}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setCustom((prev) => {
              return !prev;
            });
          }}
        >
          <ModeIcon style={{ marginRight: "5px", fontSize: "18px" }} />
          Customise chrome
        </div>
        <div
          onClick={() => {
            setBg("#e5cff78b");
            setGColor(true);
            setColor("#e5cff7");
          }}
          className={`${style.circles} ${style.c1}`}
          style={{
            transform: custom
              ? "translateX(-100px) translateY(-45px) scale(1)"
              : "translateX(0px) translateY(0px) scale(0)",
            opacity: custom ? "1" : "0",
          }}
        ></div>
        <div
          onClick={() => {
            setBg("#d0e7d279");
            setGColor(true);
            setColor("#d0e7d2fc");
          }}
          className={`${style.circles} ${style.c2}`}
          style={{
            transform: custom
              ? "translateX(-50px) translateY(-45px) scale(1)"
              : "translateX(0px) translateY(0px) scale(0)",
            opacity: custom ? "1" : "0",
          }}
        ></div>
        <div
          onClick={() => {
            setBg("#aed2ff75");
            setGColor(true);
            setColor("#aed2ff");
          }}
          className={`${style.circles} ${style.c3}`}
          style={{
            transform: custom
              ? "translateX(0px) translateY(-45px) scale(1)"
              : "translateX(0px) translateY(0px) scale(0)",
            opacity: custom ? "1" : "0",
          }}
        ></div>
        <div
          onClick={() => {
            setBg("#c0826168");
            setGColor(true);
            setColor("#c08261");
          }}
          className={`${style.circles} ${style.c4}`}
          style={{
            transform: custom
              ? "translateX(50px) translateY(-45px) scale(1)"
              : "translateX(0px) translateY(0px) scale(0)",
            opacity: custom ? "1" : "0",
          }}
        ></div>
        <div
          onClick={() => {
            setBg("#fff3da6a");
            setGColor(true);
            setColor("#ffc446");
          }}
          className={`${style.circles} ${style.c5}`}
          style={{
            transform: custom
              ? "translateX(100px) translateY(-45px) scale(1)"
              : "translateX(0px) translateY(0px) scale(0)",
            opacity: custom ? "1" : "0",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
