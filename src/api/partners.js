const API_BASE = process.env.REACT_APP_API_URL || '';

export async function fetchPartners() {
  const res = await fetch(`${API_BASE}/api/partners`);
  if (!res.ok) {
    throw new Error('Failed to fetch partners');
  }
  return res.json();
}

export async function fetchPartner(slug) {
  const res = await fetch(`${API_BASE}/api/partners/${slug}`);
  if (!res.ok) {
    throw new Error('Partner not found');
  }
  return res.json();
}

export async function createPartner(partner) {
  const res = await fetch(`${API_BASE}/api/partners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(partner),
  });
  if (!res.ok) {
    throw new Error('Failed to create partner');
  }
  return res.json();
}

export async function updatePartner(slug, partner) {
  const res = await fetch(`${API_BASE}/api/partners/${slug}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(partner),
  });
  if (!res.ok) {
    throw new Error('Failed to update partner');
  }
  return res.json();
}

export async function deletePartner(slug) {
  const res = await fetch(`${API_BASE}/api/partners/${slug}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error('Failed to delete partner');
  }
  return res.json();
}

