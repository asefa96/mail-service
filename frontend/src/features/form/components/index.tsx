import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

export default function ContactForm() {
  const [submit, setSubmit] = useState<Boolean>(false);

  const FormInputText = styled(TextField)(({ theme }) => ({
    width: "100%",
  }));

  const onSubmit = () => {
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 3000);
  };

  return (
    <Card sx={{ width: "50%" }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h4" component="span">
              Form
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormInputText id="standard-name" label="Name" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <FormInputText
              id="standard-company"
              label="Company"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputText
              id="standard-email"
              label="Email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputText
              id="standard-phone"
              label="Phone"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <FormInputText
              id="standard-message"
              label="Message"
              variant="standard"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "flex-end",
        }}
      >
        {submit ? (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Submitting
          </LoadingButton>
        ) : (
          <Button size="large" onClick={onSubmit}>
            Submit
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
