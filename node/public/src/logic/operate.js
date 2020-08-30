export default async function operate(
  numberOne = 0,
  operation,
  numberTwo = operation === '÷' || operation === 'x' ? '1' : '0'
) {
  const operationRoutes = { '+': 'plus', '-': 'minus', x: 'times', '÷': 'div' };
  try {
    const res = await fetchApi(operationRoutes[operation], {
      numberOne,
      numberTwo,
    });
    if (res === '"Err"') {
      alert('Err');
      return 0;
    }
    return Number(res);
  } catch (e) {
    console.error(e);
  }
}

function fetchApi(route, data) {
  return fetch(`/${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
