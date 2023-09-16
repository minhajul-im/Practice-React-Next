import Link from "next/link";

const Home = () => {
  return (
    <div className="signup_page_style">
      <div className="signup_div_style">
        <h1>WelCome</h1>
        <div className="login_signup_text_style gap-8 text-red-600">
          <Link href={"/signup"}>signup</Link>
          <Link href={"/login"}>login</Link>
          <Link href={"/profile"}>profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
