import { Controller, Get } from "@nestjs/common";
import { moviesServive } from "./movie.service";

@Controller("movies") 
export class moviesController {
    constructor (private readonly movieService: moviesServive) {}

    @Get()
    getAllMovies() {
        return this.movieService.getMovies();
    }

}