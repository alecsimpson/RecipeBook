import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import styles from './Navbar.module.css';

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<AppBar position="static">
				<Toolbar>
					<Box display="flex" flexGrow={1}>
						<Button color="inherit" component={Link} to="/recipes">
							Recipes
						</Button>
						<Typography variant="body1" sx={{ marginX: 1 }}>
							/
						</Typography>
						<Button color="inherit" component={Link} to="/shoppingList">
							Shopping List
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
}