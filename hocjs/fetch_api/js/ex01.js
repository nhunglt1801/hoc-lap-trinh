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
const cancelBtn = document.createElement("button");
cancelBtn.classList = "btn btn-danger";
cancelBtn.type = "button";
cancelBtn.innerText = "Hủy";
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
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};
const getUsers = async (query = {}) => {
  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

    let queryString = new URLSearchParams(query).toString();
    // console.log(queryString);
    if (queryString) {
      queryString = "?" + queryString;
    }
    const response = await fetch(`${serverApi}/users${queryString}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    const users = await response.json();
    render(users);
    // Tính số trang = Math.ceil(Tổng số bản ghi / Số bản ghi của một trang);
    const totalPages = Math.ceil(
      response.headers.get("x-total-count") / query._limit
    );
    // console.log(totalPages);
    renderPagination(totalPages);
  } catch (e) {
    console.log(e);
  }
};
const render = (users) => {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = `${users
    .map(({ id, name, email, status }, index) => {
      return `
    <tr>
        <td>${index + 1}</td>
        <td>${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
        <td>${email.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
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
const renderPagination = (totalPages) => {
  const paginationViewEl = document.querySelector(".pagination-view");
  paginationViewEl.innerHTML = `
              <ul class="pagination d-flex justify-content-end">
                ${
                  query._page > 1
                    ? `<li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" data-type="prev">&laquo;
                    </a>
                </li>`
                    : ""
                }
                ${Array.from(Array(totalPages).keys())
                  .map((_, index) => {
                    const page = index + 1;
                    return `<li class="page-item ${
                      page === query._page ? "active" : ""
                    }" ><a class="page-link" href="#" data-page=${page}>
                  ${page}</a></li>`;
                  })
                  .join("")}
               ${
                 query._page < totalPages
                   ? ` <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" data-type="next">
                        &raquo;
                    </a>
                </li>`
                   : ""
               }
            </ul>`;
};
const handlePagination = () => {
  const paginationEl = document.querySelector(".pagination-view");
  paginationEl.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    const type = e.target.dataset.type;
    if (page) {
      query._page = +page;
      getUsers(query);
    }
    if (type === "prev") {
      query._page--;
      getUsers(query);
    }
    if (type === "next") {
      query._page++;
      getUsers(query);
    }
  });
};

const handleAddUser = async () => {
  const form = document.querySelector(".update-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // const formData = Array.from(new FormData(form));
    const formData = Object.fromEntries(new FormData(form));
    const action = form.dataset.action;
    const id = form.dataset.id;
    if (!id) {
      const status = await addUser(formData);
      if (status) {
        // Thêm thành công
        query._page = 1; //Chuyển về trang 1
        query._order = "desc";
        getUsers(query);
        renderSort();
        form.reset();
      }
    } else {
      const status = await updateUser(id, formData);
      if (status) {
        getUsers(query);
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
  cancelBtn.remove();
};
const handleUpdateUser = () => {
  const tbody = document.querySelector("table tbody");
  tbody.addEventListener("click", async ({ target }) => {
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
const handleDeleteUser = () => {
  const tbody = document.querySelector("table tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    console.log(action);
    console.log(id);
    if (action === "delete" && confirm("Chắc chưa?")) {
      const status = await deleteUser(id);
      console.log(status);
      if (!status) {
        alert("Đã có lỗi xảy ra");
        return;
      }
      const remainUser = document.querySelectorAll("tbody tr").length - 1;
      if (remainUser === 0 && query._page > 1) {
        query._page--;
        getUsers(query);
      }
      getUsers(query);
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
  form.append(cancelBtn);
};
const cancelUpdateForm = () => {
  cancelBtn.addEventListener("click", () => {
    switchFormAdd();
  });
};
const debounce = (callback, timeout = 500) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};
const handleSearch = () => {
  const keywordEl = document.querySelector(".keyword");
  keywordEl.addEventListener(
    "input",
    debounce((e) => {
      const keyword = e.target.value;
      query.q = keyword;
      getUsers(query);
    })
  );
};
const renderSort = () => {
  const btnEl = document.querySelector(".btn-sort");
  btnEl.innerHTML = `
  <button class="btn btn-primary btn-sm ${
    query._order === "desc" ? "active" : ""
  } new" data-sort="latest">Mới nhất</button>
  <button class="btn btn-primary btn-sm old ${
    query._order === "asc" ? "active" : ""
  }" data-sort="oldest">Cũ nhất</button>`;
};
const handleSort = () => {
  const btnEl = document.querySelector(".btn-sort");
  const allowed = ["latest", "oldest"];
  btnEl.addEventListener("click", ({ target }) => {
    const sort = target.dataset.sort;
    if (allowed.includes(sort)) {
      // Xử lý gọi API
      query._order = sort === "latest" ? "desc" : "asc";
      getUsers(query);
      // const btnActive = btnEl.querySelector(".active");
      // if (btnActive) {
      //   btnActive.classList.remove("active");
      // }
      // target.classList.add("active");
      renderSort();
    }
  });
};
const query = {
  _sort: "id",
  _order: "desc",
  _limit: 3,
  _page: 1,
};
getUsers(query);
handleAddUser();
handleUpdateUser();
cancelUpdateForm();
handleDeleteUser();
handleSearch();
handleSort();
handlePagination();
renderSort();
// Kỹ thuật debounce
// Kỹ thuật throttle => Tìm hiểu

// Bình thường các API sẽ ở trạng thái public
// Tuy nhiên muốn bảo vệ API ==> cần phải thông qua các hình thức xác thực

/**
 * - API key
 * - Basic Auth
 * - Bearer
 * - OAuth 2.0
 *
 */
