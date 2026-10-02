import { test, expect } from '@playwright/test'

test.describe('Contact Forms & SMTP Integration Gate', () => {
  test('Contact Page — Asynchronous submission, loading states, and confirmation', async ({ page }) => {
    await page.goto('/contact')

    // 1. Verify Page Health & Accessibility
    await expect(page).toHaveTitle(/Vision Business Setup/i)
    await expect(page.locator('h1')).toBeVisible()

    // 2. Fill out contact form
    const form = page.locator('form.contactForm')
    await expect(form).toBeVisible()

    await form.locator('input[name="name"]').fill('Fatima Al-Mansoor')
    await form.locator('input[name="phone"]').fill('+971 50 888 9900')
    await form.locator('input[name="email"]').fill('fatima@example.com')
    await form.locator('textarea[name="message"]').fill('Inquiry regarding mainland commercial trade license.')

    // 3. Submit and verify loading state
    const submitBtn = form.locator('button[type="submit"]')
    await submitBtn.click()

    // 4. Verify confirmation state (.contactCard__success)
    const successCard = page.locator('.contactCard__success')
    await expect(successCard).toBeVisible({ timeout: 10000 })
    await expect(successCard.locator('h3')).toContainText('Thank you')

    // 5. Test "Send another request" resets the card
    const sendAgainBtn = successCard.locator('button')
    await sendAgainBtn.click()
    await expect(page.locator('form.contactForm')).toBeVisible()
  })

  test('Contact Page — Honeypot spam defense silently drops bot submission', async ({ page }) => {
    await page.goto('/contact')

    const form = page.locator('form.contactForm')
    await expect(form).toBeVisible()

    // Bot fills honeypot field
    await page.evaluate(() => {
      const gotcha = document.querySelector('input[name="_gotcha"]')
      if (gotcha) gotcha.value = 'I am an automated spam bot'
    })

    await form.locator('input[name="name"]').fill('Spam Bot')
    await form.locator('input[name="phone"]').fill('+1 555 123 4567')
    await form.locator('input[name="email"]').fill('spambot@example.com')

    // Monitor network response to verify silent 200 OK
    const [response] = await Promise.all([
      page.waitForResponse((res) => res.url().includes('/api/contact') && res.request().method() === 'POST'),
      form.locator('button[type="submit"]').click(),
    ])

    expect(response.status()).toBe(200)
    const resData = await response.json()
    expect(resData.success).toBe(true)

    // Bot gets positive confirmation without sending spam email
    await expect(page.locator('.contactCard__success')).toBeVisible()
  })

  test('Contact Page — Error alert banner (.is-error) displayed on API rejection', async ({ page }) => {
    await page.goto('/contact')

    // Mock API error response
    await page.route('/api/contact', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          error: 'Please provide a valid phone number or email address.',
        }),
      })
    })

    const form = page.locator('form.contactForm')
    await form.locator('input[name="name"]').fill('Test Client')
    await form.locator('input[name="phone"]').fill('+971 50 111 2233')
    await form.locator('button[type="submit"]').click()

    // Verify .is-error banner
    const errorAlert = page.locator('.is-error')
    await expect(errorAlert).toBeVisible()
    await expect(errorAlert).toContainText('Please provide a valid phone number or email address.')
  })

  test('Home Page — Minimal callback form submission & UX feedback', async ({ page }) => {
    await page.goto('/')

    const callbackSection = page.locator('#request-callback')
    await expect(callbackSection).toBeVisible()

    const form = callbackSection.locator('form.minimalContact__form')
    await expect(form).toBeVisible()

    await form.locator('input[name="fullname"]').fill('Tariq Saeed')
    await form.locator('input[name="phone"]').fill('+971 52 333 4455')
    await form.locator('select[name="service"]').selectOption('UAE Free Zone')

    await form.locator('button[type="submit"]').click()

    // Verify success feedback in MinimalContact
    const successBox = callbackSection.locator('.minimalContact__success')
    await expect(successBox).toBeVisible({ timeout: 10000 })
    await expect(successBox).toContainText('Callback Request Received')
  })

  test('Service Detail Page — Consultation form submission', async ({ page }) => {
    await page.goto('/services/license-renewal')

    const form = page.locator('form.sdForm')
    await expect(form).toBeVisible()

    await form.locator('input[name="name"]').fill('Rashid Khan')
    await form.locator('input[name="email"]').fill('rashid@example.com')
    await form.locator('input[name="phone"]').fill('+971 55 678 1234')
    await form.locator('textarea[name="notes"]').fill('Interested in trade license renewal.')

    await form.locator('button[type="submit"]').click()

    // Verify confirmation
    const successBox = page.locator('.sdFormSuccess')
    await expect(successBox).toBeVisible({ timeout: 10000 })
    await expect(successBox.locator('h4')).toContainText('Thank You!')
  })
})
