function displayExpenseTable(){
var table = document.getElementById("e-table");
var trow = table.insertRow(1);
trow.style.backgroundColor ="#fff";
var cell1 = trow.insertCell(0);
var cell2 = trow.insertCell(1);
var cell3 = trow.insertCell(2);
var cell4 = trow.insertCell(3);
var cell5 = trow.insertCell(4);

cell1.innerText= document.getElementById("ename").value;
cell2.innerText= document.getElementById("ewhere").value;
cell3.innerText= "$" + document.getElementById("eamount").value;
cell3.style.color ="red";
cell4.innerText= document.getElementById("edate").value;
cell5.innerText= document.getElementById("emop").value;

cell1.style.border = '1px solid black';
cell2.style.border = '1px solid black';
cell3.style.border = '1px solid black';
cell4.style.border = '1px solid black';
cell5.style.border = '1px solid black';

document.getElementById("ename").value = "";
document.getElementById("ewhere").value = "";
document.getElementById("eamount").value = "";
document.getElementById("edate").value = "";
document.getElementById("emop").value = "";

var deleteExpense = document.createElement('button');
deleteExpense.className ="fa fa-trash";
deleteExpense.style.backgroundColor ="#fff";
deleteExpense.style.border ="0px";
deleteExpense.style.fontSize ="large";

deleteExpense.addEventListener("click",removeExpense);
trow.appendChild(deleteExpense);

function removeExpense(){
var tr = document.getElementById("dynamicTableRow");
tr.parentNode.removeChild(tr);


}
}
