import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //Componentes que contenga este módulo, es un arreglo.
    declarations : [
        HeroeComponent,
        ListadoComponent
    ],
    //Componentes, Servicios, etc, que van a ser visibles afuera de este módulo, cosas publicas
    exports : [
        ListadoComponent
    ],
    imports: [
        //Sirve para las directivas
        CommonModule
    ],
})

export class HeroesModule {}