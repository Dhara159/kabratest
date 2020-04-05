export const apiCall = async (link) => {
  const response = await fetch(link);
  return await response.json();
}