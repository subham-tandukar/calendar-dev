export interface DataItem {
    [x: string]: any;
    tithi: any;
    id: number;
    bs_year_np: string;
    bs_month_np: string;
    bs_month_code_np: string;
    bs_date_np: string;
    ad_date_en: string;
    bs_month_code_en: string;
    bs_year_en: string;
    item: any;
    handleDayCloseOffCanvas: () => void;
 

}

export interface TithiProps {
    tithi_np:string;
}
export interface events {
    event_title_np:string
} 

export interface Data {
    data: DataItem[];
    events: events[]
        tithi: TithiProps[] ;
   
}  


export interface PageProps {
   calendarData: DataItem[];
   currentdate:any
   currenttime:number
   loading?:boolean
    nextCalendarData: DataItem[];
    previousCalendarData: DataItem[];
    selectedmonth:number
    selectedyear:number
}

