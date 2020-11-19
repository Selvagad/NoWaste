export class Contenu {
    public nbBouteille: number;
    public nbCannette: number;
    public nbEmballage: number;
    public nbInconnu: number;

    public constructor (data?){
        this.setValue(data);

    }

    setValue (data?){
        if (data == null) return;
        if (data.hasOwnProperty('nbBouteille')) this.nbBouteille = data.nbBouteille;
        if (data.hasOwnProperty('nbCannette')) this.nbCannette = data.nbCannette; 
        if (data.hasOwnProperty('nbEmballage')) this.nbEmballage = data.nbEmballage;
        if (data.hasOwnProperty('nbInconnu')) this.nbInconnu = data.nbInconnu;    
    }


}
