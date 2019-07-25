import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { IAppService } from './app-service.interface';

@Controller('/')
export class AppController {
    constructor(
        @Inject(AppService)
        private readonly appService: IAppService,
    ) {}

    @Get()
    async root() {
        return this.appService.root();
    }
}
