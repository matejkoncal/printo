import { Backdrop, CircularProgress } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

interface BackdropProps {
  open?: boolean;
  text?: string;
  done?: boolean;
}
export default function PrintingFileBackDrope({
  open,
  text,
  done,
}: BackdropProps) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!!open}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!done && <CircularProgress color="inherit" />}
        {done && <DoneIcon fontSize="large" />}
        {text}
      </div>
    </Backdrop>
  );
}
