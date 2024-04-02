
import { error } from "console";
import UpcomingEvents from "./UpcomingEvents";

export default async function page({
    currentdate
}) {
    const currentyear = currentdate.bs_year_en;
    const currentmonth = currentdate.bs_month_code_en;
    let Upcomingeventdata;


    const upcomingeventapi = `http://47.128.210.223/api/v1/calendar/events/months/bs/${currentyear}/${currentmonth}?type=upcoming`;

    try {
        const response = await fetch(upcomingeventapi, {
            cache: "no-store",
            next: {
                revalidate: 5000
              }
        });

        if (!response.ok) {
            throw new error("failed to fetch data");
        }
        Upcomingeventdata = await response.json();
    }
    catch (error) {
        console.error("error", error);


        return <div>error fetching. please try again</div>
    };


    return (
        <>

            <UpcomingEvents Upcomingeventdata={Upcomingeventdata.data} />

        </>
    )

}