import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreatePetInput {
    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;
}