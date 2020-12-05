import React from 'react';
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard';

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                {/* component: video card. props: image, channelImage, title, views, channel name, timestamp */}
                
                <VideoCard 
                    title="EASY VEGAN SUSHI RECIPE | HOW TO MAKE GREEN DRAGON ROLL"
                    views="52K views"
                    timestamp="9 months ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gh4ywDocTtsDYtmiw_cwccMq_cVo52QtrwilA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Yeung Man Cooking"
                    image="https://i.ytimg.com/an_webp/2KDBPL7LGd8/mqdefault_6s.webp?du=3000&sqp=CPaorf4F&rs=AOn4CLBe3KW0I67aaGUndaHCCLmOrsPMNg"
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />

            </div>
        </div>
    )
}

export default RecommendedVideos;
