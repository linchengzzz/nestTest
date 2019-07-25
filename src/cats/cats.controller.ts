import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ICatsService } from './interface/cats-service.interface';
import { Result } from '../common/result.interface';
import { Cat } from './interface/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(
        @Inject(CatsService)
        private readonly catService: ICatsService,
    ) {
    }

    @Post('/')
    async createCat(@Body() cat: Cat): Promise<Result> {
        await this.catService.createCat(cat);
        return { code: 200, message: '新增成功' };
    }

    @Delete(':id')
    async deleteCat(@Param('id') id: number): Promise<Result> {
        await this.catService.deleteCat(id);
        return { code: 200, message: '删除成功' };
    }

    @Put(':id')
    async updateCat(@Param('id') id: number, @Body() cat: Cat): Promise<Result> {
        await this.catService.updateCat(id, cat);
        return { code: 200, message: '更新成功' };
    }

    @Get(':id')
    async findOneCat(@Param('id') id: number): Promise<Result> {
        const data = await this.catService.findOneCat(id);
        return { code: 200, message: '查询成功', data };
    }
}
