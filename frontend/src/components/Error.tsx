import { useEffect } from "react";
import Box from "@mui/material/Box";
import error_image from './../assets/error_image.png';

export default function Error(props: { message: { error: string } }) {
  const { message } = props;

  function alertMessage() {
    alert(message.error);
  }

  useEffect(alertMessage, []);

  return (
    <Box>
      <img src={error_image} height={300} width={300} />
    </Box>
  )
}