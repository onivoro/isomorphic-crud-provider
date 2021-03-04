import { Observable } from "rxjs";
import { IIdentifiable } from "./identifiable.interface";

export interface CrudProvider<T extends IIdentifiable> {
    get: (key?: string) => Observable<T[]>;
    post: (entities: T[]) => Observable<T[]>;
    put: (entities: T[]) => Observable<T[]>;
    patch: (entities: T[]) => Observable<T[]>;
    delete: (entities: T[]) => Observable<T[]>;
}