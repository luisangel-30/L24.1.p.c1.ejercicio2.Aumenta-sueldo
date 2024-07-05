export default class CL_empleados{
    constructor(cedula,suelact,tipoempleado){
        this.cedula=cedula;
        this.suelact=suelact;
        this.tipoempleado=tipoempleado;
    }
    set cedula(c){
        this._cedula=+c;
    }
    get cedula(){
        return this._cedula;
    }
    set suelact(s){
        this._suelact=+s;

    }
    get suelact(){
        return this._suelact;
    }
    set tipoemplado(t){
        this._tipoempleado=t;
    }
    get tipoemplado(){
        return this._tipoempleado;
    }
    aumento(){
        if(this.tipoempleado=="1")
            return this.suelact*0.20;
        else(this.tipoempleado=="2")
        return this.suelact*0.10;
    }
    sueltotal(){
     return this.suelact+this.aumento();
    }
}