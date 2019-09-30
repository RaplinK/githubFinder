class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }


showProfile(user){
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a class="btn btn-primary btn-block mb-4" href="${user.html_url}">View profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
                    <span class="baadge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info>Following: ${user.following}</span>
                </div>
                <br>
                <br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member since: ${user.created_at}</li>
                </ul>
            </div>

        </div>
    </div>
    <h3 class="page heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    
    
    `;
}
    showRepos(repos){
        let output = "";

        repos.forEach(function(repo){
            output += `
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">${repo.watchers_count}</span>
                            <span class="badge badge-success">${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('repos').innerHTML = output;
        
    });
}
}