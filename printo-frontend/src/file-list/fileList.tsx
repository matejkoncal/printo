import { Paper } from "@mui/material";
import List from "@mui/material/List";

interface FileListProps {
  children: React.ReactNode;
}

export default function FileList({ children }: FileListProps) {
  return (
    <Paper style={{ maxWidth: "700px", width: "100%", opacity: 0.6 }}>
      <List style={{ overflowY: "scroll", maxHeight: "50vh" }}>{children}</List>
    </Paper>
  );
}
