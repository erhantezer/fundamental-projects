import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const currentUser = true;

  return (
    currentUser ? <Outlet /> : <Navigate to="/" replace />
  )
}

export default PrivateRouter;