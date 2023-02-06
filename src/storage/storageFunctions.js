function saveState(state){
    localStorage.setItem('savedState', JSON.stringify(state));
}

function loadState(){
    const actualState = localStorage.getItem('savedState');
    if(actualState){
        return JSON.parse(actualState)
    }
}

export {saveState, loadState};