export const a = 10;
export const b = 20;
// module.exports = {
//   a,
//   b,
// };
// const getHome = () => {
//   console.log("Home");
// };
export default function getHome() {
  console.log("Home");
}
// export { a, b }; // Export name
// export default getHome; // chỉ có 1 export default, chỉ hỗ trợ class và function truyền thống
