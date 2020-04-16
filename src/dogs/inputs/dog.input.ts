import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class DogInput {
	@Field()
	name: string;
	age: number;
	breed: string;
}

