

let songindex=0;
let audioelement= new Audio('song/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let wave = document.getElementById('wave');
let songitems = Array.from(document.getElementsByClassName('songitems'));
let mastersongname = document.getElementById("mastersongname");
let songitemplay = Array.from(document.getElementsByClassName('songitemplay'));
let songs=
    [
    {songname: "295(official Audio)| Sidhu Moose wala", filepath: "song/1.mp3", coverpath:"covers/1.jpg"},
    {songname: "Execuses (Official Audio)| AP Dhillon", filepath: "song/2.mp3", coverpath:"covers/2.jpg"},
    {songname: "Calaboose (Official Audio)|Sidhu Moose Wala ", filepath: "song/3.mp3", coverpath:"covers/3.jpg"},
    {songname: "Luis fonsi - Despacito ft.Daddy Yankee", filepath: "song/4.mp3", coverpath:"covers/4.jpg"},
    {songname: "Shawn Mendes, Camila Cabello - Senorita", filepath: "song/5.mp3", coverpath:"covers/5.jpg"},
    {songname: "Brown Munde -AP Dhillon", filepath: "song/6.mp3", coverpath:"covers/6.jpg"},
    {songname: "Ed Sheeran - Shape of You(Official Music Audio)", filepath: "song/7.mp3", coverpath:"covers/7.jpg"},
    {songname: "Dj Snake - Taki Taki ft. Selena Gomez", filepath: "song/8.mp3", coverpath:"covers/8.jpg"},
    ]

    songitems.forEach((Element, i)=>{
        
        Element.getElementsByTagName("img")[0].src= songs[i].coverpath;
        Element.getElementsByClassName("songname")[0].innerText= songs[i].songname;

    })




// HANDLE PLAY/PAUSE CLICK


    masterplay.addEventListener('click', ()=>{
        if(audioelement.paused || audioelement.currentTime<=0){
            audioelement.play();
            //  masterplay.remove('play.png');
            // masterplay.add(document.body.appendchild(img));
            // masterplay.appendChild(img);
            wave.style.opacity = 1;
            masterplay.src='playing.png';

        }
        else{
            audioelement.pause();
            wave.style.opacity = 0;
            masterplay.src="play.png";
        }
    })

// LISTEN TO EVENTS
    audioelement.addEventListener('timeupdate', ()=>{
       
   
// update seekbar 
let progress = parseInt((audioelement.currentTime/audioelement.duration)* 100);
// console.log(progress);
myprogressbar.value = progress;
})


myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime= myprogressbar.value * audioelement.duration/100;
})


// songitemplaypause

const makeallplayer = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.src='play.png';
    })    

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeallplayer();
        songindex = parseInt(e.target.id);
        audioelement.src = `song/${songindex+1}.mp3` ;
        mastersongname.innerText = songs[songindex].songname;
        // audioelement.currentTime = 0;
   
        if(audioelement.paused || audioelement.currentTime<=0){
            audioelement.play();
            
            e.target.src='playing.png';
            wave.style.opacity = 1;
            masterplay.src='playing.png';

        }
        else {
            audioelement.pause();
            wave.style.opacity = 0;
            masterplay.src="play.png";
            e.target.src='play.png';
        } 
       
       
    })
})
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         // console.log(e.target);
//         makeallplayer();
//         songindex = parseInt(e.target.id);
//         e.target.src='playing.png';
//         // audioelement.src = "song/3.mp3" ;
//         audioelement.src = `song/${songindex+1}.mp3` ;
//         mastersongname.innerText = songs[songindex].songname;
//         audioelement.currentTime = 0;
//         audioelement.play();
//         wave.style.opacity = 1;
//         masterplay.src='playing.png'
//     })
// })

// songchange

document.getElementById('next').addEventListener('click', () =>{
    if(songindex>=7){
        songindex=0
    }
    else{
        songindex+=1;
    }
    audioelement.src = `song/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.src="playing.png"
})
document.getElementById('previous').addEventListener('click', () =>{
    if(songindex<=0){
        songindex=7
    }
    else{
        songindex-=1;
    }
    audioelement.src = `song/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.src="playing.png"
})




