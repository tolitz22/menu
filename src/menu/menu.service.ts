import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MenuSchema, Menu } from './menu.model';
import { Model } from 'mongoose';
import { CreateMenuDto } from './create-menu.dto';
import { UpdateMenuDto } from './update-menu.dto';
@Injectable()
export class MenuService {
  constructor(@InjectModel('Menu') private readonly menuModel: Model<Menu>) {}

  async index(): Promise<Menu[]> {
    const menus = await this.menuModel.find().exec();
    return menus.map((menu) => ({
      service_set_name: menu.service_set_name,
      menus: menu.menus,
      headers: menu.headers,
      created_at: menu.created_at,
      updated_at: menu.updated_at,
      service_description: menu.service_description,
      color: menu.color,
      _id: menu._id,
    }));
  }

  async findMenu(id: string): Promise<Menu> {
    const menu = await this.menuModel.findById(id);
    return menu;
  }

  async createMenu(value: CreateMenuDto) {
    // value.service_description = value.service_set_description;
    try {
      const createdMenu = new this.menuModel({
        service_set_name: value.service_set_description,
        service_description: value.service_set_description,
        ...value,
      });
      const saveMenu = await createdMenu.save();
      return { message: 'success' };
    } catch (err) {
      return { message: 'errors' };
    }
  }

  async deleteMenu(id: string) {
    const deleteItem = await this.menuModel.deleteOne({ _id: id });
    return { message: 'sucessfully deleted' };
  }

  async updateMenu(id: string, value: UpdateMenuDto) {
    const updateItem = await this.menuModel.findOneAndUpdate(
      { _id: value._id },
      {
        service_description: value.service_set_description,
        updated_at: Date.now().toString(),
        color: value.service_set_color,
        ...value,
      },
    );
    return { message: 'sucessfully updated' };
  }
}
