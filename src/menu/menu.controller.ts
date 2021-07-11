import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './create-menu.dto';
import { UpdateMenuDto } from './update-menu.dto';
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  async getMenus() {
    //return all menus
    const menus = await this.menuService.index();
    return { data: menus };
  }
  @Get(':id')
  async getOneMenu(@Param('id') id: string) {
    //get / search one menu
    const result = await this.menuService.findMenu(id);
    return { data: result };
  }

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    console.log(createMenuDto);
    const result = await this.menuService.createMenu(createMenuDto);
    return { data: result };
  }

  @Delete(':id')
  async deleteMenu(@Param('id') id: string) {
    const result = await this.menuService.deleteMenu(id);
    return result;
  }

  @Patch(':id')
  async updateMenu(
    @Param('id') id: string,
    @Body() updateMenuDto: UpdateMenuDto,
  ) {
    // console.log(updateMenuDto);
    const result = await this.menuService.updateMenu(id, updateMenuDto);
    return { message: 'Successfully Updated Menu' };
  }
}
