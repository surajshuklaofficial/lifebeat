import React, { useEffect } from 'react';
import { verifyEmail } from '../api';
import { useLoaderData, useNavigate } from 'react-router-dom';

export const action = async ({ request }) => {
  const url = new URL(request.url);
  const emailVerificationToken = url.searchParams.get("emailToken");

  const response = await verifyEmail(emailVerificationToken).catch((error) => console.log(error));
  console.log(response)
  try {

    if (response.statusText === 'OK') { 
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userid', response.data.userId);
      localStorage.setItem('username', response.data.fullName);
    } else {
      console.log('Verification Unsuccessfull!');
    }
  } catch {
    console.log(response);
    console.log("Verification pending!")
  }

  return { isVerified: response?.data?.isVerified};
};

const EmailVerification = () => {
  const {isVerified} = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (isVerified) navigate('/home');
  }, [isVerified])

  return (
    <section>
        <p>{ !isVerified ? 'We have send an Verification email to you. Please Verify!': 'Email Verification Successfull!'}</p>
    </section>
  )
}

export default EmailVerification;