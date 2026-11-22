SHAHIN APP V4 update

1. Before replacing the live website, download a JSON backup from Admin > Settings.
2. Extract this ZIP and upload ALL files to the ROOT of the existing Vercel project, replacing previous files.
3. Keep the existing Supabase project and database. Do NOT run SQL again.
4. After deployment, test Admin, Dealer, Manager and DSR accounts.

V4 changes:
- DSR selector, date, area and edit control use a compact single-row mobile toolbar.
- DSR table columns are compacted to fit mobile width.
- New-stock title/date are compact and product, quantity, purchase rate and total columns fit mobile width.
- Admin can delete individual manual sales and manual damage entries in Settings after enabling Settings Edit.
- Admin can delete individual new-stock, expense, challan and stock-adjustment entries after enabling the relevant page Edit. Reversible stock is adjusted on deletion.
- Admin can delete a DSR daily record after enabling DSR Edit; stock and account due are recalculated. Newer DSR records must be deleted first to preserve due history.

Important:
- Every deletion asks for confirmation. If stock has already been consumed and cannot be safely reversed, deletion is blocked.
- Product catalogue, product rates, accounts, and unrelated history are not cleared.
- Existing Supabase security/RLS limitations are unchanged; client-side permissions are not server-side security.
