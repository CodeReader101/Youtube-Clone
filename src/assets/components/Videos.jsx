import React from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={4} justifyContent="center" direction={direction}>
      {videos.map((item, idx) => {
        if (item.id.videoId && item.snippet) {
          return (
            <Grid item key={idx} xs={12} sm={6} md={6} lg={4}>
              <VideoCard video={item} />
            </Grid>
          );
        } else if (item.id.channelId && item.snippet) {
          return (
            <Grid item key={idx} xs={12} sm={6} md={6} lg={4}>
              <ChannelCard channelDetail={item} />
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
};

export default Videos;
