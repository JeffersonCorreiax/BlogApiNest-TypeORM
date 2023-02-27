import { Controller, Get} from "@nestjs/common/decorators";
import { PostService } from "./post.service";
import { Post } from "./post.entity"

@Controller('post')
export class PostController {
    constructor( private readonly postService : PostService) {}


    @Get('list')
    async list(): Promise<Post[]>{
        return this.postService.list()
    }
}