import { Module } from '@nestjs/common';
import { DogsResolver } from './dogs.resolver';
import { AppService } from '../app.service';

@Module({
	providers: [DogsResolver, AppService]
})
export class DogsModule {}
