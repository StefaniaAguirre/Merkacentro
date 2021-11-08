import { Route } from '@angular/router';
import { InfoContratoComponent } from './info-contrato/info-contrato.component';
import { InfoPermisosComponent } from './info-permisos/info-permisos.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
// import { OrderCreateOrderResolver, OrderEditResolver, OrderProductsResolver, OrderResolver, OrdersOrderResolver } from "./order.resolvers";
import { EmpleadosComponent } from './empleados.component'; 
export const EmpleadoRutas: Route[] = [
    {
        path     : '',
        component: EmpleadosComponent,
        children : [
            {
                path     : 'infoPersonal',
                component: InfoPersonalComponent,
                // resolve  : {
                //     task: OrderResolver
                // }
            },
            {
                path     : 'addOrder',
                component: InfoPermisosComponent,
                // resolve      : {
                //     task: OrderCreateOrderResolver                   
                // }
            },
            {
                path     : ':idOrder',
                component: InfoContratoComponent,
                // resolve      : {
                //     task     : OrdersOrderResolver,
                //     edit     : OrderEditResolver,
                //     products : OrderProductsResolver
                // }
            }
        ]
    }
]