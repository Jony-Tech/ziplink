import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout(){
    return(
        <>
            {/* to show the header */}
            <Header/> 

            <main>
                {/* to show the container of each page */}
                <Outlet/>
            </main>
        </>
    )
}