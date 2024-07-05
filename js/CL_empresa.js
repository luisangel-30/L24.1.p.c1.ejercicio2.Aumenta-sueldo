export default class CL_empresa{
    constructor(){
    this.acumaumento=0.0;
    this.contobreros=0;
    this.contadm=0;
    this.contempleados=0;
    }
    procesarempleados(emple){
        if(emple.tipoempleado == "1") {
                this.contobreros++; 

        }
        if(emple.tipoempleado == "2") {
                this.contadm++; 

            }
        this.acumaumento+=emple.aumento();
        this.contempleados++;
       
       
    }
    porcentajeobrero(){
         return (this.contobreros/this.contempleados)*100;
    }
    porcentajeadm(){
       return (this.contadm/this.contempleados)*100;
    }
    totalpagadoaumento(){
        return this.acumaumento;
    }

}