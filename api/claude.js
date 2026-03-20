export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing ANTHROPIC_API_KEY", hint: "Check Vercel environment variables" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    let data;
    try { data = JSON.parse(text); } catch(e) { data = { raw: text }; }

    // Always return the full response so we can debug
    return res.status(response.status).json({ 
      _status: response.status,
      _ok: response.ok,
      ...data 
    });

  } catch (error) {
    return res.status(500).json({ error: "Proxy exception", message: error.message });
  }
}