import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";

interface FloatingButtonsProps {
  showPrintButton?: boolean;
  onPrint?: () => void;
  onAdd?: () => void;
}

export default function FloatingButtons({
  showPrintButton,
  onPrint,
  onAdd,
}: FloatingButtonsProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fab
        onClick={onAdd}
        style={{ marginBottom: "15px" }}
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      {showPrintButton && (
        <Fab onClick={onPrint} color="secondary" aria-label="add">
          <PrintIcon />
        </Fab>
      )}
    </div>
  );
}
