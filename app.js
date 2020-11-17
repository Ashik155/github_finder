
const github = new GitHub;
const ui = new UI;


const textbar = document.getElementById("searchUser");
textbar.addEventListener("keyup", (e)=>{
   

       github.getUsers(e.target.value).
       then(data => {
        if(e.target.value !== ''){
           if(data.sendProfileToApp.message === "Not Found"){
               ui.NotFound(e.target.value)
           }else{
               ui.showProfileFromUI(data.sendProfileToApp)
               ui.showReposFromUI(data.sendRepotoApp)
           }
        }else{
            ui.clearProfile()
    
        }
       })

    
})