'use server';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  interest: string;
}

const interestLabels: Record<string, string> = {
  quote: 'Ajánlatkérés / Quote Request',
  privatelabel: 'Saját márkás gyártás / Private Label',
  partnership: 'Partnerség / Partnership',
  other: 'Egyéb / Other',
};

// ─── Internal notification email (goes to the company) ───────────────────────
function internalEmailHtml(data: ContactFormData): string {
  const interest = interestLabels[data.interest] ?? data.interest;
  return `
<!DOCTYPE html>
<html lang="hu">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1a2e5a;padding:28px 32px;">
            <p style="margin:0;font-size:11px;color:#f5c518;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Global Trade &amp; Production Kft.</p>
            <h1 style="margin:6px 0 0;font-size:22px;color:#ffffff;font-weight:700;">Új érdeklődő a weboldalról</h1>
          </td>
        </tr>

        <!-- Sender details -->
        <tr>
          <td style="padding:28px 32px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 14px;background:#f0f3f8;border-radius:6px 6px 0 0;border-bottom:1px solid #e2e8f0;">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Érdeklődés tárgya</span><br/>
                  <strong style="font-size:15px;color:#1a2e5a;">${interest}</strong>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Név</span><br/>
                  <strong style="font-size:15px;color:#1e293b;">${data.name}</strong>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#f0f3f8;border-bottom:1px solid #e2e8f0;">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Cég</span><br/>
                  <strong style="font-size:15px;color:#1e293b;">${data.company}</strong>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">E-mail</span><br/>
                  <a href="mailto:${data.email}" style="font-size:15px;color:#1a2e5a;text-decoration:none;font-weight:600;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#f0f3f8;border-radius:0 0 6px 6px;">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Telefon</span><br/>
                  <strong style="font-size:15px;color:#1e293b;">${data.phone || '—'}</strong>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:20px 32px 28px;">
            <p style="margin:0 0 8px;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Üzenet</p>
            <div style="background:#ffffff;border-left:4px solid #f5c518;border-radius:0 6px 6px 0;padding:16px 20px;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
              <p style="margin:0;font-size:15px;color:#1e293b;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 32px 28px;">
            <a href="mailto:${data.email}" style="display:inline-block;padding:12px 24px;background:#f5c518;color:#1a2e5a;font-weight:700;font-size:14px;border-radius:6px;text-decoration:none;">Válasz küldése</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f0f3f8;padding:16px 32px;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">
              global-trade.hu &nbsp;·&nbsp; 3390 Füzesabony, Pusztaszikszó
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

// ─── Customer confirmation email (goes to the person who submitted the form) ──
function confirmationEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="hu">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1a2e5a;padding:28px 32px;">
            <p style="margin:0;font-size:11px;color:#f5c518;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Global Trade &amp; Production Kft.</p>
            <h1 style="margin:6px 0 0;font-size:22px;color:#ffffff;font-weight:700;">Köszönjük megkeresését!</h1>
          </td>
        </tr>

        <!-- HU block -->
        <tr>
          <td style="padding:32px 32px 0;">
            <p style="margin:0 0 12px;font-size:15px;color:#1e293b;line-height:1.7;">Kedves <strong>${data.name}</strong>!</p>
            <p style="margin:0 0 12px;font-size:15px;color:#1e293b;line-height:1.7;">
              Köszönjük megkeresését. Kollégáink hamarosan felveszik Önnel a kapcsolatot —
              kérjük, számítson visszajelzésünkre <strong>48 munkaidős órán belül</strong>.
            </p>
            <p style="margin:0 0 4px;font-size:15px;color:#1e293b;line-height:1.7;">
              Ha azonnali segítségre van szüksége, kérjük, hívjon minket közvetlenül:
            </p>
            <p style="margin:0;font-size:15px;color:#1a2e5a;font-weight:600;">Lőrincz Ákos &nbsp;—&nbsp; +36 30 953 8702</p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-top:1px solid #e2e8f0;font-size:0;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- EN block -->
        <tr>
          <td style="padding:0 32px 32px;">
            <p style="margin:0 0 12px;font-size:15px;color:#1e293b;line-height:1.7;">Dear <strong>${data.name}</strong>,</p>
            <p style="margin:0 0 12px;font-size:15px;color:#1e293b;line-height:1.7;">
              Thank you for reaching out. One of our colleagues will get back to you
              within <strong>48 business hours</strong>.
            </p>
            <p style="margin:0 0 4px;font-size:15px;color:#1e293b;line-height:1.7;">
              If you need immediate assistance, please call us directly:
            </p>
            <p style="margin:0;font-size:15px;color:#1a2e5a;font-weight:600;">Lőrincz Ákos &nbsp;—&nbsp; +36 30 953 8702</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f0f3f8;padding:16px 32px;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">
              global-trade.hu &nbsp;·&nbsp; 3390 Füzesabony, Pusztaszikszó
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

// ─── Main server action ───────────────────────────────────────────────────────
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.startsWith('re_xxx')) {
    console.warn('RESEND_API_KEY not configured. Open .env.local and paste your real key.');
    return { success: false };
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const interest = interestLabels[data.interest] ?? data.interest;

  const internalTo = ['lorincz@global-trade.hu'];
  const customerTo = [data.email];

  try {
    const [internalRes, confirmationRes] = await Promise.all([
      // Email 1 — internal notification to the company
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          from: 'Global Trade & Production <info@global-trade.hu>',
          to: internalTo,
          reply_to: data.email,
          subject: `Új érdeklődő: ${data.company} (${interest})`,
          html: internalEmailHtml(data),
        }),
      }),

      // Email 2 — confirmation to the person who submitted the form
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          from: 'Global Trade & Production <info@global-trade.hu>',
          to: customerTo,
          subject: 'Köszönjük megkeresését / Thank you for your enquiry',
          html: confirmationEmailHtml(data),
        }),
      }),
    ]);

    const success = internalRes.ok && confirmationRes.ok;

    if (!success) {
      const internalBody = await internalRes.text().catch(() => '');
      const confirmBody = await confirmationRes.text().catch(() => '');
      console.error('Resend error (internal):', internalBody);
      console.error('Resend error (confirmation):', confirmBody);
    }

    return { success };
  } catch (err) {
    console.error('sendContactEmail failed:', err);
    return { success: false };
  }
}
