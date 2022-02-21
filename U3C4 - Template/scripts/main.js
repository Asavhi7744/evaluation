async function getdata(url) {
     
    let res =await fetch(url)

    let data= await res.json()

     return data;

    //add api call logic here


}


function displayData(res,parent) {

    //add append logic here
    res.forEach(function(el){


        let div=document.createElement('div')

        let img=document.createElement('img')
         img.src=el.urlToImage
         img.setAttribute("class","images")

         let news=document.createElement('p')
         news.innerHTML=el.title

         div.append(img,news)
            
         div.addEventListener('click',function (){

             localStorage.setItem("detailed",JSON.stringify(el))
             console.log(el)

             window.location.href=("news.html")



         })
         parent.append(div)
    })

}


function displaydetails(data,parent){


main.innerHTML=" "


let div=document.createElement('div')

let img=document.createElement('img')
 img.src=data.urlToImage
 img.setAttribute("class","images")

 let news=document.createElement('p')
 news.innerText=data.title

 div.append(img,news)

parent.append(div)

}



export {getdata,displayData,displaydetails}