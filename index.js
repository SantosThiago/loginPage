let submit=document.getElementById('submit')

submit.addEventListener("click", (event) => {
  event.preventDefault();
  
  const email = document.getElementById("input_email");
  const pass = document.getElementById('input_pass');

  if (!email.value)
    email.style.border='2px solid red'
    
  else if (email.value)
    email.style.border= 'None'
  
  if (!pass.value)
    pass.style.border='2px solid red'

  else if (pass.value)
    pass.style.border= 'None'
});