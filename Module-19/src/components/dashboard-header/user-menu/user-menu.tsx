import { Tooltip } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export const UserMenu = () => {
  return (
    <div className="flex items-center justify-end gap-8">
      <div>
        <Tooltip title={"Notifications"} placement="bottom" arrow>
          <div
            className={`rounded-full w-7 h-7 border border-black flex justify-center items-center bg-black text-white`}>
            <span>
              <AccessAlarmIcon fontSize="medium" />
            </span>
          </div>
        </Tooltip>
      </div>
      <div>
        <Tooltip title={"Profile"} placement="bottom" arrow>
          <div className="w-12 h-12 bg-gray-300 rounded-full border border-green-600 flex justify-center items-center">
            <span>A</span>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
