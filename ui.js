class UI{
    constructor(){
        this.profileout = document.getElementById("profile")
    }

    showProfileFromUI(userdata){
        this.profileout.innerHTML =`
        <div class="card border-danger card-body mb-3">
        <div class="row">
            <div class="col-md-3 p-3">
             <img src="${userdata.avatar_url}"  class="img-fluid mb-2">
                <a href="${userdata.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
            </div>
            <div class="col-md-9 ">
                <span class="badge badge-success">Followers : ${userdata.followers} </span>
                <span class="badge badge-danger">Gists : ${userdata.public_gists} </span>
                <span class="badge badge-info">Repos : ${userdata.public_repos}</span>
                <span class="badge badge-warning">Following : ${userdata.following}</span>
                <br></br>
                <ul class="list-group">
                 <li class="list-group-item d-flex justify-content-between align-items-center">
                   Company : ${userdata.company}
                 </li>
                 <li class="list-group-item d-flex justify-content-between align-items-center">
                   Website : ${userdata.blog}
                   
                 </li>
                 <li class="list-group-item d-flex justify-content-between align-items-center">
                   Location : ${userdata.location}
                   
                 </li>
                 <li class="list-group-item d-flex justify-content-between align-items-center">
                 Member Since : ${userdata.created_at}
                     
                   </li>
               </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading text-center mb-3">Latest Repos</h3>
    <div class="" id="repos"></div> 
        `
    }
    showReposFromUI(repos){

       const reposUI = document.getElementById("repos");
        let datatorepo = '';
        repos.forEach(repo=>{

            datatorepo  += ` <div class="containe">
            <div class="row"><div class="col-md-12"> <div class="card  align-content-center border-warning mb-2" style="max-width: 80rem;">
            <div class="card-body align-content-center">
            <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-success">Stars : ${repo.stargazers_count} </span>
            <span class="badge badge-danger">Forks  : ${repo.forks_count} </span>
            <span class="badge badge-info">Watchers : ${repo.wathcher_count}</span>
            </div>
            </div>
            </div>
          </div>
          </div>
          </div>
          </div> `
        })

        reposUI.innerHTML = datatorepo;
        
    }
    clearProfile(){
        this.profileout.innerHTML = ``;
    }

    NotFound(username){
        this.profileout.innerHTML = `
        <div class="alert alert-dismissible alert-warning">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <h4 class="alert-heading">Sorry, There is no such a user </h4>
  <p class="mb-0">oops, no user found as ${username}</p>
</div>`
    }

   
}