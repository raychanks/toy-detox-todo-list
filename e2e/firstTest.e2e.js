describe('TodoList', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have an empty list', async () => {
    await expect(element(by.id('todo-list'))).toBeVisible();
  });

  it('should be able to add new todos and clears the text input', async () => {
    await element(by.id('todo-input')).typeText('new todo');
    await element(by.text('submit')).tap();
    await expect(element(by.id('todo-input'))).toHaveValue('');
    await expect(element(by.text('new todo'))).toBeVisible();
  });

  it('can toggle a todo between completed and not pending status', async () => {
    await element(by.id('todo-input')).typeText('new todo');
    await element(by.text('submit')).tap();
    await expect(element(by.text('new todo'))).toBeVisible();

    await element(by.text('new todo')).tap();
    await expect(element(by.text('new todo (DONE)'))).toBeVisible();

    await element(by.text('new todo (DONE)')).tap();
    await expect(element(by.text('new todo'))).toBeVisible();
  });
});
