const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

// получить список задач
export async function getTodos({ token }) {
  
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
  }
  
  export async function postToDo({ title, topic, description, date, token }) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
      method: "POST",
      body: JSON.stringify({
        title,
        topic,
        description,
        date,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }
    const data = await response.json();
    return data;
  }
  
//   export async function registration(name, login, password) {
//     const response = await fetch("https://wedev-api.sky.pro/api/user", {
//       method: "POST",
//       body: JSON.stringify({
//         name,
//         login,
//         password,
//       }),
//     });
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.error);
//     }
//     const data = await response.json();
//     return data;
//   }

  export async function registration({ login, name, password }) {
    const response = await fetch("https://wedev-api.sky.pro/api/user", {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Пользователь уже зарегистрирован");
    }
    const data = await response.json();
  
    return data;
  }

  export async function loginUser(login, password) {
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    });
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    const data = await response.json();
    return data;
  }
  
  export async function editTodo({
    title,
    status,
    topic,
    description,
    date,
    id,
    token,
  }) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        topic,
        description,
        date,
        status,
      }),

    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }
    const data = await response.json();
    return data;
  }
  
  export async function deleteTodo({ id, token }) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }
    const data = await response.json();
    return data;
  }