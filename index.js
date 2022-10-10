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
