import { Outlet } from "react-router-dom";
import "../assets/styles/global.css";
import "./MainLayout.css";
import Background from "../components/Background";

export default function MainLayout() {
    return (
        <>
            <Background />
            <div className="main-layout">
                <Outlet />
            </div>
        </>
    )
}