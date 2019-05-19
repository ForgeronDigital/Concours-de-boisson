class Personnage{
    constructor (nom,santé,alcool,degat){
        this.nom= nom;
        this.santé=santé;
        this.alcool=alcool;
        this.degat=degat;
    }
}
function attendre() {
    var bouton1= document.getElementsByClassName("jeu__action__bouton");
    for (i=0;i<bouton1.length;i++)
    {bouton1[i].disabled=false;}
            }
function bandeSon(mp3){
    var audio =new Audio('mp3/'+mp3)
    var bouton= document.getElementsByClassName("jeu__action__bouton");
    audio.play();
    for (i=0;i<bouton.length;i++){
        bouton[i].disabled=true;
    }
}
function vibrer(){
    var contenu=document.getElementById('container');
    
    if((window.getComputedStyle(contenu).left)!='0px'){
        var pos =1000;
        var pos2 =5;
        var id = setInterval(buzz,50);
        contenu.style.left='calc(50vw - 30vw + 5px)';
    function buzz(){
        if((pos>0)&&(pos2>0)){
            contenu.style.left='calc(50vw - 30vw - 10px)';
            pos-=100;
            pos2-=10;
        }
        else if((pos>0)&&(pos2<0)){
            contenu.style.left='calc(50vw - 30vw + 10px)';
            pos-=100;
            pos2+=10;
        }
        else if (pos<=0){
            clearInterval(id);
        }
    }
    }else{
        var pos =1000;
        var pos2 =5;
        var id = setInterval(buzz,50);
        contenu.style.left='5px';
        function buzz(){
            if((pos>0)&&(pos2>0)){
                contenu.style.left='-5px';
                pos-=100;
                pos2-=10;
            }
            else if((pos>0)&&(pos2<0)){
                contenu.style.left='5px';
                pos-=100;
                pos2+=10;
            }
            else if (pos<=0){
                contenu.style.left='0px';
                clearInterval(id);
                
            }
        }
    }
}
function trembler(){
    var contenu=document.getElementById('container');
    
    if((window.getComputedStyle(document.getElementById('container')).top)!='0px'){
        var pos =1000;
        var pos2 =5;
        var id = setInterval(buzz,50);
        contenu.style.top='calc(50vh - 30vh + 5px)';
    function buzz(){
        if((pos>0)&&(pos2>0)){
            contenu.style.top='calc(50vh - 30vh - 10px)';
            pos-=100;
            pos2-=10;
        }
        else if((pos>0)&&(pos2<0)){
            contenu.style.top='calc(50vh - 30vh + 10px)';
            pos-=100;
            pos2+=10;
        }
        else if (pos<=0){
            clearInterval(id);
        }
    }
    }else{
        var pos =1000;
        var pos2 =5;
        var id = setInterval(buzz,50);
        contenu.style.top='5px';
        function buzz(){
            if((pos>0)&&(pos2>0)){
                contenu.style.top='-5px';
                pos-=100;
                pos2-=10;
            }
            else if((pos>0)&&(pos2<0)){
                contenu.style.top='5px';
                pos-=100;
                pos2+=10;
            }
            else if (pos<=0){
                contenu.style.top='0px';
                clearInterval(id);
                
            }
        }
    }
}
function attaquer(ennemie,perso)
{   bandeSon('perso.wav');
    setTimeout(attendre,3000);
    document.getElementById('sante').innerHTML="Santé: "+perso.santé;
    if(ennemie.santé>perso.degat){
    ennemie.santé-=perso.degat;
    document.getElementById('santeEnnemie').innerHTML='Santé: '+ennemie.santé;
    }
    else if(ennemie.santé<=perso.degat){
        ennemie.santé=0;
        document.getElementById('santeEnnemie').innerHTML="Santé: 0";
        if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="humain"){document.getElementById('imageEnnemie').setAttribute('src','image/alcooliqueVictoire.jpg');}
        else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="elf"){document.getElementById('imageEnnemie').setAttribute('src','image/elf.jpg');}
        else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="orc"){document.getElementById('imageEnnemie').setAttribute('src','image/orc.jpg');}
        else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="demon"){document.getElementById('imageEnnemie').setAttribute('src','image/demonBourre.jpg');}
        
        alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");
        choixEnnemie.disabled=false;
        document.location.reload();
    }
}
function attaquer2(ennemie,perso)
{   bandeSon('ennemie.mp3');
    setTimeout(attendre,1000);
    if(ennemie.santé>66){
        document.getElementById('im2').style.display="none";
    }
    else if(ennemie.santé>33){
        document.getElementById('im3').style.display="none";
    }
    document.getElementById('santeEnnemie').innerHTML="Santé: "+perso.santé;
    if(ennemie.santé>perso.degat){
    ennemie.santé-=perso.degat;
    document.getElementById('sante').innerHTML='Santé: '+ennemie.santé;
    }
    else if(ennemie.santé<=perso.degat){
        ennemie.santé=0;
        document.getElementById('im1').style.display="none";
        document.getElementById('sante').innerHTML="Santé: 0";
        alert("Vous vous êtes fait défoncer...noob!");
        choixEnnemie.disabled=false;
        document.location.reload();
    }
}
function rendreCoup(ennemie,perso){
    var chance = Math.random()*100;
    var vie;
    if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="humain"){vie = 100;}
    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="elf"){vie = 130;}
    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="orc"){vie = 200;}
    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="demon"){vie = 300;}
    
    if((perso.santé<=vie)&&(chance<=10)){
       setTimeout(function(){attaquer2(ennemie,perso);},2000);
        setTimeout(trembler,2000);
    }
        
    else if((perso.santé<=vie*0.8)&&(chance<=40)){
       setTimeout(function(){attaquer2(ennemie,perso);},2000);
        setTimeout(trembler,2000);
    }
    else if((perso.santé<=vie*0.6)&&(chance<=60)){
       setTimeout(function(){attaquer2(ennemie,perso);},2000);
        setTimeout(trembler,2000);
    }
    else if((perso.santé<=vie*0.5)&&(chance<=70)){
       setTimeout(function(){attaquer2(ennemie,perso);},2000);
        setTimeout(trembler,2000);
    }
    else if((perso.santé<=vie*0.4)&&(chance<=80)){
       setTimeout(function(){attaquer2(ennemie,perso);},2000);
        setTimeout(trembler,2000);
    }
    else if((perso.santé<=vie*0.3)&&(chance<=90)){
       setTimeout(function(){attaquer2(ennemie,perso);},2000);
        setTimeout(trembler,2000);
    }
    else if((perso.santé<=vie*0.2)&&(chance<=100)){
       setTimeout(function(){attaquer2(ennemie,perso);},2000);
        setTimeout(trembler,2000);
    }
}
var nain = new Personnage("Arldof",100,0,5);

document.getElementById('im4').style.display="none";
document.getElementById('im5').style.display="none";
document.getElementById('im6').style.display="none";

document.getElementById('im7').style.display="none";
document.getElementById('im8').style.display="none";
document.getElementById('im9').style.display="none";


document.getElementById('nom').innerHTML+=nain.nom;
document.getElementById('sante').innerHTML+=nain.santé;
document.getElementById('alcool').innerHTML+=nain.alcool;
document.getElementById('degat').innerHTML+=nain.degat;

document.getElementById('boutonBoire').addEventListener('click',function boire() {
    bandeSon('boire.mp3');
    setTimeout(attendre,5000);
    if (nain.degat<15){
        document.getElementById('im7').style.display="initial";
    }
    else if (nain.degat<25){
        document.getElementById('im8').style.display="initial";
    }
    else if (nain.degat<35){
        document.getElementById('im9').style.display="initial";
    }
    if(nain.santé<66){
        document.getElementById('im2').style.display="none";
    }
    else if(nain.santé<33){
        document.getElementById('im3').style.display="none";
    }
    if(nain.alcool>=1.5){
        if(nain.santé>10){
            nain.santé-=10;
            document.getElementById('sante').innerHTML="Santé: "+ nain.santé;
            nain.alcool+=0.25;
            document.getElementById('alcool').innerHTML="Gramme par litre: " + nain.alcool;    
            }
        else {
            document.getElementById('sante').innerHTML="Santé: 0 </br>Vous êtes mort... Ivrogne !"
            alert("Vous êtes mort... Ivrogne !");
            document.location.reload();
        }
    }
    else{nain.alcool+=0.25;
        document.getElementById('alcool').innerHTML="Gramme par litre: " + nain.alcool;
        nain.degat+=5;
        document.getElementById('degat').innerHTML="Force de frappe: "+nain.degat;
        if (nain.alcool<0.75){
            document.getElementById('im4').style.display="initial";
        }
        else if (nain.alcool<1.25){
            document.getElementById('im5').style.display="initial";
        }
        else if (nain.alcool<1.75){
            document.getElementById('im6').style.display="initial";
        }
    }});

document.getElementById('boutonVomir').addEventListener('click', function vomir(){
    bandeSon('vomi.mp3');
    setTimeout(attendre,3000);
    if (nain.alcool<0.75){
        document.getElementById('im4').style.display="none";
    }
    else if (nain.alcool<1.25){
        document.getElementById('im5').style.display="none";
    }
    else if (nain.alcool<1.75){
        document.getElementById('im6').style.display="none";
    }
    if(nain.santé>10){
        if(nain.alcool>0.5){
            nain.alcool-=0.5;
            document.getElementById('alcool').innerHTML="Gramme par litre: "+ nain.alcool;
        }
        else{nain.alcool=0;
            document.getElementById('alcool').innerHTML="Gramme par litre: 0"
        }  
    }
    else {
        alert("Vous êtes mort... Ivrogne !");
        document.location.reload();
    }
});

document.getElementById('boutonManger').addEventListener('click', function manger(){
    bandeSon('chips.mp3');
    setTimeout(attendre,6000);
    if(nain.santé>66){
        document.getElementById('im2').style.display="initial";
    }
    else if(nain.santé>33){
        document.getElementById('im3').style.display="initial";
    }
    if(nain.santé>10){
        if(nain.santé<80){
        nain.santé+=20;
        document.getElementById('sante').innerHTML="Santé: "+nain.santé;}
        else{
            nain.santé=100;
            document.getElementById('sante').innerHTML="Santé: "+nain.santé;}
    }
    else {
        alert("Vous êtes mort... Ivrogne !");
        document.location.reload();
    }
});


var choixEnnemie = document.getElementById('choixClass');
function reload (){
    document.location.reload(false);
}
choixEnnemie.addEventListener('change', function(){
    if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="humain"){
        choixEnnemie.disabled=true;
        var humain = new Personnage("Robert",100,0,5);
        document.getElementById('nomEnnemie').innerHTML="Nom: "+ humain.nom;
        document.getElementById('santeEnnemie').innerHTML="Santé: "+ humain.santé;
        document.getElementById('imageEnnemie').setAttribute('src','image/humain.jpg');
        document.getElementById('boutonFrapper').addEventListener('click', function(){attaquer(humain,nain);vibrer();rendreCoup(nain,humain);});
        document.getElementById('boutonBoire').addEventListener('click', function(){rendreCoup(nain,humain);});
        document.getElementById('boutonVomir').addEventListener('click', function(){rendreCoup(nain,humain);});
        document.getElementById('boutonManger').addEventListener('click', function(){rendreCoup(nain,humain);});
    }
    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="elf"){
        choixEnnemie.disabled=true;
        var elf = new Personnage("Dégolasse",130,0,8);
        document.getElementById('nomEnnemie').innerHTML="Nom: "+ elf.nom;
        document.getElementById('santeEnnemie').innerHTML="Santé: "+elf.santé;
        document.getElementById('imageEnnemie').setAttribute('src','image/elfNeuf.jpg');
        document.getElementById('boutonFrapper').addEventListener('click', function(){attaquer(elf,nain);vibrer();rendreCoup(nain,elf);});
        document.getElementById('boutonBoire').addEventListener('click', function(){rendreCoup(nain,elf);});
        document.getElementById('boutonVomir').addEventListener('click', function(){rendreCoup(nain,elf);});
        document.getElementById('boutonManger').addEventListener('click', function(){rendreCoup(nain,elf);});
    }

    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="orc"){
        choixEnnemie.disabled=true;
        var orc = new Personnage("Vormac",200,0,15);
        document.getElementById('nomEnnemie').innerHTML="Nom: "+ orc.nom;
        document.getElementById('santeEnnemie').innerHTML="Santé: "+orc.santé;
        document.getElementById('imageEnnemie').setAttribute('src','image/orcNeuf.jpg');
        document.getElementById('boutonFrapper').addEventListener('click', function(){attaquer(orc,nain);vibrer();rendreCoup(nain,orc);});
        document.getElementById('boutonBoire').addEventListener('click', function(){rendreCoup(nain,orc);});
        document.getElementById('boutonVomir').addEventListener('click', function(){rendreCoup(nain,orc);});
        document.getElementById('boutonManger').addEventListener('click', function(){rendreCoup(nain,orc);});
    }
    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="demon"){
        choixEnnemie.disabled=true;
        var demon = new Personnage("Fornax",300,0,20);
        document.getElementById('nomEnnemie').innerHTML="Nom: "+ demon.nom;
        document.getElementById('santeEnnemie').innerHTML="Santé: "+demon.santé;
        document.getElementById('imageEnnemie').setAttribute('src','image/demon.jpg');
        document.getElementById('boutonFrapper').addEventListener('click', function(){attaquer(demon,nain);vibrer();rendreCoup(nain,demon);});
        document.getElementById('boutonBoire').addEventListener('click', function(){rendreCoup(nain,demon);});
        document.getElementById('boutonVomir').addEventListener('click', function(){rendreCoup(nain,demon);});
        document.getElementById('boutonManger').addEventListener('click', function(){rendreCoup(nain,demon);});
    }
});

console.log(window.getComputedStyle(document.getElementById('container')).top);

