

let form = document.addItem
form.addEventListener("submit", function(e) {
    e.preventDefault()

    let itemInput = form.title.value
    console.log(itemInput)
    form.title.value = " "


    let listItem = document.createElement("li")
    listItem.textContent = itemInput
    listItem.name = "groceryItem"


    document.getElementById("list").append(listItem)

   //create delete button
   //append delete button to listItem
   //create functionality delete button

   let deleteBtn = document.createElement("button")
   deleteBtn.textContent = "X"
   listItem.append(deleteBtn)

   deleteBtn.addEventListener("click", deleteItem)

   function deleteItem() {
    listItem.remove("li")
   }
})
