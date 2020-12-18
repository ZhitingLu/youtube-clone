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
                    title="30 MIN KILLER Lower Body HIIT Workout - No Repeat, No equipment"
                    views="50K views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gjfn0kKY5I5YvWTPcmiHdWGgHr3N8tcJD8Zng=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="growingannanas"
                    image="https://i.ytimg.com/an_webp/8-PjpUH8TcE/mqdefault_6s.webp?du=3000&sqp=CIC98v4F&rs=AOn4CLCsMQ78yNtn7vKQ6W5331EAjXtZFg"
                />
                <VideoCard
                    title="Christmas Apple Crumble | Jamie Oliver"
                    views="232K views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GifoxU8Loi7IM4ei_Iqm4KXsUDvz2lWyl4arg=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Jamie Oliver"
                    image="https://i.ytimg.com/an_webp/A2JVmkdcNUs/mqdefault_6s.webp?du=3000&sqp=CPqi8v4F&rs=AOn4CLBfg9X6ZOL2oC912q6cjUe5jnG-PA"
                />
                <VideoCard
                     title="Docker Tutorial for Beginners - A Full DevOps Course on How to Run Applications in Containers"
                     views="877K views"
                     timestamp="1 year ago"
                     channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"
                     channel="freeCodeCamp.org"
                     image="https://i.ytimg.com/an_webp/fqMOX6JJhGo/mqdefault_6s_480x270.webp?du=3000&sqp=COC88v4F&rs=AOn4CLDdjAaXm5rPo-SZx88-ukZG7ncgeA"
                 />
                <VideoCard 
                 title="VEGAN PEANUT SATAY RAMEN RECIPE | SO EASY SOUP BROTH!!(ビーガンラーメンの作り方)"
                 views="486K views"
                 timestamp="8 months ago"
                 channelImage="https://yt3.ggpht.com/a-/AOh14Gh4ywDocTtsDYtmiw_cwccMq_cVo52QtrwilA=s68-c-k-c0x00ffffff-no-rj-mo"
                 channel="Yeung Man Cooking"
                 image="https://i.ytimg.com/an_webp/fM3YG7jE_Ys/mqdefault_6s.webp?du=3000&sqp=CNvI8v4F&rs=AOn4CLB_UsxNKS_RJQVGxCdAQou4FXucgQ"
                />
                <VideoCard 
                 title="600 Calorie Burn Jump Rope Workout"
                 views="2.5M views"
                 timestamp="3 years ago"
                 channelImage="https://yt3.ggpht.com/a-/AOh14GgGDpq1AW3VX8-_U52XBhDR1wB6C4PcOy5Srg=s68-c-k-c0x00ffffff-no-rj-mo"
                 channel="Jump Rope Dudes"
                 image="https://i.ytimg.com/an_webp/TeThU_Xyl0c/mqdefault_6s.webp?du=3000&sqp=CNLO8v4F&rs=AOn4CLAHoNN2f5Tf6HghTLbhvdGALyKnCQ"
                />
                
               <VideoCard 
                 title="7 High Protein Breakfast For Weight Loss"
                 views="6.1 views"
                 timestamp="1 year ago"
                 channelImage="https://yt3.ggpht.com/a-/AOh14GhRF06oPkVKidO2e3hYdMBNk-VcX6SN2am_Rg=s68-c-k-c0x00ffffff-no-rj-mo"
                 channel="TheSeriousfitness"
                 image="https://i.ytimg.com/an_webp/BfNzk-bmypY/mqdefault_6s_480x270.webp?du=3000&sqp=CP7g8v4F&rs=AOn4CLC5Og4eJnizcXOVB8Onnq_PPtRplw"
                />

               <VideoCard 
                    title="30 MIN KILLER Lower Body HIIT Workout - No Repeat, No equipment"
                    views="50K views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gjfn0kKY5I5YvWTPcmiHdWGgHr3N8tcJD8Zng=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="growingannanas"
                    image="https://i.ytimg.com/an_webp/8-PjpUH8TcE/mqdefault_6s.webp?du=3000&sqp=CIC98v4F&rs=AOn4CLCsMQ78yNtn7vKQ6W5331EAjXtZFg"
                />
                <VideoCard
                    title="Christmas Apple Crumble | Jamie Oliver"
                    views="232K views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GifoxU8Loi7IM4ei_Iqm4KXsUDvz2lWyl4arg=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Jamie Oliver"
                    image="https://i.ytimg.com/an_webp/A2JVmkdcNUs/mqdefault_6s.webp?du=3000&sqp=CPqi8v4F&rs=AOn4CLBfg9X6ZOL2oC912q6cjUe5jnG-PA"
                />
                <VideoCard
                     title="Docker Tutorial for Beginners - A Full DevOps Course on How to Run Applications in Containers"
                     views="877K views"
                     timestamp="1 year ago"
                     channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"
                     channel="freeCodeCamp.org"
                     image="https://i.ytimg.com/an_webp/fqMOX6JJhGo/mqdefault_6s_480x270.webp?du=3000&sqp=COC88v4F&rs=AOn4CLDdjAaXm5rPo-SZx88-ukZG7ncgeA"
                 />
                <VideoCard 
                 title="VEGAN PEANUT SATAY RAMEN RECIPE | SO EASY SOUP BROTH!!(ビーガンラーメンの作り方)"
                 views="486K views"
                 timestamp="8 months ago"
                 channelImage="https://yt3.ggpht.com/a-/AOh14Gh4ywDocTtsDYtmiw_cwccMq_cVo52QtrwilA=s68-c-k-c0x00ffffff-no-rj-mo"
                 channel="Yeung Man Cooking"
                 image="https://i.ytimg.com/an_webp/fM3YG7jE_Ys/mqdefault_6s.webp?du=3000&sqp=CNvI8v4F&rs=AOn4CLB_UsxNKS_RJQVGxCdAQou4FXucgQ"
                />
                <VideoCard 
                 title="600 Calorie Burn Jump Rope Workout"
                 views="2.5M views"
                 timestamp="3 years ago"
                 channelImage="https://yt3.ggpht.com/a-/AOh14GgGDpq1AW3VX8-_U52XBhDR1wB6C4PcOy5Srg=s68-c-k-c0x00ffffff-no-rj-mo"
                 channel="Jump Rope Dudes"
                 image="https://i.ytimg.com/an_webp/TeThU_Xyl0c/mqdefault_6s.webp?du=3000&sqp=CNLO8v4F&rs=AOn4CLAHoNN2f5Tf6HghTLbhvdGALyKnCQ"
                />
                <VideoCard 
                 title="7 High Protein Breakfast For Weight Loss"
                 views="6.1 views"
                 timestamp="1 year ago"
                 channelImage="https://yt3.ggpht.com/a-/AOh14GhRF06oPkVKidO2e3hYdMBNk-VcX6SN2am_Rg=s68-c-k-c0x00ffffff-no-rj-mo"
                 channel="TheSeriousfitness"
                 image="https://i.ytimg.com/an_webp/BfNzk-bmypY/mqdefault_6s_480x270.webp?du=3000&sqp=CP7g8v4F&rs=AOn4CLC5Og4eJnizcXOVB8Onnq_PPtRplw"
                />


            </div>
        </div>
    )
}

export default RecommendedVideos;
