class Personnage{
    constructor (nom,santé,alcool,degat){
        this.nom= nom;
        this.santé=100;
        this.alcool=0;
        this.degat=5;
    }
}

const nain = new Personnage("Arldof");

document.getElementById('nom').innerHTML+=nain.nom;
document.getElementById('sante').innerHTML+=nain.santé;
document.getElementById('alcool').innerHTML+=nain.alcool;
document.getElementById('degat').innerHTML+=nain.degat;

document.getElementById('boutonBoire').addEventListener('click',function boire() {
    
    if(nain.alcool>=1.5){
        if(nain.santé>10){nain.santé-=10;
            document.getElementById('sante').innerHTML="Santé: "+ nain.santé;
            nain.alcool+=0.25;
        document.getElementById('alcool').innerHTML="Gramme par litre: " + nain.alcool;}
        else {
            document.getElementById('sante').innerHTML="Santé: 0 </br>Vous êtes mort... Ivrogne !"
        }
    }
    else{nain.alcool+=0.25;
        document.getElementById('alcool').innerHTML="Gramme par litre: " + nain.alcool;}
});

document.getElementById('boutonVomir').addEventListener('click', function vomir(){
    if(nain.alcool>0.5){
        nain.alcool-=0.5;
        document.getElementById('alcool').innerHTML="Gramme par litre: "+ nain.alcool;
    }
    else{nain.alcool=0;
        document.getElementById('alcool').innerHTML="Gramme par litre: 0"
    }  
});

document.getElementById('boutonManger').addEventListener('click', function manger(){
    
})
