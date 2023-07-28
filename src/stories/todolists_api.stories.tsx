import React, { useEffect, useState } from "react";
import { todolistsAPI } from "../api/todolists-api";
import { title } from "process";

export default {
  title: "API",
};

// const settings = {
//   withCredentials: true,
//   headers: {
//     "API-KEY": "5b3e08cf-a1a2-43a5-b9d9-093740e5892f",
//   },
// };

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todolistsAPI.getTodolists().then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todolistsAPI.crateTodolist("Yoyo").then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "97e8c1a7-b30b-49ea-ac1e-79079ce20c6c";
    todolistsAPI.deletTodolist(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    debugger;
    const todolistId = "72da0beb-a7f0-4cf2-a8f2-4ffff097d7bf";
    todolistsAPI.updateTodolist(todolistId, "hellow").then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
export const GetTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "fb69daaf-5679-488d-83fd-d2657435a4c1";
    todolistsAPI.getTasks(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const createTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "fb69daaf-5679-488d-83fd-d2657435a4c1";
   //  const taskId="fb69daaf-5679"
   //  const title = "hellowiiii";
    todolistsAPI.createTasks(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const deleteTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "fb69daaf-5679-488d-83fd-d2657435a4c1";
    const taskId = "354d5fad-5d74-4d50-afdb-6f0d7454c368";
    todolistsAPI.deleteTasks(todolistId, taskId).then((res) => {
      setState(res.data);
    });
  }, []);

  const deleteTask = () => {};
  return (
    <div>
      {JSON.stringify(state)}

      {/* <div><button onClick={deleteTask}>del</button></div> */}
    </div>
  );
};
export const updateTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "fb69daaf-5679-488d-83fd-d2657435a4c1";
    const taskId = "354d5fad-5d74-4d50-afdb-6f0d7454c368";
   //  const title = "hellow";
    todolistsAPI.updateTasks(todolistId, taskId, { title }).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
