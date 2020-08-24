let budget_ele = document.querySelector(".main_heading span")
let income_ele = document.querySelector(".sub_heading1 span")
let expense_ele = document.querySelector(".sub_heading2 span")

let btn=document.querySelectorAll(".btn")
let take_input=document.querySelectorAll(".take_input")
let s_btn=document.querySelectorAll(".submit_btn")
let disp_card=document.querySelectorAll(".sub_box")
let value=document.querySelectorAll(".costing")
let Discription=document.querySelectorAll(".description")
let type=document.querySelectorAll(".type")
let bal=document.querySelectorAll(".bal")


btn[0].addEventListener("click",add_income)
function add_income()
{
    take_input[0].style.display="block"
    btn[0].style.display="none"
}
btn[1].addEventListener("click",add_expense)
function add_expense()
{
    take_input[1].style.display="block"
    btn[1].style.display="none"
}

s_btn[0].addEventListener("click",change_income)
function change_income()
{
    disp_card[0].style.display="block"
    take_input[0].style.display="none"
    income_ele.innerHTML=value[0].value
    budget_ele.innerHTML=value[0].value-value[1].value
    bal[0].innerHTML=value[0].value
    type[0].innerHTML= Discription[0].value
    btn[0].style.display="block"
}   
s_btn[1].addEventListener("click",change_expense)
function change_expense()
{
    disp_card[1].style.display="block"
    take_input[1].style.display="none"
    expense_ele.innerHTML=value[1].value
    budget_ele.innerHTML=value[0].value-value[1].value
    bal[1].innerHTML=value[1].value
    type[1].innerHTML= Discription[1].value
    btn[1].style.display="block"
}