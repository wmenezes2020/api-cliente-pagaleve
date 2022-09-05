import { 
    Injectable,
} from '@nestjs/common';

@Injectable()
export class AwsAuth {
    
    static awsConfig () {
        const config = {
            'region': process.env.AWS_REGION,
            "endpoint": process.env.DYNAMODB_ENDPOINT,
            'accessKeyId': process.env.AWS_ACCESS_KEY_ID,
            'secretAccessKey': process.env.AWS_SECRET_ACCESS_KEY,
        };
        return config;
    }
}