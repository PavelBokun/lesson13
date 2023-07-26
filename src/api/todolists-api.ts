import axios from "axios";

const settings = {
  withCredentials: true,
  headers: {
    "API-KEY": "5b3e08cf-a1a2-43a5-b9d9-093740e5892f",
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
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
});

export type ResponseType<D> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};

type TasksType = {
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
export type GetTasksType = {
  error: string;
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
    const promise = instanse.delete<ResponseType<{}>>(`todo-lists/${id}`);
    return promise;
  },
  updateTodolist(id: string, title: string) {
    const promise = instanse.put<ResponseType<{}>>(`todo-lists/${id}`, {
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
};
