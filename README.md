# SHAHIN APP — Static GitHub/Vercel build

## Deploy
1. Extract this ZIP.
2. Upload `index.html` and this `README.md` to a new GitHub repository (root folder).
3. In Vercel choose **Add New → Project**, import the repository, and deploy.
4. Framework preset: **Other**. Build command: leave blank. Output directory: `.` (root).

## Login
Initial admin PIN: `612600` (change it in Settings after login).

## Important data/storage note
This is a working mobile-first static prototype. It stores data in the browser's `localStorage` on the current device/browser. It does **not** yet synchronize multiple phones/users and is not a secure production authentication system. For cloud sync, role-based multi-device login, audit logs, and secure password management, connect a backend such as Supabase or Firebase and configure its project credentials. Do not use real sensitive business data until that backend/security layer is configured.

## Included
Dashboard, DSR issue/return/damage/sales calculation, cash and due calculation, stock receipt and stock deduction/return, product management, DSR account management, company challan/payment ledger, expenses, due adjustment, reports with browser PDF/print, JSON backup/restore, app title/tagline and target settings.
