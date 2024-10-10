
let button= document.getElementById('button')
let button2= document.getElementById('button2')
var div= document.getElementById('div')

 
button.addEventListener('click',function fahrenheit(){
    var inputvalue= parseInt(document.getElementById('celsius').value)
  const fahrenheit= (inputvalue * 9/5)+32
  div.textContent=fahrenheit
  document.getElementById('celsius').value=''
  if(!isNaN(inputvalue)){
    if(  fahrenheit<=32){
        div.style.color='blue'
      }
        else if(fahrenheit>=32 && fahrenheit<=104 ){
        div.style.color='green'
    }else{
       div.style.color='red'
    }
  }else{
    div.textContent='pleace enter value'
  }
  


})

button2.addEventListener('click',function celcius(){
    var inputvalue= parseInt(document.getElementById('celsius').value)
    const celcius= (inputvalue -32)* 5/9
    div.textContent=celcius
    document.getElementById('celsius').value=''
if(!isNaN(inputvalue)){
    if(celcius<=0){
        div.style.color='blue'
    }
       else if( celcius>=0 &&celcius<=40){
            div.style.color='green'
        }else{
           div.style.color='red'
        }
}else{
     div.textContent='pleace enter value'
}
 


})