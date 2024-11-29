import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { useEffect } from "react";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-heroThree bg-cover text-gray-700">
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 rounded-2xl shadow-lg bg-white">
        <div className="flex flex-col items-center gap-4">
          <img src={Logo} className="h-[120px]" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
