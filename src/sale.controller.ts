import { Controller, Get, Query, HttpCode } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';

@ApiTags('Sale')
@Controller('sale')
export class SaleController {
  @Get('crawl')
  @HttpCode(201)
  @ApiQuery({
    name: 'html',
    required: true,
    example: 'URL',
  })
  @ApiResponse({
    status: 201,
    description: 'Return raw html string',
    schema: {
      example: 'This is html',
    },
  })
  crawl(@Query('html') html: string) {
    const filePath = path.join(process.cwd(), 'src', 'bds.html');

    return fs.readFileSync(filePath, 'utf8');
  }
}
