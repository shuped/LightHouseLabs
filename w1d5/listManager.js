var list = [];


function storeInList(num){
  return list.push(num);
}

function sortAlg(a, b){
  return a > b;
}

function sortList(list){
  return list.sort(sortAlg);
}

module.exports = {
  storeInList: storeInList,
  sortList: sortList
}