import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';

@JsonController('/')
@Service()
export default class MainController {
  @Get('/')
  async main() {
    return 'Welcome to api server';
  }
}
