import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from "../utils/constants"

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;
  const snippet = video?.snippet;
  return (
    <Card sx={{
      width: { md: '320px', xs: '100%' },
      // flexGrow: '1',
      boxShadow: 'none',
      borderRadius: '10px',
      border: 'none',
      backgroundColor: 'transparent'
    }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
          image={snippet?.thumbnails?.high?.url} />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            color={"#FFF"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle2"
            fontWeight={"bold"}
            color={"gray"}>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard