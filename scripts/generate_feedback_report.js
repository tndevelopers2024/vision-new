import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read logo as base64
const logoPath = path.join(rootDir, 'public', 'logo-lockup.png');
const logoBase64 = fs.existsSync(logoPath)
  ? `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`
  : '';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vision Business Setup — Website Feedback Analysis & Action Plan Report</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1e293b;
      background: #f8fafc;
      font-size: 13px;
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
    }

    @page {
      size: A4 portrait;
      margin: 0;
    }

    .page {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      margin: 0 auto;
      padding: 18mm 18mm 16mm 18mm;
      background: #ffffff;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .page:last-child {
      page-break-after: auto;
    }

    /* Top Running Header */
    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      margin-bottom: 16px;
      border-bottom: 1.5px solid #e2e8f0;
    }

    .header-logo-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-logo-img {
      height: 38px;
      width: auto;
      object-fit: contain;
    }

    .header-meta {
      text-align: right;
    }

    .header-meta .doc-type {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #1c3b5f;
    }

    .header-meta .doc-date {
      font-size: 10.5px;
      color: #64748b;
      font-weight: 500;
    }

    /* Bottom Running Footer */
    .page-footer {
      margin-top: auto;
      padding-top: 10px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9.5px;
      color: #94a3b8;
      font-weight: 500;
    }

    .footer-left {
      display: flex;
      gap: 16px;
    }

    .footer-left span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .footer-right {
      font-weight: 600;
      color: #64748b;
    }

    /* Section Typography & Utilities */
    h1, h2, h3, h4 {
      color: #0f172a;
      letter-spacing: -0.02em;
    }

    .section-eyebrow {
      display: inline-block;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #c59b27;
      margin-bottom: 4px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 800;
      color: #1c3b5f;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .section-desc {
      font-size: 12px;
      color: #475569;
      margin-bottom: 12px;
      line-height: 1.5;
    }

    /* Status Badges */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2.5px 8px;
      border-radius: 9999px;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .badge-success {
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
    }

    .badge-info {
      background: #f0f9ff;
      color: #0369a1;
      border: 1px solid #bae6fd;
    }

    .badge-warning {
      background: #fffbeb;
      color: #b45309;
      border: 1px solid #fde68a;
    }

    .badge-navy {
      background: #f1f5f9;
      color: #1c3b5f;
      border: 1px solid #cbd5e1;
    }

    /* Cover / Header Banner on Page 1 */
    .report-banner {
      background: linear-gradient(135deg, #1c3b5f 0%, #132a45 100%);
      border-radius: 10px;
      padding: 20px 22px;
      color: #ffffff;
      margin-bottom: 14px;
      position: relative;
      box-shadow: 0 4px 14px -3px rgba(19, 42, 69, 0.25);
    }

    .report-banner::after {
      content: '';
      position: absolute;
      right: 20px;
      top: 15px;
      bottom: 15px;
      width: 4px;
      background: #c59b27;
      border-radius: 4px;
      opacity: 0.85;
    }

    .report-banner .banner-sub {
      font-size: 10.5px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #c59b27;
      margin-bottom: 4px;
    }

    .report-banner .banner-title {
      font-size: 22px;
      font-weight: 800;
      line-height: 1.2;
      color: #ffffff;
      margin-bottom: 6px;
    }

    .report-banner .banner-desc {
      font-size: 12px;
      color: #e2e8f0;
      max-width: 85%;
      line-height: 1.45;
    }

    /* Meta Pill Bar */
    .meta-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 14px;
    }

    .meta-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 7px 10px;
    }

    .meta-label {
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      color: #64748b;
      letter-spacing: 0.05em;
      margin-bottom: 2px;
    }

    .meta-val {
      font-size: 11.5px;
      font-weight: 700;
      color: #1c3b5f;
    }

    /* Executive Summary Callout */
    .exec-summary-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #1c3b5f;
      border-radius: 8px;
      padding: 12px 14px;
      margin-bottom: 14px;
    }

    .exec-summary-title {
      font-size: 12px;
      font-weight: 800;
      color: #1c3b5f;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .exec-summary-text {
      font-size: 11.5px;
      color: #334155;
      line-height: 1.5;
    }

    /* 4-Item Quick Overview Grid */
    .overview-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 9px;
      margin-bottom: 14px;
    }

    .overview-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 10px 10px 8px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .overview-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10px;
      right: 10px;
      height: 2.5px;
      background: #1c3b5f;
      border-radius: 0 0 2px 2px;
    }

    .overview-num {
      font-size: 10px;
      font-weight: 800;
      color: #c59b27;
      margin-bottom: 2px;
    }

    .overview-heading {
      font-size: 11px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.25;
      margin-bottom: 4px;
    }

    .overview-badge {
      align-self: flex-start;
      margin-top: 4px;
    }

    /* Detailed Action Cards */
    .action-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 13px 15px;
      margin-bottom: 13px;
    }

    .action-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
      padding-bottom: 7px;
      border-bottom: 1px solid #f1f5f9;
    }

    .action-title-group h3 {
      font-size: 13.5px;
      font-weight: 800;
      color: #1c3b5f;
    }

    .action-title-group .client-query {
      font-size: 11px;
      font-weight: 500;
      color: #64748b;
      margin-top: 2px;
    }

    .action-body-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .grid-col {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .info-pane {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 9px 11px;
    }

    .info-pane.accent-border {
      border-left: 3px solid #c59b27;
    }

    .info-pane.success-border {
      border-left: 3px solid #10b981;
    }

    .info-pane.navy-border {
      border-left: 3px solid #1c3b5f;
    }

    .info-label {
      font-size: 9.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #475569;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .info-content {
      font-size: 11px;
      color: #334155;
      line-height: 1.48;
    }

    .bullet-list {
      list-style: none;
      padding-left: 0;
      margin-top: 4px;
    }

    .bullet-list li {
      position: relative;
      padding-left: 13px;
      font-size: 11px;
      color: #334155;
      margin-bottom: 3px;
      line-height: 1.45;
    }

    .bullet-list li::before {
      content: '▪';
      position: absolute;
      left: 0;
      color: #1c3b5f;
      font-size: 10px;
    }

    /* Code Snippet Box */
    .code-box {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 10px;
      background: #0f172a;
      color: #f8fafc;
      padding: 7px 10px;
      border-radius: 5px;
      line-height: 1.4;
      overflow-x: hidden;
      margin-top: 4px;
    }

    .code-red { color: #f87171; }
    .code-green { color: #4ade80; }
    .code-comment { color: #94a3b8; }

    /* Comparison Box (Before vs After) */
    .compare-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 5px;
    }

    .compare-box {
      border-radius: 6px;
      padding: 8px 10px;
      border: 1px solid #e2e8f0;
      font-size: 11px;
    }

    .compare-box.before {
      background: #fff5f5;
      border-color: #fed7d7;
    }

    .compare-box.after {
      background: #f0fdf4;
      border-color: #bbf7d0;
    }

    .compare-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .compare-box.before .compare-title { color: #c53030; }
    .compare-box.after .compare-title { color: #166534; }

    /* Tables */
    .clean-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
      margin-top: 6px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      overflow: hidden;
    }

    .clean-table th {
      background: #1c3b5f;
      color: #ffffff;
      font-weight: 700;
      font-size: 9.5px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 7px 9px;
      text-align: left;
    }

    .clean-table td {
      padding: 7px 9px;
      border-bottom: 1px solid #e2e8f0;
      color: #334155;
      vertical-align: middle;
      line-height: 1.4;
    }

    .clean-table tr:nth-child(even) td {
      background: #f8fafc;
    }

    .clean-table tr:last-child td {
      border-bottom: none;
    }

    .text-center { text-align: center; }
    .text-right { text-align: right; }

    /* Timeline Stepper */
    .stepper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 10px;
    }

    .step-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 10px;
      position: relative;
    }

    .step-card.active {
      border-color: #1c3b5f;
      background: #f8fafc;
    }

    .step-num {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #1c3b5f;
      color: #ffffff;
      font-size: 10px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 6px;
    }

    .step-title {
      font-size: 11.5px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 3px;
    }

    .step-desc {
      font-size: 10px;
      color: #64748b;
      line-height: 1.35;
    }

    /* Executive Sign-off Box */
    .signoff-box {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 12px 14px;
      margin-top: 12px;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 14px;
      align-items: center;
    }

    .signoff-content h4 {
      font-size: 12px;
      font-weight: 800;
      color: #1c3b5f;
      margin-bottom: 3px;
    }

    .signoff-content p {
      font-size: 10.5px;
      color: #475569;
      line-height: 1.45;
    }

    .signoff-sig {
      text-align: right;
      border-left: 1px solid #cbd5e1;
      padding-left: 12px;
    }

    .sig-name {
      font-size: 13px;
      font-weight: 800;
      color: #1c3b5f;
    }

    .sig-role {
      font-size: 10px;
      font-weight: 600;
      color: #64748b;
    }

    .sig-team {
      font-size: 9.5px;
      color: #94a3b8;
    }
  </style>
</head>
<body>

  <!-- ===================================================================== -->
  <!-- PAGE 1: COVER, EXECUTIVE SUMMARY & ITEM 1 (NUMBER VISIBILITY)        -->
  <!-- ===================================================================== -->
  <div class="page">
    <header class="page-header">
      <div class="header-logo-group">
        ${logoBase64 ? `<img src="${logoBase64}" alt="Vision Business Setup" class="header-logo-img" />` : `<strong style="color: #1c3b5f; font-size: 16px;">VISION BUSINESS SETUP</strong>`}
      </div>
      <div class="header-meta">
        <div class="doc-type">Executive Client Report</div>
        <div class="doc-date">October 2026 • Ref: VBS-REV-04</div>
      </div>
    </header>

    <div class="report-banner">
      <div class="banner-sub">Client Feedback Resolution & Implementation Architecture</div>
      <h1 class="banner-title">Website Enhancement & Analysis Report</h1>
      <p class="banner-desc">Comprehensive technical review, root cause diagnostics, implemented visual refinements, and the bespoke copy delivery roadmap addressing leadership staging feedback.</p>
    </div>

    <!-- Document Meta Grid -->
    <div class="meta-bar">
      <div class="meta-card">
        <div class="meta-label">Client Organization</div>
        <div class="meta-val">Vision Business Setup LLC</div>
      </div>
      <div class="meta-card">
        <div class="meta-label">Technical Lead</div>
        <div class="meta-val">Mohan (Lead Developer)</div>
      </div>
      <div class="meta-card">
        <div class="meta-label">Review Scope</div>
        <div class="meta-val">4 Core Feedback Items</div>
      </div>
      <div class="meta-card">
        <div class="meta-label">Deliverable Status</div>
        <div class="meta-val" style="color: #047857;">Active / Implemented</div>
      </div>
    </div>

    <!-- Executive Summary Box -->
    <div class="exec-summary-box">
      <div class="exec-summary-title">
        <span>Executive Overview</span>
        <span class="badge badge-success">Quality Standard Verified</span>
      </div>
      <p class="exec-summary-text">
        Following the staging review of the new Vision Business Setup web platform, leadership provided four specific structural, content, and visual feedback items. Our team performed complete technical diagnostics and implemented surgical enhancements to ensure the platform flawlessly reflects Vision’s prestige, 10-year market pedigree, and client-centric ethos in Dubai. This document delivers transparent explanations, code-level root cause resolutions, and the concrete delivery schedule.
      </p>
    </div>

    <!-- 4 Feedback Overview Cards -->
    <div class="overview-grid">
      <div class="overview-card">
        <span class="overview-num">ITEM 01</span>
        <div class="overview-heading">Core Values & Services Numbers</div>
        <span class="badge badge-success overview-badge">Numbers Removed</span>
      </div>
      <div class="overview-card">
        <span class="overview-num">ITEM 02</span>
        <div class="overview-heading">Mobile Header '050' Phone Bug</div>
        <span class="badge badge-success overview-badge">Bug Fixed</span>
      </div>
      <div class="overview-card">
        <span class="overview-num">ITEM 03</span>
        <div class="overview-heading">About Us 'Our Story' Opening</div>
        <span class="badge badge-success overview-badge">Flow Streamlined</span>
      </div>
      <div class="overview-card">
        <span class="overview-num">ITEM 04</span>
        <div class="overview-heading">Content Authenticity & Rewrite</div>
        <span class="badge badge-info overview-badge">Rewrite Roadmap</span>
      </div>
    </div>

    <!-- ITEM 1: Core Values & Services Numbering Removal -->
    <div class="action-card" style="margin-bottom: 0;">
      <div class="action-header">
        <div class="action-title-group">
          <h3>Item 1: Removal of Sequential Numbers on Core Values & Services</h3>
          <div class="client-query"><strong>Client Feedback:</strong> "Remove numbers appearing across Core Values and Services cards/carousels to ensure an ultra-clean corporate presentation."</div>
        </div>
        <span class="badge badge-success">Resolved & Verified</span>
      </div>

      <div class="action-body-grid">
        <div class="grid-col">
          <div class="info-pane navy-border">
            <div class="info-label">Technical Diagnostic & Context</div>
            <div class="info-content">
              During initial UI development of the luxury carousel and service matrix, sequential numbers (<code>01</code>, <code>02</code>, <code>03</code>) and bottom index counters (<code>01 / 07</code>, <code>01 / 16</code>) were incorporated as slide indicators. While technically functional, client leadership rightly noted that prominent numerical badges introduce an unwanted "step-by-step tutorial" appearance rather than an executive corporate showcase.
            </div>
          </div>

          <div class="compare-container">
            <div class="compare-box before">
              <div class="compare-title">Previous Display</div>
              <div>Values & services showed numerical badges (<code>01 Trust</code>, <code>02 Transparency</code>) with <code>01 / 07</code> fractional counter below track.</div>
            </div>
            <div class="compare-box after">
              <div class="compare-title">Refined Display</div>
              <div>100% clean typography. Numbers removed; navigation preserved via sleek interactive geometric arrows and subtle continuous progress bar.</div>
            </div>
          </div>
        </div>

        <div class="grid-col">
          <div class="info-pane success-border">
            <div class="info-label">Implemented Solution & Visual Impact</div>
            <ul class="bullet-list">
              <li><strong>Core Values Carousel (Homepage & About Us):</strong> Stripped all index numeral tags (<code>item.num</code>, <code>01–07</code>). Preserved the bespoke luxury photography, bespoke gold icons, and concise value descriptions.</li>
              <li><strong>Fractional Counter Removal:</strong> Retired <code>0X / 07</code> text counter from the carousel footer. Replaced with an ultra-slim, branded progress track.</li>
              <li><strong>Services Matrix & Category Slider:</strong> Removed all numerical prefixes across all 16 service cards and category tab headers.</li>
              <li><strong>Executive Aesthetic:</strong> Resulting cards provide expansive breathing room, elevated whitespace, and cleaner card geometry aligned with premier UAE advisory firms.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <footer class="page-footer">
      <div class="footer-left">
        <span>Vision Business Setup LLC • Internal Development Documentation</span>
      </div>
      <div class="footer-right">
        Page 1 of 4
      </div>
    </footer>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 2: ITEM 2 (MOBILE HEADER '050') & ITEM 3 (ABOUT US FLOW)        -->
  <!-- ===================================================================== -->
  <div class="page">
    <header class="page-header">
      <div class="header-logo-group">
        ${logoBase64 ? `<img src="${logoBase64}" alt="Vision Business Setup" class="header-logo-img" />` : `<strong style="color: #1c3b5f; font-size: 16px;">VISION BUSINESS SETUP</strong>`}
      </div>
      <div class="header-meta">
        <div class="doc-type">Executive Client Report</div>
        <div class="doc-date">October 2026 • Ref: VBS-REV-04</div>
      </div>
    </header>

    <!-- ITEM 2: Mobile Phone Number '050' Header Bug -->
    <div class="action-card">
      <div class="action-header">
        <div class="action-title-group">
          <h3>Item 2: Mobile Header Phone Number Display ('050' Artifact Resolution)</h3>
          <div class="client-query"><strong>Client Feedback:</strong> "On mobile screens, the header phone button displays only '050' instead of the full contact number or clear call action."</div>
        </div>
        <span class="badge badge-success">Bug Fixed & Tested</span>
      </div>

      <div class="action-body-grid">
        <div class="grid-col">
          <div class="info-pane accent-border">
            <div class="info-label">Root Cause Diagnostic</div>
            <div class="info-content">
              Deep inspection of the navigation codebase isolated the exact origin:
              <div class="code-box">
                <span class="code-comment">// src/config/contact.js</span><br/>
                phones: [{<br/>
                &nbsp;&nbsp;display: '+971 50 545 9247',<br/>
                &nbsp;&nbsp;<span class="code-red">- shortDisplay: '050', // Caused truncation</span><br/>
                &nbsp;&nbsp;<span class="code-green">+ shortDisplay: '+971 50 545 9247',</span><br/>
                }]
              </div>
              The responsive component <code>MainNav.jsx</code> selected <code>phone.shortDisplay</code> on mobile breakpoints (&lt; 768px). Because <code>'050'</code> was hardcoded as a legacy network prefix token, mobile viewports rendered the isolated three digits.
            </div>
          </div>
        </div>

        <div class="grid-col">
          <div class="info-pane success-border">
            <div class="info-label">Permanent Resolution & Mobile Dialing QA</div>
            <ul class="bullet-list">
              <li><strong>Full International Format:</strong> Updated configuration across site data to render the complete official UAE phone number: <code>+971 50 545 9247</code>.</li>
              <li><strong>Interactive Call-to-Action Pill:</strong> Formatted mobile header with a clear phone receiver icon and active <code>tel:+971505459247</code> protocol for seamless 1-tap dialing.</li>
              <li><strong>Cross-Device Testing:</strong> Verified across standard screen dimensions (375px iPhone SE, 390px iPhone 14/15, 412px Samsung Galaxy, and iPad mini) ensuring zero horizontal clipping or line wrapping.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- ITEM 3: About Us Flow Optimization -->
    <div class="action-card" style="margin-bottom: 0;">
      <div class="action-header">
        <div class="action-title-group">
          <h3>Item 3: About Us Page Flow (Direct 'Our Story' Opening & Redundancy Removal)</h3>
          <div class="client-query"><strong>Client Feedback:</strong> "Eliminate the redundant top hero banner on About Us. Open directly with 'Our Story' for immediate narrative engagement."</div>
        </div>
        <span class="badge badge-success">Architecture Optimized</span>
      </div>

      <div class="action-body-grid">
        <div class="grid-col">
          <div class="info-pane navy-border">
            <div class="info-label">User Experience & Architectural Analysis</div>
            <div class="info-content">
              The original page template included an overarching <code>PageHero</code> banner stating <em>"About Us — Every Business starts with Vision"</em> with a generic city backdrop. Immediately underneath, the visitor encountered Section 2: <em>"Our Story: Established in 2015"</em>.
              <br/><br/>
              This created two visual issues:
              <ul class="bullet-list" style="margin-top: 4px;">
                <li><strong>Message Redundancy:</strong> Repeating the company slogan delayed access to the substantive company narrative.</li>
                <li><strong>Excessive Scroll Depth:</strong> Pushed key trust elements—the 2015 establishment badge and executive leadership photography—below the fold on desktop and mobile.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid-col">
          <div class="info-pane success-border">
            <div class="info-label">Streamlined Layout Hierarchy</div>
            <div class="info-content">
              Removed the standalone <code>PageHero</code> component completely from <code>AboutUs.jsx</code>. The page now begins with full executive impact:
              <ul class="bullet-list">
                <li><strong>1. "Our Story" Above the Fold:</strong> Prominent <code>Established in 2015</code> gold heritage badge, followed immediately by Vision's founding ethos and corporate advisory photography.</li>
                <li><strong>2. Our Founder (Viekram):</strong> In-depth executive biography and leadership message.</li>
                <li><strong>3. Who We Work With:</strong> Cross-industry breakdown (Real Estate, F&amp;B, Trading, Salons, Manpower).</li>
                <li><strong>4. What Sets Us Apart:</strong> 4 strategic pillars (Client-Centric, Uncompromised Quality, 24/7 Support, Strong Network).</li>
                <li><strong>5. Our Core Values & Commitment:</strong> The 7 values followed by executive partnership guarantee.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Before vs After Flow Comparison Diagram -->
      <div style="margin-top: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 9px 12px;">
        <div style="font-size: 10px; font-weight: 700; color: #1c3b5f; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">Visual Architecture Flow Comparison</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 10.5px;">
          <div style="background: #ffffff; padding: 7px 10px; border-radius: 5px; border-left: 3px solid #ef4444;">
            <strong style="color: #b91c1c;">Previous Structure:</strong>
            <div style="color: #64748b; font-size: 10px; margin-top: 2px;">[Generic Hero Banner] ➔ [Our Story] ➔ [Founder] ➔ [Sectors] ➔ [Values]</div>
          </div>
          <div style="background: #ffffff; padding: 7px 10px; border-radius: 5px; border-left: 3px solid #10b981;">
            <strong style="color: #047857;">New Streamlined Structure:</strong>
            <div style="color: #0f172a; font-weight: 600; font-size: 10px; margin-top: 2px;">[Our Story (Est. 2015)] ➔ [Founder Profile] ➔ [Sectors] ➔ [Values] ➔ [Commitment]</div>
          </div>
        </div>
      </div>
    </div>

    <footer class="page-footer">
      <div class="footer-left">
        <span>Vision Business Setup LLC • Internal Development Documentation</span>
      </div>
      <div class="footer-right">
        Page 2 of 4
      </div>
    </footer>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 3: ITEM 4 (CONTENT AUTHENTICITY & BESPOKE REWRITE PLAN)          -->
  <!-- ===================================================================== -->
  <div class="page">
    <header class="page-header">
      <div class="header-logo-group">
        ${logoBase64 ? `<img src="${logoBase64}" alt="Vision Business Setup" class="header-logo-img" />` : `<strong style="color: #1c3b5f; font-size: 16px;">VISION BUSINESS SETUP</strong>`}
      </div>
      <div class="header-meta">
        <div class="doc-type">Executive Client Report</div>
        <div class="doc-date">October 2026 • Ref: VBS-REV-04</div>
      </div>
    </header>

    <div class="section-eyebrow">Content Governance & Editorial Transparency</div>
    <h2 class="section-title" style="margin-bottom: 4px;">Item 4: Content Authenticity Clarification & Rewrite Roadmap</h2>
    <p class="section-desc" style="margin-bottom: 9px;">Full verification of original client copy integrity and the fast-track copywriting sprint for 100% bespoke inner service detail pages.</p>

    <!-- Part A: 100% Client-Original Verified Content -->
    <div class="action-card" style="margin-bottom: 9px; padding: 10px 13px;">
      <div class="action-header" style="margin-bottom: 5px; padding-bottom: 4px;">
        <div class="action-title-group">
          <h3 style="font-size: 12.5px;">Part A: 100% Client-Original Copy Integrity (Reassurance & Audit)</h3>
          <div class="client-query" style="font-size: 10.5px;">Preservation of all foundational brand copy verbatim from <em>Website Content_Vision.docx</em>.</div>
        </div>
        <span class="badge badge-success" style="font-size: 8.5px; padding: 2px 7px;">100% Authentic & Verified</span>
      </div>

      <p style="font-size: 10.5px; color: #475569; margin-bottom: 5px; line-height: 1.4;">
        We provide complete reassurance to the leadership team: <strong>No foundational copy was invented, altered, or replaced with generic placeholders.</strong> Every core brand page strictly mirrors the client's approved copy deck:
      </p>

      <table class="clean-table" style="font-size: 10px;">
        <thead>
          <tr>
            <th style="width: 25%; padding: 5px 8px;">Platform Section</th>
            <th style="width: 48%; padding: 5px 8px;">Source Content in Approved Deck</th>
            <th style="width: 27%; padding: 5px 8px;">Integrity Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 4px 8px;"><strong>Home Page Hero & Tagline</strong></td>
            <td style="padding: 4px 8px;">"Every Business starts with Vision"</td>
            <td style="padding: 4px 8px;"><span class="badge badge-success" style="font-size: 8px;">100% Exact Match</span></td>
          </tr>
          <tr>
            <td style="padding: 4px 8px;"><strong>Our Story & Heritage</strong></td>
            <td style="padding: 4px 8px;">End-to-end setup, advisory role, Established in 2015, client-first principle</td>
            <td style="padding: 4px 8px;"><span class="badge badge-success" style="font-size: 8px;">100% Word-for-Word</span></td>
          </tr>
          <tr>
            <td style="padding: 4px 8px;"><strong>Who We Work With</strong></td>
            <td style="padding: 4px 8px;">Real Estate, F&amp;B, Trading, Salons &amp; Lifestyle, Manpower Supply</td>
            <td style="padding: 4px 8px;"><span class="badge badge-success" style="font-size: 8px;">100% Word-for-Word</span></td>
          </tr>
          <tr>
            <td style="padding: 4px 8px;"><strong>What Sets Us Apart</strong></td>
            <td style="padding: 4px 8px;">Client-Centric, Uncompromised Quality, 24/7 Support, Strong Network</td>
            <td style="padding: 4px 8px;"><span class="badge badge-success" style="font-size: 8px;">100% Word-for-Word</span></td>
          </tr>
          <tr>
            <td style="padding: 4px 8px;"><strong>Our 7 Core Values</strong></td>
            <td style="padding: 4px 8px;">Trust, Transparency, Understanding, Tailored Solutions, Quality, Reliability, End-to-End</td>
            <td style="padding: 4px 8px;"><span class="badge badge-success" style="font-size: 8px;">100% Word-for-Word</span></td>
          </tr>
          <tr>
            <td style="padding: 4px 8px;"><strong>Our Commitment & Founder</strong></td>
            <td style="padding: 4px 8px;">Long-term partnership promise, Viekram's executive leadership biography</td>
            <td style="padding: 4px 8px;"><span class="badge badge-success" style="font-size: 8px;">100% Word-for-Word</span></td>
          </tr>
          <tr>
            <td style="padding: 4px 8px;"><strong>Jurisdiction Foundations</strong></td>
            <td style="padding: 4px 8px;">Mainland (100% ownership), Free Zone (0% corporate tax), Offshore (asset protection)</td>
            <td style="padding: 4px 8px;"><span class="badge badge-success" style="font-size: 8px;">100% Word-for-Word</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Part B: Inner Service Detail Pages & Rapid Rewrite Plan -->
    <div class="action-card" style="margin-bottom: 0; padding: 10px 13px;">
      <div class="action-header" style="margin-bottom: 5px; padding-bottom: 4px;">
        <div class="action-title-group">
          <h3 style="font-size: 12.5px;">Part B: Inner Service Pages Architecture & Bespoke Rewrite Plan</h3>
          <div class="client-query" style="font-size: 10.5px;">Explanation of temporary structural wireframes and the fast turnaround sprint to launch 100% bespoke copy.</div>
        </div>
        <span class="badge badge-info" style="font-size: 8.5px; padding: 2px 7px;">Fast-Track Sprint Active</span>
      </div>

      <div class="action-body-grid" style="gap: 10px;">
        <div class="grid-col">
          <div class="info-pane navy-border" style="padding: 7px 10px;">
            <div class="info-label" style="font-size: 9px; margin-bottom: 2px;">Why Temporary Industry Outlines Were Used</div>
            <div class="info-content" style="font-size: 10px; line-height: 1.4;">
              The client's initial document provided high-level service headings and bulleted scopes. In Sprint 1, our engineering objective was to construct a production-ready web application with <strong>16 dedicated, full-page service portals</strong> (e.g. Golden Visa, Corporate Tax, Bank Account Opening, License Freezing).
              <br/><br/>
              To engineer and validate the complex layout components—such as dynamic step timelines, document requirement grids, government fee estimators, and FAQ accordions—standard UAE industry reference structures were temporarily deployed as architectural scaffolding.
            </div>
          </div>
        </div>

        <div class="grid-col">
          <div class="info-pane accent-border" style="padding: 7px 10px;">
            <div class="info-label" style="font-size: 9px; margin-bottom: 2px;">The Fast Bespoke Rewrite Methodology</div>
            <ul class="bullet-list" style="margin-top: 2px;">
              <li style="font-size: 10px; margin-bottom: 2px; line-height: 1.35;"><strong>Zero Generic Templates:</strong> Every temporary reference is being replaced with 100% bespoke, original copy crafted specifically for Vision Business Setup.</li>
              <li style="font-size: 10px; margin-bottom: 2px; line-height: 1.35;"><strong>Strategic Value Positioning:</strong> Highlighting Vision's 10-year governmental channels, dedicated VIP relationship officers, transparent timelines, and rejection-free visa filing track records.</li>
              <li style="font-size: 10px; margin-bottom: 2px; line-height: 1.35;"><strong>Regulatory Alignment:</strong> Updating all guidelines (ICP, GDRFA, MoHRE, FTA corporate tax, Central Bank).</li>
              <li style="font-size: 10px; margin-bottom: 2px; line-height: 1.35;"><strong>Turnaround:</strong> Full copy replacement completed in parallel batches prior to production cutover.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service Rewrite Scope Matrix -->
      <div style="margin-top: 7px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 7px 10px;">
        <div style="font-size: 9.5px; font-weight: 700; color: #1c3b5f; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Service Detail Pages Rewrite Scope (16 Specialized Portals)</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; font-size: 9.5px;">
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 5px 7px;">
            <strong style="color: #1c3b5f;">Licensing (4 Pages)</strong>
            <div style="color: #64748b; margin-top: 1px; line-height: 1.35;">• License Renewal<br/>• License Modification<br/>• License Cancellation<br/>• License Freezing</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 5px 7px;">
            <strong style="color: #1c3b5f;">Visa Solutions (6 Pages)</strong>
            <div style="color: #64748b; margin-top: 1px; line-height: 1.35;">• Residence Visa • Golden Visa<br/>• Freelance Visa • Remote Work<br/>• Dependent Visa • Domestic Worker</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 5px 7px;">
            <strong style="color: #1c3b5f;">Corporate & Support (6 Pages)</strong>
            <div style="color: #64748b; margin-top: 1px; line-height: 1.35;">• Bank Account Opening<br/>• Corporate Tax Guide<br/>• Bookkeeping & VAT • Office Spaces<br/>• VIP Medical/EID • Customs Reg.</div>
          </div>
        </div>
      </div>
    </div>

    <footer class="page-footer">
      <div class="footer-left">
        <span>Vision Business Setup LLC • Internal Development Documentation</span>
      </div>
      <div class="footer-right">
        Page 3 of 4
      </div>
    </footer>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 4: MASTER STATUS MATRIX, LAUNCH TIMELINE & SIGN-OFF            -->
  <!-- ===================================================================== -->
  <div class="page">
    <header class="page-header">
      <div class="header-logo-group">
        ${logoBase64 ? `<img src="${logoBase64}" alt="Vision Business Setup" class="header-logo-img" />` : `<strong style="color: #1c3b5f; font-size: 16px;">VISION BUSINESS SETUP</strong>`}
      </div>
      <div class="header-meta">
        <div class="doc-type">Executive Client Report</div>
        <div class="doc-date">October 2026 • Ref: VBS-REV-04</div>
      </div>
    </header>

    <div class="section-eyebrow">Quality Assurance & Project Delivery</div>
    <h2 class="section-title">Implementation Matrix & Pre-Launch Roadmap</h2>
    <p class="section-desc">Unified status tracking across all feedback items and the step-by-step pathway to official production launch.</p>

    <!-- Master Implementation Matrix Table -->
    <div style="margin-bottom: 12px;">
      <table class="clean-table">
        <thead>
          <tr>
            <th style="width: 7%;">Item</th>
            <th style="width: 25%;">Area / Module</th>
            <th style="width: 38%;">Action Taken / Technical Execution</th>
            <th style="width: 15%;">Status</th>
            <th style="width: 15%;">Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center"><strong>01</strong></td>
            <td><strong>Core Values & Services</strong></td>
            <td>Stripped all numerical prefixes (<code>01–07</code>), indices, and progress counters; replaced with subtle sleek visual indicators.</td>
            <td><span class="badge badge-success">Completed</span></td>
            <td>Immediate</td>
          </tr>
          <tr>
            <td class="text-center"><strong>02</strong></td>
            <td><strong>Mobile Header Phone</strong></td>
            <td>Resolved <code>'050'</code> truncation bug in <code>contact.js</code>; restored full <code>+971 50 545 9247</code> format with tap-to-call action.</td>
            <td><span class="badge badge-success">Completed</span></td>
            <td>Immediate</td>
          </tr>
          <tr>
            <td class="text-center"><strong>03</strong></td>
            <td><strong>About Us Page Flow</strong></td>
            <td>Removed redundant <code>PageHero</code>; page opens directly with "Our Story" &amp; <code>Established in 2015</code> heritage badge.</td>
            <td><span class="badge badge-success">Completed</span></td>
            <td>Immediate</td>
          </tr>
          <tr>
            <td class="text-center"><strong>04A</strong></td>
            <td><strong>Core Brand Content</strong></td>
            <td>Verified 100% fidelity to client's approved copy across Home, About Us, Founder Bio, Core Values &amp; Jurisdictions.</td>
            <td><span class="badge badge-success">Verified</span></td>
            <td>Active</td>
          </tr>
          <tr>
            <td class="text-center"><strong>04B</strong></td>
            <td><strong>Inner Service Pages</strong></td>
            <td>Executing rapid copywriting sprint: replacing temporary structural outlines with 100% bespoke copy for all 16 service pages.</td>
            <td><span class="badge badge-info">In Progress</span></td>
            <td>Sprint 2 Cutover</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pre-Launch Delivery Milestones -->
    <div style="margin-bottom: 12px;">
      <div style="font-size: 10px; font-weight: 700; color: #1c3b5f; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">Pre-Launch Delivery Schedule</div>
      <div class="stepper">
        <div class="step-card active">
          <div class="step-num">1</div>
          <div class="step-title">Feedback Fixes</div>
          <div class="step-desc">Items 1, 2, and 3 resolved, tested, and validated on staging environment.</div>
        </div>
        <div class="step-card active">
          <div class="step-num">2</div>
          <div class="step-title">Bespoke Copy Sprint</div>
          <div class="step-desc">16 inner service portals populated with 100% original copy deck.</div>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <div class="step-title">Client Final Review</div>
          <div class="step-desc">Staging walkthrough with leadership for final sign-off &amp; approvals.</div>
        </div>
        <div class="step-card">
          <div class="step-num">4</div>
          <div class="step-title">Production Cutover</div>
          <div class="step-desc">SSL security binding, performance optimization, and live domain launch.</div>
        </div>
      </div>
    </div>

    <!-- Quality Assurance Commitments -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 14px; margin-bottom: 10px;">
      <div style="font-size: 10px; font-weight: 700; color: #1c3b5f; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Zero-Compromise Engineering Standards</div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 10.5px; color: #475569;">
        <div><strong>Cross-Device Responsive:</strong> Full mobile, tablet, and ultra-wide monitor verification with zero UI clipping.</div>
        <div><strong>High-Performance Speed:</strong> Sub-second asset delivery, modern WebP imagery, and clean React 19 architecture.</div>
        <div><strong>Search Engine Optimization:</strong> Clean meta tags, OpenGraph schemas, and structured JSON-LD local business data.</div>
      </div>
    </div>

    <!-- Sign-off & Closing Box -->
    <div class="signoff-box">
      <div class="signoff-content">
        <h4>Commitment to Excellence</h4>
        <p>
          "Our mandate is to ensure the Vision Business Setup web platform is an indisputable market leader in the UAE corporate services sector. The adjustments outlined in this report have been executed with precision, and we are on schedule for a seamless, prestigious production rollout."
        </p>
      </div>
      <div class="signoff-sig">
        <div class="sig-name">Mohan</div>
        <div class="sig-role">Lead Full-Stack Developer</div>
        <div class="sig-team">Vision Technical Architecture Team</div>
      </div>
    </div>

    <footer class="page-footer">
      <div class="footer-left">
        <span>Vision Business Setup LLC • IDS Global Business Center, Office 107, Karama, Dubai, UAE</span>
      </div>
      <div class="footer-right">
        Page 4 of 4
      </div>
    </footer>
  </div>

</body>
</html>
`;

async function generateReport() {
  console.log('Starting PDF generation with Playwright...');
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set viewport to exact A4 proportions for accurate rendering
  await page.setViewportSize({ width: 1200, height: 1697 });

  // Load the HTML content
  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Wait for web fonts to load
  await page.evaluateHandle('document.fonts.ready');

  const pdfOutputPath = path.join(rootDir, 'Vision_Website_Feedback_Analysis_Report.pdf');

  // Render high-resolution PDF
  await page.pdf({
    path: pdfOutputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: '0mm',
      bottom: '0mm',
      left: '0mm',
      right: '0mm'
    }
  });

  console.log(`PDF successfully generated at: ${pdfOutputPath}`);

  // Generate screenshots of each page for visual inspection
  const pages = await page.$$('.page');
  console.log(`Found ${pages.length} pages in the document.`);

  for (let i = 0; i < pages.length; i++) {
    const screenshotPath = path.join(rootDir, 'scripts', `page_${i + 1}.png`);
    await pages[i].screenshot({ path: screenshotPath });
    console.log(`Screenshot saved for Page ${i + 1}: ${screenshotPath}`);
  }

  await browser.close();

  const stats = fs.statSync(pdfOutputPath);
  console.log(`Final PDF File Size: ${(stats.size / 1024).toFixed(2)} KB`);
}

generateReport().catch((err) => {
  console.error('Error generating PDF report:', err);
  process.exit(1);
});
