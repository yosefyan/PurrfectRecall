const getData = async (length) => {
  try {
    const res = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${length}&api_key=live_eaRPPv6H5GpTEtiIcMjHVUjtphUfo75LOsL4zwIyhqeVXRAJX0kLzTQvHBXiNpAC`
    );
    return res;
  } catch (error) {
    return error;
  }
};

export default getData;
