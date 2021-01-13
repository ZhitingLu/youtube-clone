import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  numberOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleIcon />}
        </h4>
        <p>
            {subs} subscribers • {numberOfVideos} videos
        </p>
        <p>
            {description}
        </p>
      </div>
    </div>
  );
};

export default ChannelRow;
