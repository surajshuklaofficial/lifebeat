import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { auth } from "../../api";

export const action = async ({ request }) => {
  try {
    let formData = await request.formData();
    const userData = Object.fromEntries(formData);

    if (userData.action === 'signup') if (userData.password !== userData.confirmPassword) {
      alert('Match Password!');
      return redirect('/auth');
    }

    const response = await auth(userData);
    
    localStorage.setItem('token', response.data.token, 'token');
    localStorage.setItem('userid', response.data.userId);
    localStorage.setItem('username', response.data.fullName);

    return redirect("/home/dashboard");
  } catch (error) {
    if (error?.response?.status === 409) {
      // User already exists while sign up
      alert(error.response?.data?.message);
      return redirect("/auth");
    } else if (error?.response?.status === 404) {
      // User not exists while login/signin
      alert(error.response?.data?.message);
      return redirect("/auth");
    } else if (error?.response?.status === 401) {
      // User password is incorrect
      alert("Incorrect Password!");
      return redirect("/auth");
    } else {
      // Handle other error cases here
      return { error: "An error occurred during sign-in" };
    }
  }
};

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-image-2 bg-center bg-fixed shadow-2xl ">
      <div className="w-full max-w-md p-4 text-ascent-dark rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>
        <Form method="post">
          {isLogin ? (
            <>
              <div className="mb-4">
                <label htmlFor="login-email">Email:</label>
                <input
                  name="email"
                  type="email"
                  id="login-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-4">
                <label htmlFor="login-password">Password:</label>
                <input
                  name="password"
                  type="password"
                  id="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div>
                <input name="action" value="signin" type="hidden" />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label htmlFor="signup-firstname">First Name:</label>
                <input
                  name="firstName"
                  type="text"
                  id="signup-firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-lastname">Last Name:</label>
                <input
                  name="lastName"
                  type="text"
                  id="signup-lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-email">Email:</label>
                <input
                  name="email"
                  type="email"
                  id="signup-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-password">Password:</label>
                <input
                  name="password"
                  type={passwordVisibility ? "text" : "password"}
                  id="signup-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-confirm-password">
                  Confirm Password:
                </label>
                <input
                  name="confirmPassword"
                  type={passwordVisibility ? "text" : "password"}
                  id="signup-confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-contactinfo">Contact Info:</label>
                <input
                  name="contactInfo"
                  type="text"
                  id="signup-contactinfo"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div>
                <input name="action" value="signup" type="hidden" />
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="toggle-password-visibility"
                  onChange={togglePasswordVisibility}
                />
                <label htmlFor="toggle-password-visibility">
                  Show Password
                </label>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-ascent-dark text-white py-2 rounded hover:bg-ascent"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </Form>
        <p
          className="text-sm text-center mt-4  text-white cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign up here"
            : "Already have an account? Log in here"}
        </p>
      </div>
    </div>
  );
};

export default Authentication;
