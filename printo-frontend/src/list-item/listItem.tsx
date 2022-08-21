import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface FileListProps {
  file: File;
  onDelete?: (file: File) => void;
}

export default function FileListItem({ file, onDelete }: FileListProps) {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          onClick={() => onDelete && onDelete(file)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <AttachFileIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {file.name}
            </div>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
