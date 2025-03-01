function addName(hindi, english, sc) {
  const sub = ` ${hindi + english + sc}`;

  return sub;
}

function persentage(val) {
  const per = (val / 300 * 100).toFixed(2);
  console.log(per);
}

const chai = addName(87, 87, 69);
persentage(chai);
