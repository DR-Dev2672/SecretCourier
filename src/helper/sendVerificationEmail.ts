import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/verificationEmail";

export async function sendVerificationEmail(email:string,username:string,verificationCode:string):Promise<ApiResponse>{
 
    try {
    await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject: 'Secret Courier Verification Code',
    react: VerificationEmail({username,otp:verificationCode}),

    
});
return {success:true,message:"Verification email sent successfully"}
        

    } catch (error) {
        console.log("Error sending verification email",error)
        return {success:false,message:"Failed to send verification email"}
    }
}