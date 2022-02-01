import React, { useState, useContext } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Check from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { ListItem } from "@mui/material";
import { Button } from "@mui/material";
import Listing from "./Listing";
import { ListContext } from "./List";

export const ListI = () => {
  const [list, setList] = useContext(ListContext);
  const [home, setHome] = useState(false);
  function back() {
    setHome(true);
  }
  if (home !== true) {
    return (
      <div key="9090">
        <List
          sx={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            width: "360px",
            maxWidth: "360px",
            height: "411px",
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
          {Boolean(list.length > 0) &&
            list.map((LI) => {
              if (LI.complete === false) {
                return (
                  <>
                    <ListItem key={LI.key}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary={LI.name} />
                      <ListItemButton>
                        <ListItemIcon>
                          <DeleteIcon />
                        </ListItemIcon>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <Check />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </>
                );
              }
            })}
          {Boolean(list.length === 0) && (
            <h1>Não há tarefas incompletas no momento</h1>
          )}

          <Button
            onClick={back}
            variant="outlined"
            sx={{ margin: "10%" }}
            type="reset"
          >
            Voltar
          </Button>
        </List>
      </div>
    );
  } else {
    return <Listing />;
  }
};
