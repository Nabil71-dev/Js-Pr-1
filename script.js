let budget=0,income=0,expense=0
let budget_ele = document.querySelector(".main_heading span")
let income_ele = document.querySelector(".sub_heading1 span")
let expense_ele = document.querySelector(".sub_heading2 span")

budget_ele.innerHTML=budget
income_ele.innerHTML=income
expense_ele.innerHTML=expense

let btn=document.querySelectorAll(".btn")
let take_input=document.querySelectorAll(".take_input")
let s_btn=document.querySelectorAll(".submit_btn")
let value=document.querySelectorAll(".costing")




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
    
}
s_btn[1].addEventListener("click",change_expense)
function change_expense()
{
    
}