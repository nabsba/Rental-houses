type TRangeFilter = {
	type: string;
	propertyForQuery: any;
	functionToCall: any;
	values: any[];
	marks?:
		| {
				value: number;
				label: string;
		  }[]
		| undefined;
};
export default TRangeFilter;
