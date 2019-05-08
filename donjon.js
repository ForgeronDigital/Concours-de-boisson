class Personnage{
    constructor (nom,santé,alcool,degat){
        this.nom= nom;
        this.santé=100;
        this.alcool=0;
        this.degat=5;
    }
}

class Ennemie{
    constructor (nom,santé,degat){
        this.nom= nom;
        this.santé=santé;
        this.degat=degat;
    }
}

const nain = new Personnage("Arldof");

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

var humain;
var elf;
var orc;

 var choixEnnemie = document.getElementById('choixClass');
 function reload (){
    document.location.reload(false);
}
choixEnnemie.addEventListener('change', function(){
    if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="humain"){
        choixEnnemie.disabled=true;
        humain = new Ennemie("Robert",100,5);
        document.getElementById('nomEnnemie').innerHTML="Nom: "+ humain.nom;
        document.getElementById('santeEnnemie').innerHTML="Santé: "+humain.santé;
        document.getElementById('imageEnnemie').setAttribute('src','image/humain.jpg');
        document.getElementById('boutonFrapper').addEventListener('click', function(){
                if(humain.santé>nain.degat){
                    humain.santé-=nain.degat;
                    document.getElementById('santeEnnemie').innerHTML='Santé: '+humain.santé;
                }
                else if(humain.santé<=nain.degat){
                    humain.santé=0;
                    document.getElementById('santeEnnemie').innerHTML="Santé: 0";
                    document.getElementById('imageEnnemie').setAttribute('src','image/alcooliqueVictoire.jpg');
                    alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");
                    choixEnnemie.disabled=false;
                    document.location.reload();}
     });}
    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="elf"){
        choixEnnemie.disabled=true;
        elf = new Ennemie("Dégolasse",130,8);
        document.getElementById('nomEnnemie').innerHTML="Nom: "+ elf.nom;
        document.getElementById('santeEnnemie').innerHTML="Santé: "+elf.santé;
        document.getElementById('imageEnnemie').setAttribute('src','image/elfNeuf.jpg');
        document.getElementById('boutonFrapper').addEventListener('click', function(){
            if(elf.santé>nain.degat){
            elf.santé-=nain.degat;
            document.getElementById('santeEnnemie').innerHTML='Santé: '+elf.santé;
            }
            else if(elf.santé<=nain.degat){
                elf.santé=0;
                document.getElementById('santeEnnemie').innerHTML="Santé: 0";
                document.getElementById('imageEnnemie').setAttribute('src','image/elf.jpg');
                alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");
                choixEnnemie.disabled=false;
                document.location.reload();
            }
    }
    );}
    else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="orc"){
        choixEnnemie.disabled=true;
        orc = new Ennemie("Vormac",200,15);
        document.getElementById('nomEnnemie').innerHTML="Nom: "+ orc.nom;
        document.getElementById('santeEnnemie').innerHTML="Santé: "+orc.santé;
        document.getElementById('imageEnnemie').setAttribute('src','image/orcNeuf.jpg');
        document.getElementById('boutonFrapper').addEventListener('click', function(){
            if(orc.santé>nain.degat){
            orc.santé-=nain.degat;
            document.getElementById('santeEnnemie').innerHTML='Santé: '+orc.santé;
            }
            else if(orc.santé<=nain.degat){
                orc.santé=0;
                document.getElementById('santeEnnemie').innerHTML="Santé: 0";
                document.getElementById('imageEnnemie').setAttribute('src','image/orc.jpg');
                alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");
                choixEnnemie.disabled=false;
                document.location.reload();
            }
    }
    );}
});
// if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="humain"){
    
//     humain = new Ennemie("Robert",100,5);
//     document.getElementById('nomEnnemie').innerHTML+= humain.nom;
//     document.getElementById('santeEnnemie').innerHTML+=humain.santé;
//     document.getElementById('imageEnnemie').setAttribute('src','image/humain.jpg');
//     document.getElementById('boutonFrapper').addEventListener('click', function(){
//             if(humain.santé>nain.degat){
//                 humain.santé-=nain.degat;
//                 document.getElementById('santeEnnemie').innerHTML='Santé: '+humain.santé;
//             }
//             else if(humain.santé<=nain.degat){
//                 humain.santé=0;
//                 document.getElementById('santeEnnemie').innerHTML="Santé: 0";
//                 document.getElementById('imageEnnemie').setAttribute('src','image/alcooliqueVictoire.jpg');
//                 alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");}
//  });}
// else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="elf"){
//     elf = new Ennemie("Dégolasse",130,8);
//     document.getElementById('nomEnnemie').innerHTML+= elf.nom;
//     document.getElementById('santeEnnemie').innerHTML+=elf.santé;
//     document.getElementById('imageEnnemie').setAttribute('src','image/elfNeuf.jpg');
//     document.getElementById('boutonFrapper').addEventListener('click', function(){
//         if(elf.santé>nain.degat){
//         elf.santé-=nain.degat;
//         document.getElementById('santeEnnemie').innerHTML='Santé: '+elf.santé;
//         }
//         else if(elf.santé<=nain.degat){
//             elf.santé=0;
//             document.getElementById('santeEnnemie').innerHTML="Santé: 0";
//             document.getElementById('imageEnnemie').setAttribute('src','image/elf.jpg');
//             alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");
//         }
// }
// );}
// else if(choixEnnemie.options[choixEnnemie.options.selectedIndex].value=="orc"){
//     orc = new Ennemie("Vormac",200,15);
//     document.getElementById('nomEnnemie').innerHTML+= orc.nom;
//     document.getElementById('santeEnnemie').innerHTML+=orc.santé;
//     document.getElementById('imageEnnemie').setAttribute('src','image/orcNeuf.jpg');
//     document.getElementById('boutonFrapper').addEventListener('click', function(){
//         if(orc.santé>nain.degat){
//         orc.santé-=nain.degat;
//         document.getElementById('santeEnnemie').innerHTML='Santé: '+orc.santé;
//         }
//         else if(orc.santé<=nain.degat){
//             orc.santé=0;
//             document.getElementById('santeEnnemie').innerHTML="Santé: 0";
//             document.getElementById('imageEnnemie').setAttribute('src','image/orc.jpg');
//             alert("Vous avez gagné ce duel de poivrot, bravo ! Changez d'adversaire maintenant");
//         }
// }
// );}


 console.log(choixEnnemie.options[choixEnnemie.options.selectedIndex].value)

