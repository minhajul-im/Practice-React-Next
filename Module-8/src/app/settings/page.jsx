import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <div>
        <Link href={"@setting/log"}>logs</Link>
        <Link href={"@settings/delete"}>delete</Link>
      </div>
    </div>
  );
};

export default Settings;
