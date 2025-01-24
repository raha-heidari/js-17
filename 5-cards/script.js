// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const wrapper = document.querySelector(".cards");
const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

// !Answer:
function createCards(data){
  const wrapper = document.querySelector(".cards");
  const cardSelected = document.querySelector(".cardSelected")
  data.forEach(item =>{

    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = item.src
    img.alt = item.title
    card.append(img)

    const title = document.createElement("h3")
    title.textContent = item.title
    card.appendChild(title)

    const accountDiv = document.createElement("div")
    accountDiv.classList.add("account")
    
    const accountImage = document.createElement("img")
    accountImage.src = item.accountImage
    
    const accountName = document.createElement("span")
    accountName.textContent = item.account
    accountDiv.append(accountImage)
    accountDiv.appendChild(accountName)
    card.appendChild(accountDiv)

    const button = document.createElement("button")
    button.textContent = "Please Bid"
    button.addEventListener("click", ()=>{
      cardSelected.textContent = `You selected: ${item.title}`
    })
    card.appendChild(button)
    wrapper.appendChild(card)
  })
}

createCards(data)