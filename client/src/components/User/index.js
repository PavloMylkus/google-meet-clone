import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';


const User = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setData(data.users.name));
	}, []);

	return (<>
		<Card sx={{
			maxWidth: 345,
			maxHeight: 180,

		}}>
			<CardMedia
				sx={{}}
				component="img"
				alt="user"
				height="100%"
				image='https://picsum.photos/id/237/345/180' />

			<Typography sx={{
				background: "none",
				position: "relative",
				bottom: 30,
				color: "#fff"
			}}
				component="div">
				{!data ? "Loading..." : data}
			</Typography>

		</Card>
	</>
	);
}

export default User;