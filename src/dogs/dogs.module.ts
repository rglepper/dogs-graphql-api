import { Module } from '@nestjs/common';
import { DogsResolver } from './dogs.resolver';
import { DogsService } from './dogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DogSchema } from './dog.schema';

@Module({
	imports: [MongooseModule.forFeature([{name: 'Dog', schema: DogSchema}])],
	providers: [
		DogsResolver,
		DogsService
	]
})
export class DogsModule {}
