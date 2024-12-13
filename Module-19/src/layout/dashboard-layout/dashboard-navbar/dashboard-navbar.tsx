import { NavbarItem } from "./navbar-item/navbar-item";
import { HomeOutlined } from "@mui/icons-material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DescriptionIcon from "@mui/icons-material/Description";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const DashboardNavbar = () => {
  return (
    <nav className="p-2">
      <ul className="flex flex-row md:flex-col justify-center align-center py-2 md:py-0 md:px-2">
        <NavbarItem title="Dashboard" path="/dashboard" styles="pb-1">
          <HomeOutlined fontSize="medium" />
        </NavbarItem>
        <NavbarItem title="Order" path="/dashboard/orders">
          <ViewInArIcon fontSize="medium" />
        </NavbarItem>
        <NavbarItem title="Invoice" path="/">
          <DescriptionIcon fontSize="medium" />
        </NavbarItem>
        <NavbarItem title="Schedule" path="/">
          <EventAvailableIcon fontSize="medium" />
        </NavbarItem>
        <NavbarItem title="Refund" path="/">
          <RotateLeftIcon fontSize="medium" />
        </NavbarItem>
      </ul>
    </nav>
  );
};
