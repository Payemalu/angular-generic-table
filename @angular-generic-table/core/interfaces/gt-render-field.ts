import {GtRow} from './gt-row';
import {GtCustomComponent} from '../components/gt-custom-component-factory';
import {GtClickFunc} from './gt-config-field';
import {Injector, Type} from '@angular/core';

export interface GtRenderField<R extends GtRow, C extends GtCustomComponent<any>> {
    objectKey: string;
    renderValue?: any;
    click?: GtClickFunc<R>;
    expand?: boolean;
    sortValue: any;
    columnComponent: { type: Type<any>; injector?: Injector; };
    edited?: boolean;
}
