let num = 60;

switch (num % 15) {
  case 0:
    console.log('3と5の倍数です');
    break;
  case 5 || 10:
    console.log('5の倍数です');
    break;
  case 3 || 6 || 9 || 12:
    console.log('3の倍数です');
    break;
  default:
  console.log(num);
  break;
}