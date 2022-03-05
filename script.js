let tasks=[]
let list= document.querySelector('.tasksList')
if(localStorage.getItem('tasks')){
tasks=JSON.parse(localStorage.getItem('tasks'))

tasks.forEach((item)=>loadElems(item))
}
function loadElems(item){
     
        let liDiv=document.createElement('div');
        let li=document.createElement('li');
        let delBtn=document.createElement('button');
        let editBtn=document.createElement('button');
        delBtn.innerHTML='X'
        editBtn.innerHTML='<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEzMS45Njc0NCwxNC4zMzMzM2MtMS44MzQ2NywwIC0zLjY2OTU2LDAuNzAyMTEgLTUuMDY3MDYsMi4wOTk2MWwtMTQuMzMzMzMsMTQuMzMzMzNsLTEwLjEzNDExLDEwLjEzNDExbC04MC45MzI5NCw4MC45MzI5NHYyOC42NjY2N2gyOC42NjY2N2wxMDUuNDAwMzksLTEwNS40MDAzOWMyLjgwMjE3LC0yLjgwMjE3IDIuODAyMTcsLTcuMzM5MTEgMCwtMTAuMTM0MTJsLTE4LjUzMjU1LC0xOC41MzI1NWMtMS4zOTc1LC0xLjM5NzUgLTMuMjMyMzksLTIuMDk5NjEgLTUuMDY3MDYsLTIuMDk5NjF6TTEzMS45Njc0NCwzMS42MzQxMWw4LjM5ODQ0LDguMzk4NDRsLTkuMjY2MjgsOS4yNjYyOGwtOC4zOTg0NCwtOC4zOTg0NHpNMTEyLjU2NzA2LDUxLjAzNDUxbDguMzk4NDQsOC4zOTg0NGwtNzYuNzMzNzIsNzYuNzMzNzJoLTguMzk4NDR2LTguMzk4NDR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>'
        delBtn.className+='del'
        delBtn.addEventListener('click',(delBtn)=>{deleter(delBtn)})
        editBtn.className+='edit'
        editBtn.addEventListener('click',(editBtn)=>{editer(editBtn)})
        liDiv.className+='listDiv'
        li.innerText=item;
        liDiv.appendChild(li);
        liDiv.appendChild(delBtn);
        liDiv.appendChild(editBtn);
        list.appendChild(liDiv);
        
    
}



let addB= document.querySelector('.addBtn')
let form1=document.querySelector('#form1')

addB.addEventListener('click',makeFormVisible)
form1.querySelector('button').addEventListener('click',addElem)

function makeFormVisible(){
form1.classList.toggle("invis")
}
function addElem(e){
    let inpTxt=form1.querySelector('input')
    e.preventDefault();
    if(inpTxt.value){
    tasks.push(inpTxt.value);
    localStorage.setItem("tasks",JSON.stringify(tasks) );
    loadElems(inpTxt.value);
    inpTxt.value='';
    makeFormVisible();
    
     }
    else{
        alert('please enter a valid task')
    }
}

function deleter(elem){
     let target=elem.path[1].querySelector('li').innerText
     tasks.splice(tasks.indexOf(target),1)
     localStorage.setItem("tasks",JSON.stringify(tasks) );
     elem.path[1].remove();
   
}
function editer(elem){
    let target=elem.path[2].querySelector('li').innerText
    elem.path[2].querySelectorAll('*').forEach((item)=>item.remove());
    let form2=document.createElement('form');
    form2.className+='form2'
    form2.innerHTML='<input type="text" placeholder="Type task here">'+
    '<button><img src="assets/Plus.svg" alt="Add task" ></button>'
    elem.path[2].appendChild(form2);
    let input=form2.querySelector('input')
    form2.querySelector('button').addEventListener('click',(e)=>{e.preventDefault();
        editS(input,tasks.indexOf(target),elem.path[2])});
    
}
function editS(inputt,indexx,divv){
    
    tasks[indexx]=inputt.value;
    localStorage.setItem("tasks",JSON.stringify(tasks) );
    location.reload();
    
}