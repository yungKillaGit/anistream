import test, { expect } from '@playwright/test';
import { COMMON_NAVBAR_ITEMS } from '@/app/(common)/layout';
import { AppPath } from '@/shared/config/routes';

test('Navbar links should navigate to correct routes and highlight active link', async ({ page }) => {
  await page.goto(AppPath.HOME);

  for (const item of COMMON_NAVBAR_ITEMS) {
    const link = page.getByRole('link', { name: item.label });

    await expect(link).toHaveAttribute('href', item.link);

    await link.click();

    await expect(page).toHaveURL(item.link);

    await expect(link).toHaveAttribute('data-active', 'true');
  }
});
