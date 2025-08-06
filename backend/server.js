const http = require('http');
const url = require('url');

// Load initial data
let partners = require('./partners.json');

// Helper to send JSON responses with CORS headers
function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);

  if (req.method === 'OPTIONS') {
    return sendJson(res, 204, {});
  }

  // GET /api/partners
  if (req.method === 'GET' && parsed.pathname === '/api/partners') {
    return sendJson(res, 200, partners);
  }

  // GET /api/partners/:slug
  if (req.method === 'GET' && parsed.pathname.startsWith('/api/partners/')) {
    const slug = decodeURIComponent(parsed.pathname.split('/')[3]);
    const partner = partners.find((p) => p.slug === slug);
    return partner
      ? sendJson(res, 200, partner)
      : sendJson(res, 404, { error: 'Partner not found' });
  }

  // POST /api/partners
  if (req.method === 'POST' && parsed.pathname === '/api/partners') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const partner = JSON.parse(body);
        if (!partner || !partner.slug) {
          return sendJson(res, 400, { error: 'Invalid partner data' });
        }
        partners.push(partner);
        sendJson(res, 201, partner);
      } catch (e) {
        sendJson(res, 400, { error: 'Invalid JSON' });
      }
    });
    return;
  }

  // PUT /api/partners/:slug
  if (req.method === 'PUT' && parsed.pathname.startsWith('/api/partners/')) {
    const slug = decodeURIComponent(parsed.pathname.split('/')[3]);
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const updated = JSON.parse(body);
        const index = partners.findIndex((p) => p.slug === slug);
        if (index === -1) {
          return sendJson(res, 404, { error: 'Partner not found' });
        }
        partners[index] = updated;
        sendJson(res, 200, updated);
      } catch (e) {
        sendJson(res, 400, { error: 'Invalid JSON' });
      }
    });
    return;
  }

  // DELETE /api/partners/:slug
  if (req.method === 'DELETE' && parsed.pathname.startsWith('/api/partners/')) {
    const slug = decodeURIComponent(parsed.pathname.split('/')[3]);
    const index = partners.findIndex((p) => p.slug === slug);
    if (index === -1) {
      return sendJson(res, 404, { error: 'Partner not found' });
    }
    const removed = partners.splice(index, 1)[0];
    return sendJson(res, 200, removed);
  }

  // Fallback
  sendJson(res, 404, { error: 'Not found' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`API server running on ${PORT}`);
});

