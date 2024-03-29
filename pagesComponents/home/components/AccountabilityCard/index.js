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

import {useMemo} from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import {Line} from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import Grid from "@mui/material/Grid";
import MDAvatar from "@/components/MDAvatar";
import Danny from "@/assets/images/profile-pics/Danny.png";
import Trent from "@/assets/images/profile-pics/Trent.png";
import Chris from "@/assets/images/profile-pics/Chris.png";
import Max from "@/assets/images/profile-pics/Max.png";
import bruceMars from "@/assets/images/bruce-mars.jpg";
import MDProgress from "@/components/MDProgress";
import {useCurrentUser} from "@/lib/user";
import {useGetWeeklyAccountabilityQuery} from "@/lib/accountability";
import {useGetAccountabilityGoalsQuery} from "@/lib/goals";
import Box from "@mui/material/Box";

// AccountabilityCard configurations

function AccountabilityCard({user, date, type, setType}) {

	const {[type]: goals} = user;

	const goalsCompleted = goals.filter(goal => goal.completed === true)
	const goalsColor = goals.length && goalsCompleted.length === goals.length ? 'rgb(72,168,68)' : 'secondary'

	const listItems = goals.map((goal, index) =>
		<li key={index} style={goal.completed ? {color: 'rgb(72,168,68)', fontWeight: 'bold'} : {color: '#4c5365'}}> {goal.goal} </li>
	)



	// Change to dynamic Profile Pic CRUD
	let profile;
	switch (user.name) {
		case 'Danny':
			profile = Danny;
			break;
		case 'Trent':
			profile = Trent;
			break;
		case 'Chris':
			profile = Chris;
			break;
		case 'Max':
			profile = Max;
	}

	return (
		<Card sx={{height: "100%", position: 'relative'}} className='accountabilityCard'>
			<Box sx={{position: 'absolute', top: 10, right: 10}}
			     onClick={() => setType(type == 'weekly' ? 'quarterly' : 'weekly')}
			>
				<Icon fontSize='XL'>navigate_next</Icon>
			</Box>
              <MDBox padding="1rem">
				<MDBox pt={3} pb={1} px={1}>
                    <MDBox display='flex' mb={4}>
						<MDAvatar
							src={profile.src}
							alt="profile-image"
							size="xl"
							shadow="sm"
						/>
						<MDBox display='flex' justifyContent='space-between' width='100%'>
							<MDBox lineHeight={1} my='auto' ml={2.5}>
								<MDTypography variant="h5" fontWeight="medium" textTransform="capitalize">
									{user.name}
								</MDTypography>
								<MDTypography variant="button" color="text" fontWeight="regular"
								              textTransform="capitalize">
									{user.role}
								</MDTypography>
							</MDBox>
							<MDTypography variant="h3" color={goalsColor} fontWeight="regular" textTransform="capitalize"
							              m='auto'>
								{`${goalsCompleted.length}/${goals.length}`}
							</MDTypography>
						</MDBox>
					</MDBox>
					<MDProgress  color={goalsColor} value={goals.length ? goalsCompleted.length / goals.length * 100 : 0}/>
					<MDTypography
						component="div"
						variant="button"
						color="text"
						fontWeight="light"
                        mt={3}
						ml={2}
					>
						<ol>
							{listItems}
						</ol>
					</MDTypography>
{/*					<Divider/>
					<MDBox display="flex" alignItems="center">
						<MDTypography
							variant="button"
							color="text"
							lineHeight={1}
							sx={{mt: 0.15, mr: 0.75}}
						>
							<Icon>schedule</Icon>
						</MDTypography>
						<MDTypography variant="button" color="text" fontWeight="light">
							{date}
						</MDTypography>
					</MDBox>*/}
				</MDBox>
			</MDBox>
		</Card>
	);
}

// Setting default values for the props of AccountabilityCard
AccountabilityCard.defaultProps = {
	color: "dark",
	description: "",
};

// Typechecking props for the AccountabilityCard
AccountabilityCard.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
	]),
	name: PropTypes.string,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	date: PropTypes.string
};

export default AccountabilityCard;
