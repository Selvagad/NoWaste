export class ObjetTrie {
    public Id:number;
    public Type: string;

    public constructor (data?){
        this.setValue(data);

    }
    setValue (data?){
    if (data == null) return;
    if (data.hasOwnProperty('Id')) this.Id = data.Id;
    if (data.hasOwnProperty('Type')) this.Type = data.Type;    
    }
    setId(Id:number){
        this.Id = Id;
    }
    setType(s:string){
        this.Type=s;
    }
}
