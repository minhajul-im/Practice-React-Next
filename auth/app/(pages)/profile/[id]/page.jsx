import Link from "next/link";

const UserProfile = ({ params }) => {
  return (
    <div className="signup_page_style">
      <div className="signup_div_style">
        <h1>
          Random path
          <span className="profile_id">{params.id}</span>
        </h1>
        <Link className="link_login_signup_style" href={"/"}>
          home
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
