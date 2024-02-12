document.addEventListener('click', event=>{
    const subusern = event.target;
    if (subusern.className==="submt"){
      subusern.parentElement.parentElement.remove();
      
    }
  })
  let username;
  window.addEventListener('DOMContentLoaded', function() {
    username = document.getElementById('subusern');
    username.addEventListener('click', func);

    function func() {
      document.getElementById("plname").innerHTML = document.getElementById("gamertag").value
    }
  });