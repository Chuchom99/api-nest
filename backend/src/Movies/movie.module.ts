import { Module } from "@nestjs/common";

import { moviesController } from "./movie.controller";
import { moviesServive } from "./movie.service";

@Module({
    controllers: [moviesController],
    providers: [moviesServive]
})
export class moviesModule {};