import { test, expect } from '@playwright/test'

test.describe('Client Feedback Verification — Items 1, 2, 3', () => {
  test('Item 1: Numerical badges and counters removed across Core Values, Services, WhoWeWorkWith, Testimonials', async ({
    page,
  }) => {
    // 1. Home page counters
    await page.goto('/')
    await expect(page.locator('.coreValues__counter')).toHaveCount(0)
    await expect(page.locator('.whoWork__counter')).toHaveCount(0)
    await expect(page.locator('.testimonials__counter')).toHaveCount(0)

    // Sleek progress bars must still exist
    await expect(page.locator('.coreValues__progressTrack')).toBeVisible()
    await expect(page.locator('.whoWork__progressTrack')).toBeVisible()
    await expect(page.locator('.testimonials__progressTrack')).toBeVisible()

    // 2. Services page
    await page.goto('/services')
    // No counter
    await expect(page.locator('.svcSliderCounter')).toHaveCount(0)
    // No metrics strip
    await expect(page.locator('.svcMetrics')).toHaveCount(0)
    // No badge count pills in nav tabs
    await expect(page.locator('.svcNav__badge')).toHaveCount(0)
    // Category tabs and slider progress bar still present
    await expect(page.locator('.svcNav__item').first()).toBeVisible()
    await expect(page.locator('.svcSliderProgressTrack').first()).toBeVisible()

    // 3. About Us page
    await page.goto('/about')
    // No numerical badges on values
    await expect(page.locator('.aboutValue__num')).toHaveCount(0)
    // Core values cards still present
    await expect(page.locator('.aboutValue').first()).toBeVisible()
  })

  test('Item 2: Mobile header tap-to-call button displays full formatted number and does not show "050" alone', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const phoneBtn = page.locator('.navRight .navPhoneBtn').first()
    await expect(phoneBtn).toBeVisible()

    const phoneText = await phoneBtn.innerText()
    expect(phoneText.trim()).toContain('+971 50 545 9247')
    expect(phoneText.trim()).not.toBe('050')

    // Verify tel link
    await expect(phoneBtn).toHaveAttribute('href', 'tel:+971505459247')
  })

  test('Item 3: About Us page starts directly at the top with Our Story and PageHero is removed', async ({
    page,
  }) => {
    await page.goto('/about')

    // PageHero must not exist
    await expect(page.locator('.pageHero')).toHaveCount(0)

    // Opening section must be #our-story / .aboutStory
    const firstSection = page.locator('main.aboutPage > section').first()
    await expect(firstSection).toHaveClass(/aboutStory/)
    await expect(firstSection).toHaveId('our-story')

    // Header consistently uses signature navy gradient and light logo on /about
    const header = page.locator('header.mainHeader')
    await expect(header).toBeVisible()

    // Header has the signature navy gradient overlay
    const bgImage = await header.evaluate((el) => window.getComputedStyle(el).backgroundImage)
    expect(bgImage).toContain('linear-gradient')

    // Header logo uses light lockup (white text for high contrast against navy gradient)
    const logoSrc = await page.locator('.navLogo').getAttribute('src')
    expect(logoSrc).toContain('logo-lockup-light.png')
  })
})
