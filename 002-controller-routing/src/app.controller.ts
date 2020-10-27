import { Controller, Get } from '@nestjs/common';

@Controller('beautiful_controller')
export class MyBeautifulController {
  @Get()
  getHelloGorgeousPeople() {
    return "Hello Gorgeous People!";
  }

  @Get('/amazing')
  getHelloAmazingPeople() {
    return "Hello Amazing People!";
  }
}