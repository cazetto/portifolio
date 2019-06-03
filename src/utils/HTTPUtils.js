const asyncFetch = async url => {
  const response = await fetch(url);
  const props = await response.json();
  return props;
}
