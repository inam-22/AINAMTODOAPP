
var list=document.getElementById("list");
function addTODO(){
    var todo_item=document.getElementById("todo-item");
    var li=document.createElement("li");
    var liText=document.createTextNode(todo_item.value);
    li.appendChild(liText);


    var delBtn=document.createElement("button");
    var btnText=document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","deleteItems(this)");
    delBtn.appendChild(btnText);

    var editBTn=document.createElement("button");
    var editTxt=document.createTextNode("EDIT");
    editBTn.appendChild(editTxt);
    editBTn.setAttribute("onclick","editItems(this)");

    li.appendChild(delBtn);
    li.appendChild(editBTn);
    
    list.appendChild(li);
    todo_item.value="";
    
}
    
function deleteItems(e){
   e.parentNode.remove();
}
function deleteALL(){
    list.innerHTML="";
}
function editItems(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editVal=prompt("Enter Edit Value",val);
    e.parentNode.firstChild.nodeValue=editVal;
}