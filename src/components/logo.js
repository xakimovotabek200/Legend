import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <div>
      <div>
        <h1 className="start">Legend</h1>
      </div>
    </div>
  );
};
