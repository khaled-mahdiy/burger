const leftColumn = document.querySelector(".left");
const rightColumn = document.querySelector(".right");
var current = 'blue';

window.addEventListener('keyup', (e)=>{
    if(e.key == 'ArrowUp'){//up
        prev();
    }
    if(e.key == 'ArrowDown'){//down

        next();
    }
});

document.addEventListener('mousewheel', scroll);
document.addEventListener('DOMMouseScroll', scroll);


var w;
function scroll(e){
    clearTimeout(w);
    e.preventDefault();
    var e = window.event || e;
    w = setTimeout(() => {
        w = undefined;
        if(e.wheelDelta < 0 || e.detail > 0){
            next();
        }
        if (e.wheelDelta > 0  || e.detail < 0){
            prev();
        } 
    }, 500);
    

}

function next(){
    let r,l;

    switch(current){
        case 'gold':{//to show blue and start over
            l='0';
            r='-300';
            current = 'blue';
            
            break;
        }
        case 'blue':{ //to show red
            l= '-100';
            r= '-200';
            current = 'yellow';
            break;
        }
        case 'yellow':{ //to show red
            l= '-200';
            r= '-100';
            current = 'red';
            break;
        }
        case 'red':{//to show gold
            l='-300';
            r='0';
            current = 'gold';
            break;
        }
        
    }
    
    leftColumn.style.transform = `translateY(${l}vh)`;
    rightColumn.style.transform = `translateY(${r}vh)`;

}
function prev(){
    let r,l;

    switch(current){
        case 'red':{//to show blue and start over
            l='0';
            r='-300';
            current = 'blue';
            break;
        }
        case 'blue':{ //to show gold
            l= '-100';
            r= '-200';
            current = 'yellow';
            break;
        }
        case 'yellow':{//to show red
            l='-200';
            r='-100';
            current = 'gold';
            break;
        }
        
        case 'gold':{//to show red
            l='-300';
            r='0';
            current = 'red';
            break;
        }
        
    }
    
    leftColumn.style.transform = `translateY(${l}vh)`;
    rightColumn.style.transform = `translateY(${r}vh)`;
}

function openHeader(){

    let div = document.querySelector('.nav-list')
    div.classList.toggle('hide-div')
    div.classList.toggle('show-div')
    let icon = document.getElementById('icons')
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-window-close')
}
