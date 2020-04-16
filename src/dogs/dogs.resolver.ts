import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DogsService } from './dogs.service';
import { Dog } from './interface/dog.interface';
import { DogModel } from './model/dog.model';
import { DogInput } from './inputs/dog.input';


@Resolver()
export class DogsResolver {

	constructor(private readonly dogsService: DogsService) {}

	@Query(() => [DogModel])
	async getDogs(): Promise<Dog[]> {
		return this.dogsService.getDogs();
	}

	@Mutation(returns => DogModel)
	async createDog(
		@Args('dogData') dogData: DogInput
	): Promise<Dog> {
		return await this.dogsService.createDog(dogData)
	}
}
