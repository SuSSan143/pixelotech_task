import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CommentText from "./CommentText";

const Card = (props) => {
  return (
    <Box
      sx={{
        background: "white",
        boxShadow: 3,
        height: "180px",
        width: "230px",
        borderRadius: "7px",
        "&:hover": {
          transform: "scale(1.08)",
        },
      }}
    >
      <Link underline="none" onClick={() => props.click(props)}>
        <Typography
          sx={{ display: "flex", justifyContent: "flex-end", px: "5px" }}
          variant="overline"
          display="block"
          gutterBottom
        >
          {props.type}
        </Typography>
        <Box>
          <Avatar
            alt="Remy Sharp"
            src={props.src}
            sx={{
              width: 56,
              height: 56,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            color: 'black'
          }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {props.name}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <CommentText>RS. {props.price}</CommentText>
        </Box>
      </Link>
    </Box>
  );
};

export default Card;
