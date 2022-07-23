playable = false
const sideBar = document.getElementById('side-bar');
const quickSortBtn = document.getElementById('quick-sort');
const mergeSortBtn = document.getElementById('merge-sort');
const heapSortBtn = document.getElementById('heap-sort');


function toggleTheme(){
    if (document.body.classList[0] == 'dark') {
        document.body.classList.replace('dark', 'white');
    } else if (document.body.classList[0] == 'white') {
        document.body.classList.replace('white', 'colorful');
    } else if ((document.body.classList[0] == 'colorful')) {
        document.body.classList.replace('colorful', 'dark');
    }
}

function toggleAlgorithm(algorithm){
    if (algorithm == 'quick sort'){
        if(quickSortBtn.classList.contains('disable-button')){
            quickSortBtn.classList.replace('disable-button','enable-button');
            mergeSortBtn.classList.replace(mergeSortBtn.classList[1],'disable-button');
            heapSortBtn.classList.replace(heapSortBtn.classList[1],'disable-button');
        }
    }
    else  if (algorithm == 'merge sort'){
        if(mergeSortBtn.classList.contains('disable-button')){
            mergeSortBtn.classList.replace('disable-button','enable-button');
            quickSortBtn.classList.replace(quickSortBtn.classList[1],'disable-button');
            heapSortBtn.classList.replace(heapSortBtn.classList[1],'disable-button');
        }
    }
    else if (algorithm == 'heap sort'){
        if(heapSortBtn.classList.contains('disable-button')){
            heapSortBtn.classList.replace('disable-button','enable-button');
            mergeSortBtn.classList.replace(mergeSortBtn.classList[1],'disable-button');
            quickSortBtn.classList.replace(quickSortBtn.classList[1],'disable-button');
        }
    }
}

sideBar.addEventListener('click', (e)=>{
    let target = e.target.textContent; 

    if(target == 'theme'){
        toggleTheme();
    }

    else if(target == 'quick sort' || target == 'merge sort' || target == 'heap sort' ){
        toggleAlgorithm(target);
    } 

    else if(target =='shuffle'){
        console.log('shuffle the bars');
    }

    else if(target =='play'){
        console.log('sort the bars');
    }
})

let slider = document.getElementById("elements-slider");
let sliderOutput = document.getElementById("slider-output");
sliderOutput.innerText = `${slider.value} elements `; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sliderOutput.innerText = `${slider.value} elements`;
}

const arr = Array.from(Array(101).keys()).slice(1);

//console.log(arr);