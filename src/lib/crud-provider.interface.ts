import { Observable } from "rxjs";

export interface CrudProvider<T> {
    get: (key?: string) => Observable<T[]>;
    post: (entities: T[]) => Observable<T[]>;
    put: (entities: T[]) => Observable<T[]>;
    patch: (entities: T[]) => Observable<T[]>;
    delete: (entities: T[]) => Observable<T[]>;
}