import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { InputField } from "./ui/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";
import { loginSchema } from "../layouts/auth/vaildation";
import Button from "./ui/Button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    dispatch(setUser(data));
    navigate("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-transparent p-10 pt-12 pb-28 rounded-lg border border-gray-200 w-full"
    >
      <header className="flex flex-col gap-2 items-center justify-center max-w-lg mx-auto mb-8">
        <h2 className="text-xl font-medium text-secondaryBlue">Welcome back</h2>
        <p className="text-sm font-light text-gray-600 text-center">
          Please enter your account details to log in to your dashboard
        </p>
      </header>
      <fieldset className="flex flex-col bg-gray-100 p-8 rounded-lg gap-4 border-none">
        <InputField
          label="Email"
          name="emailAddress"
          register={register}
          placeholder="Enter your email"
          error={!!errors.emailAddress}
          errorText={errors.emailAddress && errors.emailAddress.message}
        />
        <InputField
          register={register}
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          error={!!errors.password}
          errorText={errors.password && errors.password.message}
        />
        <p className="text-xs font-light text-gray-500 underline cursor-pointer">
          Forgot Password
        </p>
        <Button className="text-secondaryBlue font-bold">
          Login
        </Button>
      </fieldset>
    </form>
  );
};

export default Login;