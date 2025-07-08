let noBtn = document.querySelector(".no-btn");
let changeHeader = document.getElementById("changeHeader");
let attempts = 1;


noBtn.addEventListener("click", () => {
   if(attempts === 1){
    attempts++;
    changeHeader.textContent = "Sure ka?:(("
    console.log(attempts);
    console.log(changeHeader)
    }
    else if (attempts === 2){
        attempts++;
        changeHeader.textContent = "Sure najud ka? please tell meeeee i comfort tikaaa"
    }
    else if (attempts === 3){
        changeHeader.textContent = "Okayyy iloveyouuuuu!!!!!!<3"

        setTimeout(() => {
            attempts = 1;
            changeHeader.textContent = "Galit ka nako aicakes?:(";
        }, 2000);
    }
})