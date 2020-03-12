function validateForm(){

  var x = document.forms["matric_no"]["matric"].value;

  if(!/^[0-9]+$/.test(x)){
    alert("Please enter numerical digits only.")
  }

}
