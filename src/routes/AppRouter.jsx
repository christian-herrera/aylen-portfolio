import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

// Layouts
import PublicLayout from "../layouts/PublicLayout";

// Paginas (todas)
const HomePage = lazy(() => import("../pages/public/HomePage"));
const NotFoundPage = lazy(() => import("../pages/errors/NotFoundPage"));
const UnauthorizedPage = lazy(() => import("../pages/errors/UnauthorizedPage"));

// --------------------------------------------------------------
// --> AppRouter.jsx - Configuración de Rutas
// --------------------------------------------------------------
function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>

                {/* Rutas Privadas */}
                {/* <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Route> */}

                {/* Errores */}
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/403" element={<UnauthorizedPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;