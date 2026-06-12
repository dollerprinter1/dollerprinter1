export default function handler(req, res) {
  const { code, error } = req.query;
  res.status(200).send(`Callback received. Code: ${code || 'none'}. Error: ${error || 'none'}`);
}
