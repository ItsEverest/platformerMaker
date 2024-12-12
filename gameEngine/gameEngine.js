console.log("[FILE] Loaded gameEngine.js")
let assets = [];
let selectedBrush = 0;
let selectedProperties;

import { promptWindow } from './UI/windows/promptWindow.js';
import { GameProject } from './classes/GameProject.js';
import { GameObject } from './classes/GameObject.js';

document.getElementById('navbar').style.display = 'none';
document.getElementById('gameViewport').style.display = 'none';
document.getElementById('propertiesWindow').style.display = 'none';
document.getElementById('fileBrowser').style.display = 'none';

async function projectWizard(){


    let projectsWindow = document.getElementById('projectsWindow');
    projectsWindow.style.display = 'none';

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let projectName = await promptWindow("Project name", "Input a unique name for your project");
    let projectDate = `${day}-${month}-${year}`;

    const gameProject = new GameProject(projectName, projectDate);

    console.log(gameProject);

    let viewport = document.getElementById('gameViewport');
    for(let x = 0; x<20; x++){
        for(let y = 0; y<10; y++){
            console.log('test');
            let newCell = document.createElement('div');
            newCell.id = "cell_" + x + "_" + y;
            newCell.style.outline = '1px solid #101010';
            newCell.style.backgroundColor = 'black';
            newCell.style.padding = '0px';
            newCell.style.margin = '0px';
            newCell.style.width = '50px';
            newCell.style.height = '50px';
            newCell.style.backgroundSize = 'cover';
            newCell.style.backgroundPosition = 'center';
            newCell.style.backgroundRepeat = 'no-repeat';
            newCell.addEventListener('click', function(){
                console.log('place');
                this.style.backgroundImage = "url(" + assets[selectedBrush] + ")";
                new GameObject("cell_" + x + "_" + y, [x, y], selectedBrush);
            })
            newCell.style.boxSizing = 'border-box';
            viewport.appendChild(newCell);
        }
    }

    showUi();
    fileBrowser();
}

function fileBrowser(){
    let i = 0;
        let fileBrowser = document.getElementById('fileBrowser');
        document.getElementById('assetImport').addEventListener('change', function(event){
            const file = event.target.files[0];
        

        if(file){
            const reader = new FileReader();

            reader.onload = function(e) {
                console.log('test');
                let newAsset = document.createElement('img');
                newAsset.style.width = "100px";
                newAsset.style.height = "100px";
                newAsset.src = e.target.result;
                assets.push(e.target.result);
                let currentIndex = i;
                newAsset.addEventListener('click', function(){
                    selectedBrush = currentIndex;
                    console.log("Selected " + currentIndex);
                })
                i++;
                fileBrowser.appendChild(newAsset);
            }

            reader.readAsDataURL(file);
        }
    })
}

function showUi(){
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('gameViewport').style.display = 'flex';
    document.getElementById('propertiesWindow').style.display = 'flex';
    document.getElementById('fileBrowser').style.display = 'block';
}
















// EventListeners

document.getElementById('newProjectButton').addEventListener('click', projectWizard);
