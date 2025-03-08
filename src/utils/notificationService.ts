
import emailjs from '@emailjs/browser';

// EmailJS configuration
// In a real app, these would be environment variables
const EMAILJS_SERVICE_ID = "service_minechain";
const EMAILJS_TEMPLATE_ID = "template_signup_notification";
const EMAILJS_USER_ID = "your_emailjs_public_key";
const ADMIN_EMAIL = "dev@minechain.ai";

interface NewUserInfo {
  username: string;
  email: string;
}

export const sendNotificationEmail = async (newUser: NewUserInfo) => {
  try {
    // Prepare email parameters
    const emailParams = {
      to_email: ADMIN_EMAIL,
      from_name: "MineChain Signup Bot",
      subject: "New MineChain Signup",
      message: `A new user has signed up for MineChain!
        
Username: ${newUser.username}
Email: ${newUser.email}
Time: ${new Date().toLocaleString()}
        
Best regards,
MineChain System`,
    };

    // Log that we're attempting to send an email
    console.log("Attempting to send notification email to:", ADMIN_EMAIL);

    // For demo purposes, we'll simulate a successful email send
    // In a real app, you would uncomment the following code:
    /*
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailParams,
      EMAILJS_USER_ID
    );
    console.log("Email notification sent:", response);
    */
    
    // Simulate successful email
    console.log("Email notification simulated:", emailParams);
    
    // Note: In production, you would typically handle this on your backend, not in client-side code
  } catch (error) {
    console.error("Error sending notification email:", error);
    // We don't show this error to the user as it's an internal notification
  }
};
