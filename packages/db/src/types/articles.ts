export interface GetArticlesParams {
	status?: string;
	category?: string;
	search?: string;
	featured?: boolean;
	limit?: number;
	offset?: number;
}
