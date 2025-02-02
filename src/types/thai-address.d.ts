export interface IExpanded {
    province_code?: string;
    province: string;
    district_code?: string;
    district: string;
    sub_district_code?: string;
    sub_district: string;
    postal_code: string;
}

export interface IExpandedWithPoint extends IExpanded {
    point?: number;
}
