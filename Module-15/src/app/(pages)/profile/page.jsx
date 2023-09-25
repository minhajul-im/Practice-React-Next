"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const session = useSession();

  return (
    <div className="signup_page_style">
      <div className="signup_div_style">
        <h1>Hello Profile Page</h1>
        <div className="input_button_div_style">
          <p>{JSON.stringify(session)}</p>
          <button
            className="button"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
