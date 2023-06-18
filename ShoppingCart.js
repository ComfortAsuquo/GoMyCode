// const likeBtn = document.getElementsByClassName(".like");
// const addBtn = document.getElementsByClassName(".add")
// const minusBtn = document.getElementsByClassName(".minus")
// const count =document.getElementsByClassName("count")
const workdress =document.getElementsByClassName("workdress")
const deleteAll =document.querySelector(".deleteall")
console.log(workdress)

const total = document.querySelector(".totalamount")



//.map is an array function that loops thru an array, modifies each item in the array and puts it in a new array. like=object, classList=property of like also an object, toggle, add are medthods of classList. ForEac does not return a new array, it acts on the original array



for(let i=0; i<workdress.length; i++){
    const item = workdress[i]
    console.log(item)
    const addBtn = item.querySelector(".add");
    // console.log(addBtn)
    const minusBtn = item.querySelector(".minus");
    const likeBtn = item.querySelector(".like");
    const count =item.querySelector(".count");
    const deleteBtn = item.querySelector(".deleteitem");
    const Amount = item.querySelector(".amount");
    // console.log(count)

    // likeBtn.forEach(like => {
    
        likeBtn.addEventListener("click", function(){
            likeBtn.classList.add("likebtn");
            likeBtn.classList.toggle("active");
        })
    // })
    
    // addBtn.forEach(add =>{
        addBtn.addEventListener("click", function(){
        increaseQuantity(count)
        calculateTotal();
        
        })
    // })
    
    // minusBtn.forEach(minus =>{
        minusBtn.addEventListener("click", function(){
            decreaseQuantity(count);
            calculateTotal();
        })
    // })
        deleteBtn.addEventListener("click", function(){
        item.remove();
        calculateTotal();
    })
    //convert count to a number
    const newCount = Number(count.innerText);
    //convert string to number
    const newAmount = parseFloat(Amount.innerText);
    const totalAmount = newCount*newAmount;
    //sum = sum+totalAmount
    sum += totalAmount;
    // Amount.innerText = sum
    

    deleteAll.addEventListener("click", function(){
        //change html collection(array-like object) to an array
       const newArray = Array.from(workdress)
       newArray.forEach(element =>{
        element.remove()
        // Amount.innerText = "$" + 0
       })
    })

function increaseQuantity(counter){
   let countItem = Number(counter.innerText);
   countItem++
   counter.innerText=countItem
}


function decreaseQuantity(counter){
    let countItem = Number(counter.innerText)
    if(countItem>1){
        countItem--
        counter.innerText=countItem
    }
    
}

 function calculateTotal(){
    sum = 0
    for(i=0; i<workdress.length;i++){
        const itemOne = workdress[i];
        const quantity= itemOne.querySelector(".count")
        const Amount = item.querySelector(".amount");
        const AmountOne = parseFloat(Amount.innerText);
        const quantityEl = Number(quantity.innerText);
        const oneSum =AmountOne*quantityEl
        sum += oneSum
    }
    totalAmount.innerText = sum
}

}



