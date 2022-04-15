type TSliderMUI = {
	range: number[];
	functionToCall: (type: string, value: number[] | number) => void;
	type: string;
	defaultValue?: number[] | number;
	marks?: { value: number; label: string }[];
};

export default TSliderMUI;
