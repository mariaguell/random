import { isNil, random, round } from 'lodash';

export class Param {
	public value: string

	constructor(
		public key: string,
		public min: number,
		public max_?: number,
		private step_: number = 1
	) {
		this.value = this.randomValue.toString()
	}

	public get title(): string {
		const string = this.key.replaceAll( '_', ' ' )
		return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
	}

	public get step(): number {
		return isNil( this.step_ ) ? 1 : this.step_
	}

	public get max(): number {
		return isNil( this.max_ ) ? 100 : this.max_
	}

	private get randomValue(): number {
		return round( random( this.min, this.max ) / this.step, 1 ) * this.step
	}
}
