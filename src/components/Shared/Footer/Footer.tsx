import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instaIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedInIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box py={5} bgcolor="rgb(17, 26, 34)">
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#ffff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#ffff" component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography color="#ffff" component={Link} href="/login">
            Medicine
          </Typography>
          <Typography color="#ffff" component={Link} href="/login">
            Diagnostics
          </Typography>
          <Typography color="#ffff" component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" py={4} gap={2}>
          <Image width={30} height={30} src={facebookIcon} alt="Faceboook" />
          <Image width={30} height={30} src={instaIcon} alt="Faceboook" />
          <Image width={30} height={30} src={twitterIcon} alt="Faceboook" />
          <Image width={30} height={30} src={linkedInIcon} alt="Faceboook" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={4}
          gap={2}>
          <Typography component="p" color="white">
            &copy;2025 HealthCare. All Rights Reserved.
          </Typography>
          <Typography variant="h5" fontWeight={600} color="white">
            <Box component="span" color="primary.main">
              Health
            </Box>{" "}
            {""}
            Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
