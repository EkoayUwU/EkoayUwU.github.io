
function ToggleShow(panneauID){
    if(document.getElementById(panneauID).className === "Hidden_Panel"){
        document.getElementById(panneauID).className = "Displayed_Panel";
    }
    else{
        document.getElementById(panneauID).className = "Hidden_Panel";
    }
    
}