SHAHIN APP update package v2

Deployment:
1. Download and extract this ZIP.
2. Upload all files in this folder to the ROOT of the existing Vercel project, replacing the old index.html and PWA files.
3. Keep the existing Supabase project and database. Do NOT run SQL again.
4. Open the deployed site and test each role with its own PIN.

Included updates:
- Header monthly percentage uses company goods-received amount (challan received; falls back to new-stock received value when no challan received amount exists), not DSR sales.
- Settings: previous-date total sales entry by amount only.
- Settings: manual damage entry and history.
- Reports: DSR, stock, company challan, expense, damage, manual sales, and overall summary; Bengali date/time; styled SHAHIN APP preparer mark.
- Report date/type selectors remain enabled; PDF print fit uses a smaller one-page scale.
- DSR page includes past daily records and DSR role retains bottom DSR/logout navigation.
- Dealer/Manager quick links are limited to their allowed pages; Settings is not available.
- Existing local/cloud history and product records are not reset by this HTML update.

Important:
- This HTML-only update adds manualSales/manualDamages fields to the shared app JSON when Admin enters them. The existing Supabase Admin save path saves the full JSON state.
- Verify in a test login before replacing the live version. Take a backup first.
- The preparer mark is a decorative app label, not a legal handwritten signature.
