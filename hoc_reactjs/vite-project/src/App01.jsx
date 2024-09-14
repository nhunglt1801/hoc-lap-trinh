// import Header from "./components/Header";
import Input from "./components/Input";
const App = function () {
  //   const handleClick = () => {
  //     console.log("Click me");
  //   };
  //   const handleClick2 = (value) => {
  //     console.log(value);
  //   };
  //   const handleChangeValue = (e) => {
  //     const value = e.target.value;
  //     console.log(value);
  //   };
  //   const user = {
  //     name: "Hoàng An",
  //     email: "hoanganit@gmail.com",
  //   };
  const handleChangeValue = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  return (
    <>
      {/* <Header title="F8" {...user}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iure hic et. Hic quia inventore ad a sed ipsum fugiat. Excepturi,
          libero ducimus eaque voluptatem natus repellat laborum qui
          exercitationem!
        </p>
      </Header>
      <h1>Đây là trang chủ</h1>
      <div>
        <input
          type="text"
          placeholder="Nhập tên"
          onChange={handleChangeValue}
        />
      </div>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClick2("F8");
        }}
      >
        Click me 2
      </button> */}
      <Input onChange={handleChangeValue} />
    </>
  );
};

export default App;
