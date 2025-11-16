import { isNil } from 'lodash';
import moment from 'moment/moment';
import { Param } from './Param.ts';

export class Item {
	constructor(
		public title: string,
		public date: string,
		public description?: string,
		private slug: string,
		public params: Param[]
	) {}

	public get hasDescription(): boolean {
		return !isNil( this.description )
	}

	public get link(): string {
		return `https://mariaguell.cat/random/s/${ this.slug }.html?${ this.query }`
	}

	public get query(): string {
		return this.params.map( el => `${ el.key }=${ el.value }` ).join( '&' )
	}

	public get formatedDate(): string {
		return moment( this.date ).format( 'DD/MM/YYYY' )
	}
}
