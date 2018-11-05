var getHTML = require('../getHTMLWithCallback')

function print1337 (data) {
  const replacementsObj = {
    ck: 'x',
    er: '0r',
    you: 'j00',
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    s: '5',
    t: '7'
  }
  const replacements = Object.entries(replacementsObj)
  
  //return
  console.log(replacements
    .reduce((agg, [key, replacement]) => changeCharacter(agg, key, replacement), 
    data)
  )

function changeCharacter(data, key, replacement){
  if(data.indexOf(key) === -1){
    return data;
  }
  return changeCharacter(data.replace(key, replacement), key, replacement);
  }
}

getHTML('sytantris.github.io', '/http-examples/step2.html', print1337)
