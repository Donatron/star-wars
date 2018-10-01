export function getIndex(array) {
  let splitArray = array.split("/");
  let index = splitArray[splitArray.length-2];

  return index;
}
