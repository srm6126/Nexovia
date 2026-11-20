# SHAHIN APP

Mobile-first business, sales, stock and accounts management starter project.

## Included modules

- PIN-based local demo login (initial PIN: `612600`)
- Home dashboard with monthly sales, cash, due, stock value and target progress
- Account management: dealer, DSR and manager
- Product management with unit, purchase price, selling price and profit
- Stock receipt / new stock entry
- DSR sales & settlement with issue, return, damage, sold quantity and automatic totals
- Company challan: goods received vs payment made
- Sales statement, due overview, expenses and PDF reports
- Settings: app/business identity, monthly target, per-DSR target, PIN update, stock/due adjustment history
- JSON backup and restore
- Responsive mobile layout with fixed bottom navigation and scrollable product table

## Run locally

1. Install Node.js 18 or newer.
2. Extract the ZIP.
3. Open a terminal in this folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite.

## Build for Vercel

```bash
npm run build
```

The deploy output is `dist/`. Import this repository into Vercel; framework preset is Vite and build command is `npm run build`.

## GitHub upload

Upload the extracted project folder contents to a new GitHub repository. Do not upload `node_modules` or `.env.local`.

## Initial demo access

- PIN: `612600`
- Create additional accounts from Account Management.
- Change the admin PIN in Settings after first login.

## Important security and cloud notes

This package is immediately runnable in **local browser storage mode**. Data stays in the browser/device that entered it. JSON backup/restore is included.

The included Supabase SQL is a secure starting schema for a future authenticated cloud deployment. The current PIN demo login is client-side and is **not production-grade authentication**. Do not expose sensitive business data publicly or treat the demo PIN as secure multi-user cloud authentication. For production multi-device synchronization, configure Supabase Auth (email/password or phone OTP), create user profiles with roles, and connect the app through authenticated Supabase sessions. Never put a Supabase service-role key in frontend environment variables.

`.env.example` documents the public Supabase URL and anon key variables, but this build does not yet automatically sync local browser state to Supabase. Cloud sync requires the authenticated integration described above.

## Calculation rules in this starter

- Sold quantity = issued - returned - damaged.
- Sales amount = sold quantity × selling price.
- Returned stock is added back; issued quantity is deducted.
- Damage quantity is tracked separately.
- Today's due = sales amount - cash deposited.
- Total due = previous due + today's due.
- Challan balance = goods received value - payments made.

## Important accounting note

The starter prevents duplicate DSR entries for the same DSR and date and blocks issuing more than available stock unless the setting is changed. Review business-specific rules before using this for official accounting. Always keep backups.
