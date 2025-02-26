import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const actions = [
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    link: "https://www.facebook.com/djsin.djsin",
  },
  // { icon: <TwitterIcon />, name: "Twitter", link: "https://twitter.com" },
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ireshnimantha/",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    link: "https://github.com/Iresh-Nimantha",
  },
];

export default function SocialMediaSpeedDial() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1000,
        "@media (max-width: 600px)": {
          bottom: 8,
          right: 8,
        },
      }}
    >
      <SpeedDial
        ariaLabel="Social Media Links"
        icon={<SpeedDialIcon sx={{ color: "white", bgcolor: "darkblue" }} />}
        FabProps={{
          sx: {
            bgcolor: "darkblue",
            "&:hover": { bgcolor: "#000066" },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, "_blank")}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
