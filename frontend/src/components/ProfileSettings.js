import {
	MDBBtn,
	MDBCol,
	MDBContainer,
	MDBInput,
	MDBRow,
	MDBFile,
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

import Loader from './Loader';
import Message from './Message';

const ProfileSettings = ({ history }) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [userImage, setUserImage] = useState('');

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success, error: UpdateUserError } = userUpdateProfile;

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
			if (!userInfo.user || success) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
				dispatch(getUserDetails());
			} else {
				setUserName(userInfo.user.name);
				setUserImage(userInfo.user.photo);
			}
		}
	}, [userInfo, history, user, success, dispatch]);
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateUserProfile({ name: userName }));
	};

	const handleUserImage = (imageData) => {
		console.log(URL.createObjectURL(imageData.target.files[0]));
		if (imageData.target.files && imageData.target.files[0]) {
			return setUserImage(URL.createObjectURL(imageData.target.files[0]));
		}
	};
	return (
		<MDBContainer className='py-5'>
			{error && <Message>{error}</Message>}
			{UpdateUserError && <Message>{UpdateUserError}</Message>}
			{loading && <Loader />}
			<MDBRow className='d-flex justify-content-center'>
				<MDBCol md='12'>
					<form onSubmit={submitHandler}>
						<p className='h4 text-center mb-4'>Update Profile Details</p>

						<label htmlFor='name' className='grey-text'>
							Name
						</label>
						<MDBInput
							type='name'
							id='name'
							className='form-control'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<br />
						<label htmlFor='password' className='grey-text '>
							New Password
						</label>
						<input
							type='password'
							id='password'
							className='form-control'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<label htmlFor='passwordConfirmation' className='grey-text mt-4'>
							Password Confirmation
						</label>
						<input
							type='password'
							id='passwordConfirmation'
							className='form-control'
						/>
						<label class='form-label' for='userImage' className='mt-4'>
							Image
						</label>
						<MDBFile
							type='file'
							class='form-control'
							id='userImage'
							onChange={handleUserImage}
						/>
						<div className='text-center my-4'>
							<img
								src={userImage}
								alt='userImage'
								style={{ maxWidth: '100px' }}
							/>
						</div>
						<div className='text-center mt-4'>
							<MDBBtn color='success' type='submit'>
								Update Profile Details
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default ProfileSettings;
