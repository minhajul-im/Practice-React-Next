"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Profile = () => {
  const route = useRouter();
  const [state, setState] = React.useState("nothing");

  const handleDetailsButton = async () => {
    const response = await axios.get("/api/users/user");
    const x = response.data.data._id;
    console.log(response.data);
    console.log("x=== ", x);
    setState(x);
  };

  const handleLogoutButton = async () => {
    try {
      await axios.get("/api/users/logout");
      route.push("/login");
      toast.success("logout successfully!");
    } catch (error) {
      console.log("ERROR FROM LOGOUT UI-PAGE!", error);
      toast.error(error);
    }
  };

  return (
    <div className="signup_page_style">
      <div className="signup_div_style">
        <h1>Profile Page</h1>

        <p className="profile_id">
          {state === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${state}`}>state</Link>
          )}
        </p>
        <button onClick={handleDetailsButton} className="button">
          details
        </button>
        <br />
        <button onClick={handleLogoutButton} className="button">
          logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
