import api from './utilities/service';

export async function list(searchParams = {}) {
  return api.swot('flats', { searchParams, meta: { cache: true } }).json();
}

export async function show(id) {
  return api.swot(`dwellings/flats/${id}`).json();
}