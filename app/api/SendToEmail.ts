"use server"

import { FormData } from "@/app/Components/Contact/Contact"
import { Resend } from "resend"
import EmailTemplate from "./EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)


export const SendToEmail = async (data: FormData) => {
    await resend.emails.send({
        to: "amdrummer2015@gmail.com",
        from: "Aram The Dev <onboarding@resend.dev>",
        subject: `New contact form from: ${data.name}`,
        react: EmailTemplate(data),
    });
}