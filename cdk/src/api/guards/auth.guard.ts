import { 
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const authorization = request.headers.authorization;
        const noAuth = request.headers.noAuth;
        if(!(authorization || noAuth)){
            throw new HttpException(
            'Authorization: Bearer <token> header missing',
            HttpStatus.UNAUTHORIZED,
            );
        }
        return Promise.resolve(true);
    }
}