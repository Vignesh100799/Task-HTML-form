let entries = []

function save(){
   let data = [];
   data.push(document.getElementById('first-name').value)
   data.push(document.getElementById('last-name').value)
   data.push(document.getElementById('address').value)
   data.push(document.getElementById('pincode').value)
   
   var ele = document.getElementsByName('gender');
   let gender ="-";
   for (i = 0; i < ele.length; i++) {
       if (ele[i].checked){
            gender = ele[i].value;
       }
   }
   var gendererror = document.getElementById('gender-error');
   if(gender =="-"){
      gendererror.innerText = 'Gender is Required...!!!';
      return;
   }
   data.push(gender)


   var cuisine = document.getElementsByName('cuisine');

   let cuisines = []
   for (i = 0; i < cuisine.length; i++) {
      
      if (cuisine[i].checked){
      cuisines.push(cuisine[i].value)
  }
} var cuisineError = document.getElementById("cuisine-error");
if(cuisines.length<2){
   cuisineError.innerText = "Must select two cuisines...!!!"
   return;
}

   data.push(cuisines.join(","))
   data.push(document.getElementById('state-box').value)
   data.push(document.getElementById('country-box').value)
   entries.push(data.join("###"))
   console.log(entries)

   
var tbody= document.getElementById('tbody');
// var newdiv = document.createElement("div")
// newdiv.tbody.innerHTML = null;
tbody.innerHTML = null;
for(let i=0; i<entries.length;i++){
   let celldata = entries[i].split('###');
   var newrow = tbody.insertRow(i) 
   for(let j=0; j<celldata.length;j++){
      var newcell = newrow.insertCell()
      var content = document.createTextNode(celldata[j]);
      newcell.appendChild(content)
   }

}
document.getElementById('first-name').value = '';
document.getElementById('last-name').value = '';
document.getElementById('address').value= '';
document.getElementById('pincode').value= '';

document.getElementById('state').value = '';
document.getElementById('country').value = '';
var genders = document.getElementsByName('gender');
   for (i = 0; i < genders.length; i++) {
     genders[i].checked = false
   }
   gendererror.innerText = '';
   var allcuisines = document.getElementsByName('cuisine');
   for (i = 0; i < allcuisines.length; i++) {
      allcuisines[i].checked = false;
      cuisineError.innerText = "";

  }alert("Scroll Down to get Submitted data...!!! Thanks..!")
}
