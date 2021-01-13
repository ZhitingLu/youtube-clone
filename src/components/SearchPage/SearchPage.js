import React from "react";
import "./SearchPage.css";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

import TuneIcon from "@material-ui/icons/Tune";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="freeCodeCamp.org"
        verified
        subs="2.99M"
        numberOfVideos={1225}
        description="Learn to code for free."
      />

      <hr />
      <VideoRow
        image="https://i.ytimg.com/an_webp/JwSS70SZdyM/mqdefault_6s.webp?du=3000&sqp=CKjJ8f8F&rs=AOn4CLDYW1034x87pXT3PVSklpDTRfCv_w"
        title="Build 12 Data Science Apps with Python and Streamlit - Full Course"
        views="54K"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"
        channel="freeCodeCamp.org"
        verified
        description="Learn how to build interactive and data-driven web apps in Python using the Streamlit library."
        New
      />
    </div>
  );
};

export default SearchPage;
