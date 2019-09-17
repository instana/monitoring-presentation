export function getTwoots() {
  return fetch('/api/twoots').then(response => response.json());
}

export function twoot(author, text) {
  return fetch('/api/twoot', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author,
      text
    })
  });
}
