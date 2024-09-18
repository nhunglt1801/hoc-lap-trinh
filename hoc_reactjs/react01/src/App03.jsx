/**
 * React Hook: xuất hiện ở phiên bản 16.8
 * - Hàm bắt đầu bằng từ khóa use
 * - Chỉ được dùng trong functional Component
 * - Bắt buộc phải gọi ở cấp đầu tiên
 * - Cho phép tương tác vs các chức năng trong core của react: state, lifecycle,...
 *
 *
 * State:
 * - Trạng thái của component
 * - Thể hiện dữ liệu của component và có thể thay đổi được trong chính component
 * - Khi state thay đổi ==> Component sẽ bị re-render (cả function bị gọi lại) ==> Giao diện được cập nhật (Repaint - vẽ lại cây DOM)
 * - Không được thay đổi trực tiếp giá trị state mà phải thông qua hàm thay đổi
 * - Khi hàm thay đổi state được gọi ==> ưu tiên re-render ==> Cho nên giá trị state mới sẽ không được thay đổi ngay
 *
 */

// import Counter from "./components/Counter";
// import Form from "./components/Form";
import Posts from "./components/Posts";
const App = () => {
  // Gọi ở đây
  //   const handleClick = () => {
  //     //   khong gọi ở đây
  //   };

  return (
    <div>
      {/* <Counter /> */}
      {/* <Form /> */}
      <Posts />
    </div>
  );
};
export default App;
