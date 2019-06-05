import Header from './header.js';

test('Header component need to be a function', () => {
  expect(typeof Header).toBe('function');
})

test('Header component need to have a render a function', () => {
  expect(typeof Header().render).toBe('function');
});

test('Header render function need to return a string', async done => {
  const HeaderComponent = Header({ value: 1 });
  const html = await HeaderComponent.render();
  expect(typeof html).toBe('string');
  done();
});

test('Header component need to have a afterRender function', () => {
  expect(typeof Header().afterRender).toBe('function');
});
