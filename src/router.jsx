import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import IndexPage from "./pages/IndexPage";
import FAQPage from "./pages/FAQPage";
import SavedLinksPage from "./pages/SavedLinksPage";
import ResultLinkPage from "./pages/ResultLinkPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                {/* The layout applies to all of these routes */}
                <Route element={<Layout/>}> 
                    <Route path="/" element={<IndexPage/>} index/>
                    <Route path="/faq" element={<FAQPage/>}/>
                    <Route path="/guardados" element={<SavedLinksPage/>}/>
                    <Route path="/resultado" element={<ResultLinkPage/>}/>
                    
                </Route>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}