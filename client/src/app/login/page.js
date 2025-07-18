import LoginCard from "../components/loginCom/login-card";

function Login() {
  return (
    <div
      className="h-screen w-full bg-[#e9ecff] flex justify-center items-center relative"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div
        className="absolute top-6 left-8 w-20 h-10 bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg)",
        }}
      ></div>
      <div>
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
