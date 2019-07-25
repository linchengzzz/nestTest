import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';
import { ICatsService } from './interface/cats-service.interface';

@Injectable()
export class CatsService implements ICatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepo: Repository<Cat>,
    ) {
    }

    async createCat(cat: Cat): Promise<Cat> {
        delete cat.id;
        return this.catRepo.save(cat);
    }

    async deleteCat(id: number): Promise<void> {
        await this.findOneById(id);
        await this.catRepo.delete(id);
    }

    async findOneCat(id: number): Promise<Cat> {
        return this.findOneById(id);
    }

    async updateCat(id: number, cat: Cat): Promise<void> {
        await this.findOneById(id);
        delete cat.id;
        await this.catRepo.update(id, cat);
    }
    private async findOneById(id: number): Promise<Cat> {
        const catInfo = await this.catRepo.findOne(id);
        if (!catInfo) {
            throw new HttpException(`指定 id=${id} 的猫猫不存在`, HttpStatus.NOT_FOUND);
        }
        return catInfo;
    }
}
