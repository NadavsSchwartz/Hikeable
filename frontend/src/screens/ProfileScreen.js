import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBBtn,
	MDBContainer,
	MDBNavbarLink,
} from 'mdb-react-ui-kit';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import MyBookings from '../components/MyBookings';
import MyReviews from '../components/MyReviews';
import ProfileSettings from '../components/ProfileSettings';

const ProfileScreen = ({ history }) => {
	const [showProfile, SetShowProfile] = useState(false);
	const [showReviews, SetShowReviews] = useState(false);
	const [showBooking, SetShowBooking] = useState(false);

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	useEffect(() => {
		SetShowProfile(true);
		return () => {};
	}, []);

	const handleProfile = () => {
		if (showProfile === false) {
			SetShowProfile(true);
			SetShowReviews(false);
			SetShowBooking(false);
		} else {
			SetShowProfile(false);
		}
	};

	const handleReviews = () => {
		if (showReviews === false) {
			SetShowProfile(false);
			SetShowBooking(false);
			SetShowReviews(true);
		} else {
			SetShowReviews(false);
		}
	};

	const handleBooking = () => {
		if (showBooking === false) {
			SetShowReviews(false);
			SetShowProfile(false);
			SetShowBooking(true);
		} else {
			SetShowBooking(false);
		}
	};
	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		}
	}, [history, userInfo]);
	//1cb155
	return (
		<>
			<MDBNavbar expand='lg' style={{ marginTop: '80px' }}>
				<MDBContainer fluid>
					<MDBNavbarNav>
						<MDBNavbarItem onClick={handleProfile}>
							<MDBNavbarLink href='#'>SETTINGS</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem
							style={{ marginLeft: '10px' }}
							onClick={handleReviews}
							size='md'
						>
							<MDBNavbarLink href='#'>REVIEWS</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem
							onClick={handleBooking}
							size='md'
							style={{ marginLeft: '10px' }}
						>
							<MDBNavbarLink active={showBooking} href='#'>
								ORDERS
							</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBContainer>
			</MDBNavbar>

			{error && <Message>{error}</Message>}
			{loading && <Loader />}

			<MDBContainer className='mt-3'>
				{showProfile && (
					<div>
						<ProfileSettings />
					</div>
				)}
				{showReviews && (
					<div>
						<MyReviews />
					</div>
				)}
				{showBooking && (
					<div>
						<MyBookings />
					</div>
				)}
			</MDBContainer>
		</>
	);
};

export default ProfileScreen;
