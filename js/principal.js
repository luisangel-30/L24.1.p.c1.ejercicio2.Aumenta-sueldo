/*AUMENTA SUELDO
En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
personal administrativo. Se conoce de cada empleado su cédula, sueldo actual y el tipo de
empleado (1-Obrero, 2-Administrativo). Al procesar todos los empleados, la empresa desea
saber: a) el nuevo sueldo de cada empleado, por la empresa: b) el monto total que deberá
pagar sólo por concepto de incremento de sueldo a todo el personal y c) el porcentaje de
personal obrero.
La empresa entrega la siguiente información como referencia del reporte de salida requerido:
La cédula 555 tiene nuevo sueldo de $220
La cédula 888 tiene nuevo sueldo de $600
La cédula 777 tiene nuevo sueldo de $440
La cédula 666 tiene nuevo sueldo de $720
La cédula 444 tiene nuevo sueldo de $960
Total a pagar sólo por aumento de sueldo: $440
Porcentaje de personal obrero: 60%
Aclarando que la cédula 555 es de un administrativo con sueldo actual de 200, el 888 es
obrero con sueldo actual de 500, el 777 administrativo con 400, el 666 es obrero con sueldo
actual de 600, y el 444 es obrero con 800*/

import CL_empleados from "./CL_empleados.js";
import CL_empresa from "./CL_empresa.js";



let empl1 = new CL_empleados(555,200,"2");
let empl2 = new CL_empleados(888,500,"1");
let empl3 = new CL_empleados(777,400,"2");
let empl4 = new CL_empleados(666,600,"1");
let empl5 = new CL_empleados(444,800,"1");

let empresa= new CL_empresa();


empresa.procesarempleados(empl1);
empresa.procesarempleados(empl2);
empresa.procesarempleados(empl3);
empresa.procesarempleados(empl4);
empresa.procesarempleados(empl5);


 

let salida=document.getElementById("salida");
salida.innerHTML=`
La ${empl1.cedula} tiene nuevo sueldo de ${empl1.sueltotal()}$.
<br>La ${empl2.cedula} tiene nuevo sueldo de ${empl2.sueltotal()}$.
<br>La ${empl3.cedula} tiene nuevo sueldo de ${empl3.sueltotal()}$.
<br>La ${empl4.cedula} tiene nuevo sueldo de ${empl4.sueltotal()}$.
<br>La ${empl5.cedula} tiene nuevo sueldo de ${empl5.sueltotal()}$.
<br><br>
Total a pagar sólo por aumento de sueldo: $${empresa.totalpagadoaumento()}
<br>Porcentaje de personal obrero: ${empresa.porcentajeobrero()}%
<br>Porcentaje de personal administrativo: ${empresa.porcentajeadm()}%

`

