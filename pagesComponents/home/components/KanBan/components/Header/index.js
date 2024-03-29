/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDAvatar from "/components/MDAvatar";
import MDButton from "/components/MDButton";

// Image


function Header() {
  const avatarStyles = {
    border: ({ borders: { borderWidth }, palette: { white } }) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <MDBox display="flex" alignItems="center">
      <MDBox mt={0.5} pr={1}>
        <MDBox mb={1} ml={-1.25} lineHeight={0}>
          <MDTypography variant="caption" color="secondary">
            Team members:
          </MDTypography>
        </MDBox>
        <MDBox display="flex">
          {/*<MDAvatar src={team1.src} alt="team-1" size="sm" sx={avatarStyles} />*/}
          {/*<MDAvatar src={team2.src} alt="team-1" size="sm" sx={avatarStyles} />*/}
          {/*<MDAvatar src={team3.src} alt="team-1" size="sm" sx={avatarStyles} />*/}
          {/*<MDAvatar src={team4.src} alt="team-1" size="sm" sx={avatarStyles} />*/}
          {/*<MDAvatar src={team5.src} alt="team-1" size="sm" sx={avatarStyles} />*/}
        </MDBox>
      </MDBox>
      <MDBox height="75%" alignSelf="flex-end">
        <Divider orientation="vertical" />
      </MDBox>
      <MDBox pl={1}>
        <MDButton variant="gradient" color="dark" iconOnly>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        </MDButton>
      </MDBox>
    </MDBox>
  );
}

export default Header;
