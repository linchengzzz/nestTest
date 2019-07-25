import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware extends Logger implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        const body = JSON.stringify(req.body);
        super.verbose(`${req.method} ${req.url} ${body === '{}' ? '' : body}`, `Http Request`);
        next();
    }
}
