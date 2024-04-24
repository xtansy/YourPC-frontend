export interface Response<T> {
	message: string;
	data: T;
}

type HeadphoneType = "wired" | "wireless";
export interface HeadphoneDto {
	_id: string;
	img: string;
	title: string;
	price: number;
	rate: number;
	type: HeadphoneType;
}

export interface RefreshResponse extends HeadphoneDto {
	accessToken: string;
}
