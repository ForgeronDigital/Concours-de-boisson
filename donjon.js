class Personnage{
    constructor (nom,santé,alcool,degat){
        this.nom= nom;
        this.santé=santé;
        this.alcool=alcool;
        this.degat=degat;
    }
}
function vibrer(){
    var contenu=document.getElementById('container');
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
}
function attaquer(ennemie,perso)
{
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
        
        alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");
        choixEnnemie.disabled=false;
        document.location.reload();
    }
}
function attaquer2(ennemie,perso)
{
    document.getElementById('santeEnnemie').innerHTML="Santé: "+perso.santé;
    if(ennemie.santé>perso.degat){
    ennemie.santé-=perso.degat;
    document.getElementById('sante').innerHTML='Santé: '+ennemie.santé;
    }
    else if(ennemie.santé<=perso.degat){
        ennemie.santé=0;
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
    
    if((perso.santé<=vie)&&(chance<=10)){
        attaquer2(ennemie,perso);}
    else if((perso.santé<=vie*0.8)&&(chance<=40)){
        attaquer2(ennemie,perso);
    }
    else if((perso.santé<=vie*0.6)&&(chance<=60)){
        attaquer2(ennemie,perso);
    }
    else if((perso.santé<=vie*0.5)&&(chance<=70)){
        attaquer2(ennemie,perso);
    }
    else if((perso.santé<=vie*0.4)&&(chance<=80)){
        attaquer2(ennemie,perso);
    }
    else if((perso.santé<=vie*0.3)&&(chance<=90)){
        attaquer2(ennemie,perso);
    }
    else if((perso.santé<=vie*0.2)&&(chance<=100)){
        attaquer2(ennemie,perso);
    }
}
var nain = new Personnage("Arldof",100,0,5);

document.getElementById('nom').innerHTML+=nain.nom;
document.getElementById('sante').innerHTML+=nain.santé;
document.getElementById('alcool').innerHTML+=nain.alcool;
document.getElementById('degat').innerHTML+=nain.degat;

document.getElementById('boutonBoire').addEventListener('click',function boire() {
    
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
        document.getElementById('degat').innerHTML="Force de frappe: "+nain.degat;}
});

document.getElementById('boutonVomir').addEventListener('click', function vomir(){
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
});

console.log(choixEnnemie.options[choixEnnemie.options.selectedIndex].value);

