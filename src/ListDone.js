import React, { useState, useContext } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import FastRewind from "@mui/icons-material/FastRewind";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import Listing from "./Listing";
import { ListContext } from "./List";

export const ListDone = () => {
  const [list, setList] = useContext(ListContext);
  console.log(list);
  const [home, setHome] = useState(false);
  function back() {
    setHome(true);
  }
  if (home === false) {
    return (
      <div>
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
            list.map((LD) => {
              if (LD.complete) {
                return (
                  <>
                    <ListItem>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary={LD.name} />
                      <ListItemButton>
                        <FastRewind />
                      </ListItemButton>
                    </ListItem>
                  </>
                );
              } else {
                return <h1>Não existem tarefas completas no momento</h1>;
              }
            })}
          {Boolean(list.length === 0) && (
            <h1>Não existem tarefas completas no momento</h1>
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
