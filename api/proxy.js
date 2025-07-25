export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Get park ID from query parameter, default to Central Park (12)
    const parkId = req.query.parkId || '12';
    
    const response = await fetch(`https://www.nycgovparks.org/tennisreservation/availability/${parkId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const html = await response.text();
    res.status(200).json({ contents: html });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
