import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        console.log(`[Request] ${req.method} ${req.url}`);

        const now = Date.now();
        res.on('finish', () => {
            const elapsed = Date.now() - now;
            console.log(`[Response] ${req.method} ${req.url} - ${res.statusCode} - ${elapsed}ms`);
        });

        next();
    }
}
