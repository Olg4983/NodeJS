document.addEventListener('click', event=>{
if(event.target.dataset.type==="remove"){
    const id = event.target.dataset.id;
remove(id).then((event)=>{
    event.target.closest('li').remove()
})

}
})

document.addEventListener('click', event=>{
    if(event.target.dataset.type==="update"){
       const newTitleNode= prompt('Введите новое название')
        const id = event.target.dataset.id;
        put(id,newTitleNode).then((event)=>{
    event.target.closest('li').content = newTitleNode
})
    }
})

async function remove(id){
    await fetch(`/${id}`, {method:"DELETE"})
}
async function put(id, newTitleNode){
    await fetch(`/${id}`, {method:"PUT"})
}