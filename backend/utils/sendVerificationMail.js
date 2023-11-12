import createMainTransporter from './createMailTransporter.js';

const sendVerificationMail = (user) => {
    const transporter = createMainTransporter();

    const mailOptions = {
        from: `"Your Health Manager" <dummysingh_7@outlook.com>`,
        to: user.email,
        subject: "Verify your email...",
        html: `<p>Hello ${user.email}, verify your email by clicking this link...<p>
        <a href = '${process.env.CLIENT_URL}/verify-email?emailToken=${user.emailToken}'>Verify Your Email</a>
        `
    };
    
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Verification email send!");
        }
    })
};

export default sendVerificationMail;