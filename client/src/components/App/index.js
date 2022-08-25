import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import User from "../User";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#1A2027',
	textAlign: 'center',
}));

function App() {

	return (<>
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<User />
				</Grid>
				<Grid item xs={4}>
					<User />
				</Grid>
				<Grid item xs={4}>
					<User />
				</Grid>
				<Grid item xs={4}>
					<User />
				</Grid>
				<Grid item xs={4}>
					<User />
				</Grid>
			</Grid>
		</Container>
	</>

	);
}
export default App;