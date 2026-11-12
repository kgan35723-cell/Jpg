export default async function handler(req, res) {
  const { BOT_TOKEN, CHAT_ID } = process.env;
  const { message } = req.body;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message })
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
