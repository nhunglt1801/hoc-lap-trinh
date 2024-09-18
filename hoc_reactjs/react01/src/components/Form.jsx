import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState({});
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Validate
    const errors = {};
    if (!form.name) {
      errors.name = "Vui lòng nhập tên";
    }
    if (!form.email) {
      errors.email = "Vui lòng nhập email";
    }
    if (!Object.keys(errors).length) {
      console.log("Thành công");
      setUsers([...users, { name: form.name, email: form.email }]);
      setForm({});
    }
    setMsg(errors);
    // Kiểm trả nếu validate thành công => Log ra chữ thành công
    // Ngược lại: hiển thị lỗi ở từng ô input
  };
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRemove = (index) => {
    if (window.confirm("Chắc chưa?")) {
      setUsers(users.filter((_, _index) => _index !== index));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChangeValue}
            type="text"
            name="name"
            placeholder="Name..."
            value={form.name ?? ""}
          />
          {msg.name && <p>{msg.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChangeValue}
            type="email"
            name="email"
            placeholder="Email..."
            value={form.email ?? ""}
          />
          {msg.email && <p>{msg.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h2>Danh sách người dùng</h2>
      {users.map(({ name, email }, index) => (
        <p key={index}>
          {name} - {email}
          <button
            onClick={() => {
              handleRemove(index);
            }}
          >
            &times;
          </button>
        </p>
      ))}
    </>
  );
};

export default Form;
