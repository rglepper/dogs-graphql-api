import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DogsService } from './dogs.service';
import { Dog } from './interface/dog.interface';
import { DogModel } from './model/dog.model';

@Resolver()
export class DogsResolver {

	constructor(private readonly dogsService: DogsService) {}

	@Query(() => [DogModel])
	async getDogs(): Promise<Dog[]> {
		return this.dogsService.getDogs();
	}

	@Query(() => String)
	async hello() {
		return this.appService.getHello();
	}
}
