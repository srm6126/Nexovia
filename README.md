# SHAHIN APP — GitHub / Vercel package

Mobile-first হিসাব, DSR sales & settlement, stock, products, accounts, company challan, expenses, due and PDF report application.

## Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Vite output folder: `dist`.

## Deploy to Vercel

1. Extract this ZIP and upload the **contents of this folder** to the root of a GitHub repository.
2. Import that repository into Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Deploy. Do not upload `node_modules` or `dist`.

## Login

Initial admin PIN: `612600`.
Create DSR / Dealer / Manager accounts in Account Management. Each account has its own 4–12 digit PIN and uses the same login panel. DSR login is limited to that DSR's own DSR entry and statement. Inactive accounts cannot log in. Sessions automatically log out after 30 minutes without activity.

## Included features

- Mobile-first dashboard, monthly sales target, sales/cash/outstanding due and stock cards.
- DSR issue, return, damage, sold quantity and sales value calculations.
- DSR cash deposit, today's due, previous due and total due.
- Stock receipt and DSR stock issue/return adjustments.
- Product create/edit/delete, unit, buy/sell price and profit.
- Dealer, DSR and Manager account create/edit/delete, PIN update, active/ban toggle and DSR target.
- Admin settings: app name, slogan, business/report heading, contact details, monthly target and admin PIN.
- Manual stock and DSR due plus/minus adjustments with reason/history.
- Company goods-received vs payment challan ledger.
- Expenses, due overview, sales statement, PDF and JSON backup/restore.

## Important: data storage / cloud

This build currently saves data in the browser's `localStorage` on the device being used. It is suitable for local testing and a single-device workflow. It does **not** yet synchronize accounts or transactions between different phones. A Vercel deployment alone is hosting, not a shared database. For multi-device live use, a real backend (for example Supabase with server-side authentication/RLS or a trusted API) must be configured and tested before business data is entered. Do not treat browser PIN storage as production-grade security. Do not put database service-role secrets in frontend code.

## Accounting rules used

- Sold quantity = issued − returned − damaged. The app blocks a row where return + damage exceeds issued quantity.
- On save, stock decreases by issued quantity and increases by returned quantity. Damaged goods remain deducted from stock.
- Sales amount = sold quantity × product selling rate.
- Today's due = max(0, sales amount − cash deposited).
- Previous due = manual DSR due adjustment + earlier saved DSR dues.
- Company ledger balance = goods received value − payments made; positive means company receivable.

Always download JSON backups regularly and verify totals before using the figures for official accounting.
