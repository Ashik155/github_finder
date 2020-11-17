class GitHub{
    constructor() {
        this.client_id = "d3a94cf559934441a5d7"
        this.client_secret = "3b7bd26b5db352c67b9a6b5900bfd426a9a35dd2"
        this.repo_count = 5;
        this.repo_sort = 'created : asc';
        
    }
    async getUsers(username){
        const profiles = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const sendProfileToApp = await profiles.json();
        const repos = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const sendRepotoApp = await repos.json();
        return {
            sendProfileToApp,
            sendRepotoApp
        }
    
    }
}