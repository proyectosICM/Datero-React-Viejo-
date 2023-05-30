import React from "react";
import '../../Estilos/monitoreo.css'
import { MonitoreoTabla } from "./monitoreotabla";

export function Monitoreo(){
    return(
        <div className="container-monitoreo"> 
            <h1>Monitoreo de vehículos</h1>
            <MonitoreoTabla dir="IDA" rut="1" />
            <MonitoreoTabla dir="VUELTA" rut={1}/>
        </div>
    );
}