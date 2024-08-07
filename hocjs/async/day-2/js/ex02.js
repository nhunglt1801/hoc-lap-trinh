// Async function
// Await operator

// await func1()
// await func2()
// await func3()
// ==> Nằm trong hàm Async

// Trước phải là Async, mỗi 1 lần await <==> 1 lần then
// Hàm async luôn trả về một promise
const something = async () => {
  const a = 1;
  //   console.log(a);
  return a;
};
// console.log(something());
something().then((data) => {
  //   console.log(data);
});

const getA = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("GET A");
      reject("Lỗi GET A");
    }, 1000);
  });
const getB = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("GET B");
    }, 2000);
  });
const getC = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("GET C");
    }, 1000);
  });

// const showResult = async () => {
//   const a = await getA();
//   console.log(a);
//   const b = await getB();
//   console.log(b);
//   const c = await getC();
//   console.log(c);
// };
// showResult();

// (async () => {
//   try {
//     const a = await getA();
//     // console.log(a);
//     if (!a) {
//       //   throw new Error("Không có kết quả");
//       throw "Không có kết quả";
//     }
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Ok chưa?");
//   }
//   //   const b = await getB();
//   //   console.log(b);
//   //   const c = await getC();
//   //   console.log(c);
// })();

const getResult = async () => {
  return await getA();
  //   console.log(getA());
  //   return getA();
};
getResult()
  .then((data) => console.log(data))
  .catch((e) => {
    console.log(e);
  });
