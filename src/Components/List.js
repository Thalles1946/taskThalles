import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { ListCriar } from "./ListCriar";
import { ListI } from "./ListComp";
import { ListDone } from "./ListDone";

export default function NestedList() {
  const [pageNumber, setPageNumber] = React.useState(0);

  const tarefaC = () => {
    setPageNumber(1);
  };

  const tarefaIn = () => {
    setPageNumber(2);
  };

  const handleClick = () => {
    setPageNumber(3);
  };

  if (pageNumber === 0) {
    return (
      <div>
        <List
          sx={{
            alignItems: "end",
            justifyContent: "center",
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Lista de Tarefas
            </ListSubheader>
          }
        >
          <ListItemButton onClick={tarefaC}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Criar Tarefa" />
          </ListItemButton>
          <ListItemButton onClick={tarefaIn}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Tarefas Incompletas" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Tarefas Completas" />
          </ListItemButton>
        </List>
      </div>
    );
  }
  if (pageNumber === 3) {
    return <ListI />;
  }
  if (pageNumber === 2) {
    return <ListDone />;
  }
  if (pageNumber === 1) {
    return <ListCriar />;
  }
}
