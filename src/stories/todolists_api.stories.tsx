import React, { useEffect, useState } from "react";
import { todolistsAPI } from "../api/todolists-api";
import { title } from "process";
// import { createTasks } from "./todolists_api.stories";

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
  const [todolistId, setTodolistId] = useState<any>(null);
  //   useEffect(() => {
  //     const todolistId = "fb69daaf-5679-488d-83fd-d2657435a4c1";

  //     todolistsAPI.getTasks(todolistId).then((res) => {
  //       setState(res.data);
  //     });
  //   }, []);

  const getTasks = () => {
    todolistsAPI.getTasks(todolistId).then((res) => {
      setState(res.data);
    });
  };
  return (
    <div>
      {JSON.stringify(state)}
      <input
        placeholder={"todolistId"}
        value={todolistId}
        onChange={(e) => setTodolistId(e.currentTarget.value)}
      />

      <button onClick={getTasks}>getTasks</button>
    </div>
  );
};
export const CreateTasks = () => {
  const [state, setState] = useState<any>(null);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [todolistId, setTodolistId] = useState<string>("");
  const createTasks = () => {
    //  const todolistId = "fb69daaf-5679-488d-83fd-d2657435a4c1";
    //  const taskId="fb69daaf-5679"
    //  const title = "hellowiiii";
    todolistsAPI.createTasks(todolistId, taskTitle).then((res) => {
      setState(res.data);
    });
  };
  return (
    <div>
      {JSON.stringify(state)}

      <div>
        <input
          type="text"
          placeholder={"todolistId"}
          value={todolistId}
          onChange={(e) => setTodolistId(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder={"taskTitle"}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.currentTarget.value)}
        />
        ;<button onClick={createTasks}>createTask</button>
      </div>
    </div>
  );
};
export const deleteTasks = () => {
  const [state, setState] = useState<any>(null);
  const [todolistId, setTodolistId] = useState<string>("");
  const [taskId, setTaskId] = useState<string>("");

  //   useEffect(() => {
  //     const todolistId = "fb69daaf-5679-488d-83fd-d2657435a4c1";
  //     const taskId = "354d5fad-5d74-4d50-afdb-6f0d7454c368";
  //     todolistsAPI.deleteTasks(todolistId, taskId).then((res) => {
  //       setState(res.data);
  //     });
  //   }, []);

  const deleteTask = () => {
    todolistsAPI.deleteTasks(todolistId, taskId).then((res) => {
      setState(res.data);
    });
  };
  return (
    <div>
      {JSON.stringify(state)}

      <div>
        <input
          type="text"
          placeholder="todolistId"
          value={todolistId}
          onChange={(e) => setTodolistId(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="taskId"
          value={taskId}
          onChange={(e) => setTaskId(e.currentTarget.value)}
        />

        <button onClick={deleteTask}>del</button>
      </div>
    </div>
  );
};
export const updateTasks = () => {
  const [state, setState] = useState<any>(null);
  const [title, setTaskTitle] = useState<string>("");
  const [description, setTaskDescription] = useState<string>("");
  const [status, setTaskStatus] = useState<number>(0);
  const [priority, setPriority] = useState<number>(0);
  const [startDate, setStardate] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [taskId, setTaskId] = useState<string>("");
  const [todolistId, setTodolistId] = useState<string>("");

  const createTask = () => {
    todolistsAPI
      .updateTasks(todolistId, taskId, {
        deadline: "",
        title: title,
        description: description,
        priority: priority,
        startDate: "",
        status: status,
      })
      .then((res) => {
        setState(res.data);
      });
  };
  return (
    <div>
      {JSON.stringify(state)}
      <div>
        <input
          type="text"
          placeholder="todolistId"
          value={todolistId}
          onChange={(e) => setTodolistId(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="tackTitle"
          value={title}
          onChange={(e) => setTaskTitle(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="taskDescription"
          value={description}
          onChange={(e) => setTaskDescription(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="status"
          value={status}
          onChange={(e) => setTaskStatus(+e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="priority"
          value={priority}
          onChange={(e) => setPriority(+e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="startDate"
          value={startDate}
          onChange={(e) => setStardate(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="taskId"
          value={taskId}
          onChange={(e) => setTaskId(e.currentTarget.value)}
        />
        

        <button onClick={createTask}>update</button>
      </div>
    </div>
  );
};
