const muskateers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < muskateers.length; i++) {
  console.log(muskateers[i]);
}

muskateers.push("D'Artagnan");

muskateers.forEach((x) => {
  console.log(x);
});

muskateers.splice(2, 1);
