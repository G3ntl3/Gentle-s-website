const  signup=()=> {
let detailsArray = []
  let  detailsobj={
        firstName:fname.value,
        lastName:lname.value,
        userName:Username.value,
        Email:phoneNumber.value,
        Password:Password.value,
        Confirm:cPassword.value
    }
    detailsArray.push(detailsobj);
    if (document.getElementById("fname").value == "") {
        alert("first name issue")
     }
       else if (document.getElementById("lname").value == "") {
            alert("Last name issue")
        }
      else  if (document.getElementById("Username").value ==  "" ) {
            alert("Username should be letters")
        }
        else if (document.getElementById("phoneNumber").value == "") {
          alert("Enter a valid email")
      }
        else if (document.getElementById("Password").value !== document.getElementById("cPassword").value){
            alert("Password does not match, please input matcthing password!!")
        }
         else  {
    console.log(detailsArray)
    }
}

   

  
    
