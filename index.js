function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    var inside = parseInt(lis[i].innerHTML, 10) + n
    lis[i].innerHTML = inside
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
