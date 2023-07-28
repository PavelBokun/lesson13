import axios from "axios";
import { title } from 'process';

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "073a34da-9f7d-44f8-b59a-d7955f4f8e73",
  },
};

export type TodolistType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};
export type CreateTodolist = {
  resultCode: number;
  messages: Array<string>;
  data: {
    item: TodolistType;
  };
};

// export type DeleteTodlists={
//     resultCode: number
//     messages: Array<string>,
//     data: {}
// }
// export type UpdateTodlists={
//     resultCode: number
//     messages: Array<string>,
//     data: {}
// }

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.1",
});

export type ResponseType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};

export type TasksType = {
  description: string;
  title: string;
  completed: boolean;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};
export type UpdateTasksType = {
  description?: string;
  title?: string;
  status?: number;
  priority?: number;
  startDate?: string;
  deadline?: string;
};

export type GetTasksType = {
  error: string;
  totalCount: number;
  item: TasksType[];
};
export type CreateTasksType = {
    data:{}
    totalCount: number;
    item: TasksType[];
  };
export const todolistsAPI = {
  getTodolists() {
    const promise = instanse.get<Array<TodolistType>>("todo-lists");
    return promise;
  },
  crateTodolist(title: string) {
    const promise = instanse.post<CreateTodolist>("todo-lists", {
      title: title,
    });
    return promise;
  },
  deletTodolist(id: string) {
    const promise = instanse.delete<ResponseType>(`todo-lists/${id}`);
    return promise;
  },
  updateTodolist(id: string, title: string) {
    const promise = instanse.post<ResponseType>(`todo-lists/${id}`, {
      title: title,
    });
    return promise;
  },

  getTasks(todolistId: string) {
    const promise = instanse.get<GetTasksType>(
      `todo-lists/${todolistId}/tasks`
    );
    return promise;
  },
  createTasks(todolistId: string) {
    const promise = instanse.post<CreateTasksType>(
      `todo-lists/${todolistId}/tasks`,{title:"hellowBaby"}
    );
    return promise;
  },
  deleteTasks(todolistId: string, taskId: string) {
    const promise = instanse.delete<ResponseType>(
      `todo-lists/${todolistId}/tasks/${taskId}`
    );
    return promise;
  },
  updateTasks(todolistId: string, taskId: string, model: UpdateTasksType) {
    const promise = instanse.put<UpdateTasksType>(
      `todo-lists/${todolistId}/tasks/${taskId}`,
      { title: "hi" }
    );
    return promise;
  },
};
