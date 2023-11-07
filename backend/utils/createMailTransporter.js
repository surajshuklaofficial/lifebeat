import nodemailer from 'nodemailer';

const createMailTransporter = () => {
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "dummysingh_7@outlook.com",
            pass: '#Dummy@123'
        }
    });

    return transporter;
}

export default createMailTransporter;