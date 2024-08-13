/**
 * API Application Programming Interface
 * Khi làm việc với web API ==> Học HTTP
 * Client (Front-end) ==> API ==> Server (Back-end)
 *
 * Để giao tiếp giữa client và server ==> có 2 cách:
 * - XHR
 * - Fetch
 *
 * Chuẩn bị server:
 * - Tìm dịch vụ fake
 * - Cài thư viện và tự fake trên máy local
 *
 * HTTP Request:
 * - URL
 * - METHOD
 * - HEADER
 * - BODY
 *
 * HTTP Response
 * - BODY
 * - STATUS : code, text
 * - HEADER
 *
 * Nhóm phương thức đẩy dữ liệu lên
 * - POST, PUT, PATCH
 *  - body
 *  - header content-type
 *    + application/json
 *    + application/x-www-form-urlencoded (name=Hoang+An&email=hoangan@gmail.com)
 *    + multipart/form-data
 *
 *
 * - POST: đẩy dữ liệu lên và thêm mới dữ liệu
 * - PUT: đẩy dữ liệu lên và update overwrite
 * - PATCH: đẩy dữ liệu lên và update từng key
 */

// const url = `http://localhost:3000/users`;
// const userPromise = fetch(url, {
//   method: "GET",
//   header: {
//     "x-api-key": "ahihi",
//   },
// });
// userPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => console.log(users));

const serverApi = `http://localhost:3000`;
const getUsers = async () => {
  try {
    const response = await fetch(`${serverApi}/users`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    const users = await response.json();
    render(users);
  } catch (e) {
    console.log(e);
  }
};

const addUser = async (data) => {
  try {
    const response = await fetch(`${serverApi}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const getUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    return response.json();
  } catch {
    return false;
  }
};
const updateUser = async (id, data) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const deleteUser = async (id) => {
  try {
    await fetch(`${serverApi}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    return false;
  }
};
const render = (users) => {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = `${users
    .map(({ id, name, email, status }, index) => {
      return `
    <tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td><span class="badge bg-${
          status === "active" ? "success" : "warning"
        }">${status === "active" ? "Kích hoạt" : "Chưa kích hoạt"}</span></td>
        <td>
            <button class="btn btn-warning btn-sm" data-id="${id}" data-action="update">Sửa</button>
        </td>
        <td>
            <button class="btn btn-danger btn-sm" data-id="${id}" data-action="delete">Xóa</button>
        </td>
    </tr>
    `;
    })
    .join("")}`;
};
const handleAddUser = async () => {
  const form = document.querySelector(".update-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // const formData = Array.from(new FormData(form));
    const formData = Object.fromEntries(new FormData(form));
    const id = form.dataset.id;
    if (!id) {
      const status = await addUser(formData);
      if (status) {
        // Thêm thành công
        getUsers();
        form.reset();
      }
    } else {
      const status = await updateUser(id, formData);
      if (status) {
        getUsers();
        switchFormAdd();
      }
    }
  });
};
const switchFormAdd = () => {
  const form = document.querySelector(".update-form");
  form.reset();
  const h3 = form.querySelector("h3");
  h3.innerText = `Thêm người dùng`;
  delete form.dataset.id;
};
const handleUpdateUser = () => {
  const tbody = document.querySelector("table tbody");
  tbody.addEventListener("click", async ({ target }) => {
    // const action = e.target.dataset.action;
    // const id = e.target.dataset.id;
    // console.log(target.dataset);
    const { action, id } = target.dataset;
    if (action === "update") {
      const user = await getUser(id);
      if (!user) {
        alert("Đã có lỗi xảy ra. Vui lòng thử lại sau");
        return;
      }
      changeFormUpdate(user);
    }
  });
};

const changeFormUpdate = (user) => {
  const form = document.querySelector(".update-form");
  form.dataset.id = user.id;
  const h3 = form.querySelector("h3");
  h3.innerText = `Cập nhật người dùng`;
  form.elements.name.value = user.name;
  form.elements.email.value = user.email;
  form.elements.status.value = user.status;
};
getUsers();
handleAddUser();
handleUpdateUser();
