
  let username;
  let playernum;
  const numbr = new RegExp(/^(?=[1-9])(?:([0-9])(?!.*\1)){4}$/gm)

  window.addEventListener('DOMContentLoaded', function() {
    
        username = document.getElementById('subusern');
        username.addEventListener('click', func);

        function func() {
        document.getElementById("plname").innerHTML = document.getElementById("gamertag").value
        }
    
    document.addEventListener('click', event=>{
        const subusern = event.target;
        if (subusern.className==="submt"){
        subusern.parentElement.parentElement.remove();
        
        }
    })
    document.addEventListener ('click',event=>{
        const subnum = event.target;
        if (subnum.className==="submnum"){
            playernum = document.getElementById('playernum').value
            if (numbr.test(playernum)){
                document.getElementById('numb1').innerHTML = playernum
            }
            
            else{
                document.getElementById('wrngnum').innerHTML = 'Number not matching rules. Please check the rules'
            }
        }
    })
});
  