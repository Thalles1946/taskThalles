import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import List from "./List";
import { Formik, Form } from "formik";
import { TextField, Button, Box } from "@mui/material";
import { func } from "prop-types";

export const ListCriar = () => {
  const Task = Yup.object({
    TaskName: Yup.string().required("Required"),
    Data: Yup.date().required("Required"),
    Time: Yup.string().required("Time is Required"),
  });

  function back() {
    setHome(true);
  }

  const [Home, setHome] = useState(false);
  if (Home !== true) {
    return (
      <Box
        sx={{
          alignItems: "end",
          justifyContent: "center",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <Formik
          initialValues={{
            TaskName: "",
            Data: "",
            Time: "",
          }}
          validationSchema={Task}
          onSubmit={(values) => {
            console.log(values);
            console.log(Formik);
            setHome(true);
          }}
        >
          {(formik) => (
            <div>
              <h1 style={{ fontSize: "28px" }}>CRIE UMA NOVA TAREFA</h1>
              {console.log(formik.values)}
              <Form sx={{ width: "90%" }} onSubmit={formik.handleSubmit}>
                <TextField
                  sx={{ width: "90%" }}
                  onChange={formik.handleChange}
                  value={formik.values.TaskName}
                  label="Task Name"
                  name="TaskName"
                  type="text"
                />
                <TextField
                  sx={{ width: "90%" }}
                  onChange={formik.handleChange}
                  value={formik.values.Data}
                  name="Data"
                  type="date"
                />
                <TextField
                  sx={{ width: "90%" }}
                  name="Time"
                  onChange={formik.handleChange}
                  value={formik.values.Time}
                  type="time"
                />
                <Button
                  onClick={back}
                  variant="outlined"
                  sx={{ margin: "10%" }}
                  type="submit"
                >
                  Registrar
                </Button>
                <Button
                  onClick={back}
                  variant="outlined"
                  sx={{ margin: "10%" }}
                  type="reset"
                >
                  Voltar
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </Box>
    );
  } else {
    return <List />;
  }
};
