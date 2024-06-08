import test, { expect } from '@playwright/test';

test('Navbar links should navigate to correct routes and highlight active link', async ({ page }) => {
  await page.goto('/');

  const navbarData = [{ label: 'Home', link: '/' }];

  for (const item of navbarData) {
    const link = page.getByRole('link', { name: item.label });

    await expect(link).toHaveAttribute('href', item.link);

    await link.click();

    await expect(page).toHaveURL(item.link);

    await expect(link).toHaveAttribute('data-active', 'true');
  }
});
