import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import MoneyIcon from "@mui/icons-material/Money";

export const InfoCard = (props: any) => {
  const { labelText, infoText, color } = props;
  console.log(props);
  return (
    <Card sx={{ height: "100%", boxShadow: 3 }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {labelText}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {infoText}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "error.main",
                height: "100%",
                width: 100,
              }}
              variant="square"
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
