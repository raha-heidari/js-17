function listOfColours(colours) {
  const div = document.querySelector("#content")
  const select = document.createElement("select")
  const p = document.createElement("p")

  p.textContent = "Chooooose a colorrrrr"
  p.style.fontSize = "20px"

  colours.forEach(color => {
    const option = document.createElement("option")
    option.value = color
    option.textContent = color
    select.append(option)
  })
   
   select.addEventListener("change", ()=>{
    const selectColor = select.value
    p.style.color = selectColor
   })
   div.appendChild(select)
   div.append(p)
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
