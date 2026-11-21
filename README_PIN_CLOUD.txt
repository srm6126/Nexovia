SHAHIN APP — PIN-ONLY CLOUD PACKAGE

Package files:
- index.html: app with PIN-only login and shared cloud state
- SHAHIN_PIN_CLOUD_SETUP.sql: database functions and temporary first Admin PIN

SETUP (do not skip):
1. In Supabase SQL Editor, run the entire SHAHIN_PIN_CLOUD_SETUP.sql once. It uses the existing business row named SHAHIN APP.
2. The temporary first Admin PIN is 612600. Change it immediately before sharing the app. Do not reuse this PIN.
3. Replace the Vercel deployment's index.html with this package's index.html and redeploy. Keep a JSON backup of old local app data first.
4. Sign in using PIN 612600. The first successful login on the device that has the old app data imports that local JSON only if cloud state is empty. Check all old products and balances before allowing others to use it.
5. Create Dealer, DSR and Manager from Accounts in the app; each needs a unique 6–12 digit PIN.

All roles can read and update the shared business state. Changes are saved to Supabase and other logged-in devices refresh about every 5 seconds.

SECURITY / LIMITATIONS:
- This is a PIN-only RPC session design using hashed PINs and expiring random session tokens. The browser holds a bearer session token; protect device access and log out on shared devices.
- The temporary Admin PIN is visible in this instruction; change it before deployment is shared.
- No automated browser test was possible here. Verify login, save, second-device sync, and backup restoration before using for live financial records.
- Keep the previous deployment and JSON backup until all figures are reconciled.
