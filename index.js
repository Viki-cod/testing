function tri() {
  //deful fun
  let q = 10;
  let sum;
  for (let q = 10; q < 100; q++) {
    sum = q * q;
    setTimeout(() => {
      console.log(sum);
    }, 2000);
  }
}

tri();

const hey = () => {
  console.log("hellow......");
};
hey();

const war = {
  1965: "indo-china",
  1971: "indo-pak",
  1999: "kargil war",
};

console.log(war[1971]);
