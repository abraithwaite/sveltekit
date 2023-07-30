export interface RouteParam {
	name: string;
	matcher: string;
	optional: boolean;
	rest: boolean;
	chained: boolean;
}

