import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
	service_set_name: {
		type: String,
		required: true
	},
	service_description: {
		type: String,
		required: true
	},
	updated_at:{
		type:Date,
		required:false
	},
	created_at:{
		type:Date,
		default: Date.now
	},
	color:{
		type: String
	},
	menus:[],
	headers:[]

});

export interface Menu {
	 service_set_name:string;
	 service_description:string;
	 created_at:string;
	 updated_at?:string;
     color:string;
     menus:any[];
	 headers:any[];	
}