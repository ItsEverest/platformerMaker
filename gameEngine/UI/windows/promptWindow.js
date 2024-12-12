
export function promptWindow(header, description){
    return new Promise((resolve) => {
    let promptWindow = document.createElement('div')
    promptWindow.style.backgroundColor = "black";
    promptWindow.style.border = "1px solid white";
    promptWindow.style.borderRadius = "2px";
    promptWindow.style.padding = "8px 25px";
    promptWindow.style.position = "absolute";
    promptWindow.style.top = "50%";
    promptWindow.style.left = "50%";
    promptWindow.style.transform = "translate(-50%, -50%)";
    promptWindow.style.display = "inline-flex";
    promptWindow.style.flexDirection = "column";
    document.body.appendChild(promptWindow);

    let newHeader = document.createElement('h1');
    newHeader.innerText = header;
    newHeader.style.marginBottom = "0px";
    promptWindow.appendChild(newHeader);

    let newDescription = document.createElement('p');
    newDescription.innerText = description;
    newDescription.style.marginTop = "5px";
    newDescription.style.fontWeight = '200';
    newDescription.style.color = '#BBBBB';
    promptWindow.appendChild(newDescription);

    let newInput = document.createElement('input');
    newInput.style.border = "1px solid #BBBBBB";
    newInput.style.borderRadius = "5px";
    newInput.style.backgroundColor = "AAAAAA";
    newInput.style.fontSize = "20px";
    newInput.style.padding = "5px";
    newInput.style.height = "40px";
    promptWindow.appendChild(newInput);

    let newButton = document.createElement('button');
    newButton.innerText = "Confirm";
    newButton.style.padding = "5px 15px";
    newButton.style.backgroundColor = "#23a61c";
    newButton.style.borderRadius = "5px";
    newButton.style.fontWeight = "900";
    newButton.style.color = "white";
    newButton.style.margin = "20px 0 10px auto";
    newButton.style.height = "40px";
    promptWindow.appendChild(newButton);
    newButton.addEventListener('click', function(){
        const inputValue = newInput.value;
        resolve(inputValue);
        promptWindow.style.display = "none";
    })
});
}