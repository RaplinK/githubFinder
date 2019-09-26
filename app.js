loadEventListeners();
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getObject);
}
function getObject(){
    const gitHub = new Github;
    console.log(gitHub);

    gitHub.getUser('RaplinK')
    .then(data=>{
        console.log(data)
    });
}