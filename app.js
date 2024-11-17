
let country = null
let arr = []
let good=0
let bad=0
async function getData(){

    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json()

   
    data.forEach(element => {
        if(element.continents[0]=='Europe'){
            arr.push(element)
        }
        
    });
    
    console.log(arr);
    capital()
    return arr
    
}
let i = 0
const button = document.querySelector("button")


async function capital() {
 
     i = Math.floor(Math.random()*arr.length)  

    let img = document.querySelector("img")
    let name = document.getElementById("name")

    img.setAttribute('src',arr[i].flags.png)
    name.textContent=arr[i].name.common
   console.log(arr[i].capital);
}


async function check() {

    let input = document.querySelector("input").value
      console.log(`input:`+input);
      console.log(`losowe`+arr[i].capital);
    if(input == arr[i].capital){
        good++
        document.getElementById('good').textContent=good
    }
    else if(bad==5){
        button.disabled="disabled"
        alert("Nie zdałeś, co ty miałeś z biologi")
    }
    else{
        bad++
        document.getElementById('bad').textContent=bad
    }
    capital()
}


button.addEventListener("click",()=>{
    check()
})
getData()

