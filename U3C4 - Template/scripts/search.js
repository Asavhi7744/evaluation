function storeSearchterm() {


    let container =document.getElementById("container")

    let detailed =JSON .parse(localStorage.getItem("detailed"))
    console.log(detailed)
   
    let parent =document.getElementById("container")
    let datashow=displaydetails(detailed,parent)
}

export  {storeSearchterm}