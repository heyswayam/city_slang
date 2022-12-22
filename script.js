let def = document.getElementsByClassName("def")
let searchWord = document.getElementById("searchWord")
const dictionary = (word) => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a3c1898b34mshac7162f4077ffbbp1a6790jsn6e8499ea712b',
      'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
    }
  };

  fetch(`https://urban-dictionary7.p.rapidapi.com/v0/define?term=${word}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      const data = response.list

      Array.from(def).forEach((elem, i) => {
        elem.innerText =`${i+1}) - `+ data[i].definition
      }
      )
      // def.innerText=data[0].definition
      // def.innerText=data[1].definition
      // console.log(data[0].definition)

    }
    )
    .catch(err => console.error(err));
}
// author: "Mexicanos A Huevo"
// current_vote: ""
// defid: 11163072
// definition: "[LOOK AT THIS] DUDE WHY IS HE [LOOKING UP] WHAT IS A [CAR]"
// example: "A [CAR] HAS [WHEELS]"
// permalink: "http://car.urbanup.com/11163072"
// thumbs_down: 146
// thumbs_up: 1649
// word: "car​
// written_on: "2017-03-10T15:35:21.892Z"
dictionary("")
let searchBar = document.getElementById("searchBar")
let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener(("click"), (e) => {
  dictionary(searchBar.value)
})