import { Cat } from './cat.interface';

export interface ICatsService {
    createCat(cat: Cat): Promise<any>;

    deleteCat(id: number): Promise<any>;

    updateCat(id: number, cat: Cat): Promise<any>;

    findOneCat(id: number): Promise<any>;
}
