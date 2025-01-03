import { useNavigate } from "react-router-dom";

export function LogoutButton({logout}) {

  const navigation = useNavigate();


  return (
    <button
      onClick={() => {
        logout();
        navigation("login");
      }}
      className="px-6 py-4 bg-red-600 rounded-md w-fit text-white"
    >
      Cerrar sesión
    </button>
  );
}