






function gameover(){
 
  let calllife=document.getElementById('life');
  calllife.innerText=5;
let callscore=document.getElementById('score')
callscore.innerText=0;


let open=document.getElementById('last');
open.classList.add('hidden');
let open_2=document.getElementById('play');
open_2.classList.remove('hidden');
//life and score 0

}









function setbackground(giveid){
   let called=document.getElementById(giveid);
  called.classList.add(' bg-orange-600');

 



}


function setclasses(co){
   let dd=document.getElementById(co);
   dd.classList.remove('hidden')

}

function removebackground(id){
   let ca=document.getElementById(id);
   ca.classList.remove('bg-orange-600')
}





function play(say){
   let home=document.getElementById('home');
   home.classList.add('hidden');
   let play=document.getElementById('play');
   play.classList.remove('hidden');
   let hlw=pp();
   let ll=document.getElementById('lll');
 let set=ll.innerText=hlw;
//  setbackground(a);
let mn=document.getElementById(hlw);
mn.classList.add('bg-orange-600')



}

//detect keyboard alphabet;;

document.addEventListener( 'keyup',function(hii){
  let getKey=hii.key;
  let currentalphabet=document.getElementById('lll');
  let spd=currentalphabet.innerText;
  let current=spd.toLowerCase();
 console.log('you press=',getKey)
 if(getKey=='Escape'){
  let tahmi=document.getElementById('play');
  tahmi.classList.add('hidden')
  setclasses('last');
  //
  let sc=document.getElementById('score');
  let o= sc.innerText;
  let final_result_2=document.getElementById('final-result');
  final_result_2.innerText=o;
  


 }
 if(getKey=='Enter'){
  let home=document.getElementById('home');
  home.classList.add('hidden');
  let play=document.getElementById('play');
  play.classList.remove('hidden');
 }

if(getKey===current){
   console.log('you got point')
 let score=document.getElementById('score');
 let inner=score.innerText;
 let pars=parseInt(inner);
 let chan=pars+1;
 let ok=score.innerText=chan;



 play();
 removebackground(getKey);

 


  

}
else{
   console.log('you lose')
   let life=document.getElementById('life');
   let coll=life.innerText;
   let parse=parseInt(coll);
  let minas= parse-1;
 let zero= life.innerText=minas;
  if(zero==0){
    
    let tahmid=document.getElementById('play');
    tahmid.classList.add('hidden')
    setclasses('last');
    //set score
    let scorethik=document.getElementById('score');
   let okkkkke= scorethik.innerText;
   let final_result=document.getElementById('final-result');
   final_result.innerText=okkkkke;




  }
  



}
   
})





