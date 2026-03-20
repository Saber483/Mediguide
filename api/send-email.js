export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY" });
  }

  const { patientName, patientEmail, doctorName, doctorHospital, date, time, visitType, insurance } = req.body;

  try {
    // Email to patient
    const patientEmail_res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "MediGuide <onboarding@resend.dev>",
        to: patientEmail,
        subject: `Appointment Request Confirmed — ${doctorName}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <div style="background: linear-gradient(135deg, #4A90D9, #7B5EA7); padding: 24px; border-radius: 16px 16px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">⚕ MediGuide</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Your Appointment Request</p>
            </div>
            <div style="background: #f8fbff; padding: 24px; border-radius: 0 0 16px 16px; border: 1px solid #e0e7ff;">
              <h2 style="color: #1a1a2e;">Hi ${patientName}! 👋</h2>
              <p style="color: #555;">Your appointment request has been sent to <strong>${doctorName}</strong>. The clinic will contact you to confirm.</p>
              
              <div style="background: white; border: 1.5px solid #e0e7ff; border-radius: 12px; padding: 16px; margin: 16px 0;">
                <h3 style="color: #4A90D9; margin: 0 0 12px;">Appointment Details</h3>
                <p style="margin: 6px 0; color: #333;">👨‍⚕️ <strong>Doctor:</strong> ${doctorName}</p>
                <p style="margin: 6px 0; color: #333;">🏥 <strong>Clinic:</strong> ${doctorHospital}</p>
                <p style="margin: 6px 0; color: #333;">📅 <strong>Date:</strong> ${date}</p>
                <p style="margin: 6px 0; color: #333;">🕐 <strong>Time:</strong> ${time}</p>
                <p style="margin: 6px 0; color: #333;">🩺 <strong>Visit Type:</strong> ${visitType}</p>
                <p style="margin: 6px 0; color: #333;">🛡️ <strong>Insurance:</strong> ${insurance}</p>
              </div>

              <div style="background: #fff8e8; border: 1.5px solid #F5A623; border-radius: 12px; padding: 16px; margin: 16px 0;">
                <p style="margin: 0; color: #7A5000;">⚠️ <strong>Important:</strong> This is a request, not a confirmed appointment. The clinic will contact you within 1-2 business days to confirm.</p>
              </div>

              <p style="color: #888; font-size: 12px; margin-top: 24px;">This email was sent by MediGuide — Your Health Navigator. <a href="https://mediguide-nine.vercel.app" style="color: #4A90D9;">mediguide-nine.vercel.app</a></p>
            </div>
          </div>
        `,
      }),
    });

    const result = await patientEmail_res.json();

    if (!patientEmail_res.ok) {
      return res.status(500).json({ error: "Failed to send email", details: result });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: "Email error: " + error.message });
  }
}
