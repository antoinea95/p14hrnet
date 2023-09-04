import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

export default function NavigateButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLocation = () => {
    if (location.pathname === "/") {
      navigate("/employees");
    } else {
      navigate("/");
    }
  };

  return (
    <Button
      onClick={() => handleLocation()}
      variant="contained"
      color="tertiary"
    >
      {location.pathname === "/" ? "View current employees" : "Home"}
    </Button>
  );
}
