import React, { useContext } from "react";
import { useState } from "react";
import * as Yup from "yup";
import List from "./Listing";
import { Formik, Form } from "formik";
import { TextField, Button, Box } from "@mui/material";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import { __esModule } from "styled-components";
import { ListContext } from "./List";

export const ListCriar = () => {
  init("user_Ll0iLP5gTsJskBCOWtvcU");
  const [data, setData] = useState([{}]);

  const [list, setList] = useContext(ListContext);

  const Task = Yup.object({
    TaskName: Yup.string().required("Required"),
    Data: Yup.date().required("Required"),
    Time: Yup.string().required("Time is Required"),
  });

  function back() {
    setHome(true);
  }

  function Submit(e) {
    e.preventDefault(); // Prevents default refresh by the browser
    console.log(Formik);
    console.log(data);
    if (data.TaskName !== "" && data.Data !== "" && data.Time !== "") {
      setHome(true);
      setList((prevTasks) => [
        ...prevTasks,
        {
          name: data.TaskName,
          data: data.Data,
          Time: data.Time,
          complete: false,
          key: Math.random,
        },
      ]);
    }
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
          }}
        >
          {(formik) => (
            <div>
              <h1 style={{ fontSize: "28px" }}>CRIE UMA NOVA TAREFA</h1>
              <Form sx={{ width: "90%" }} onSubmit={formik.handleSubmit}>
                <TextField
                  sx={{ width: "90%", marginBottom: "20px" }}
                  onChange={formik.handleChange}
                  value={formik.values.TaskName}
                  label="Task Name"
                  name="TaskName"
                  type="text"
                />
                <TextField
                  sx={{ width: "90%", marginBottom: "20px" }}
                  onChange={formik.handleChange}
                  value={formik.values.Data}
                  name="Data"
                  type="date"
                />
                <TextField
                  sx={{ width: "90%", marginBottom: "20px" }}
                  name="Time"
                  onChange={formik.handleChange}
                  value={formik.values.Time}
                  type="time"
                />
                <Button
                  onClick={Submit}
                  variant="outlined"
                  sx={{ margin: "10%" }}
                  type="submit"
                >
                  Registrar
                </Button>
                {setData(formik.values)}
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
    return <List list={Formik.values} />;
  }
};
