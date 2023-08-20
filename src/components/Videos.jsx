import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from "./"
const Videos = ({ videos }) => {
  console.log(videos)
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
    >
      {videos.map((video, index) => (
        ((video.id).videoId || (video.id).channelId) && <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos