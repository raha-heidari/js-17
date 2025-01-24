function todoList(todos) {
  const div = document.querySelector("#content")
  const ul = document.createElement("ul")
  
  todos.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item.todo

    li.addEventListener("click", ()=>{
      if(li.style.textDecoration === "line-through"){
        li.style.textDecoration = "none"
      }else{
        li.style.textDecoration = "line-through"
      }
    })
    ul.appendChild(li)
  })
  div.append(ul)
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);