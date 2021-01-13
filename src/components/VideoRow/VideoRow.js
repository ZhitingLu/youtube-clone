import React from "react";
import "./VideoRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const VideoRow = ({
  image,
  title,
  views,
  timestamp,
  channelImage,
  channel,
  verified,
  description,
  New,
  CC,
}) => {
  return (
    <>
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p>
          {views} views • {timestamp}
        </p>
        <p className="videoRow__channel">
            <Avatar className="videoRow__logo" alt={channel} src={channelImage} /> {channel}{verified && <CheckCircleIcon />}
        </p>
        <p>{description}</p>
        <p>
            {New && <h4>New</h4>}
        </p>
       
      </div>
    </div>
    </>
  );
};

export default VideoRow;
