import { Controller, Get } from '@nestjs/common';

@Controller('beautiful')
export class BeautifulController {

  @Get('gorgeous')
  getHelloGorgeousPeople() {
    return 'Hello gorgeous people';
  }

  @Get('amazing')
  getHelloAmazingPeople() {
    return 'Hello amazing people';
  }
}
