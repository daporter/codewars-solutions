const sumTheTreeValues = t =>
  !t ? 0 : t.value + sumTheTreeValues(t.left) + sumTheTreeValues(t.right);
