import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useRef, useState } from "react";
import { InfoCard } from "../components/Common/Card/InfoCard";
import MailTable from "../features/mail/components/Table";
import Mail from "../features/mail/Service/Mail";
import { IMail } from "../features/mail/interfaces/IMail";

export default function HomePage() {
  const [mails, setMails] = useState<IMail[]>([]);
  useEffect(() => {
    const fetchMail = async () => {
      const mailList = await Mail.getMails();
      setMails(mailList);
    };
    fetchMail();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <InfoCard
              labelText="Total Mail"
              infoText={mails.length}
              color="error.main"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard
              labelText="Total Mail"
              infoText={mails.length}
              color="error.main"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard
              labelText="Total Mail"
              infoText={mails.length}
              color="error.main"
            />
          </Grid>
        </Grid>
      </Box>
      <MailTable inMails={mails} />
    </>
  );
}
