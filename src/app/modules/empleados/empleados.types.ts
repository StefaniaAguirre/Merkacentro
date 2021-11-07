export interface Empleado {
    id: number;
    nombre: string;
    cedula: string;
    fechaNacimiento: Date;
    direccion: string;
    telefono: number;
    email:string;
    cargo: string;
    descripcionC: string;
}

export interface Contrato{
    fechaInicio: Date;
    fechafin: Date;
    
}

export interface Vacaciones{
    
}