SHAHIN APP V3 update

1. Backup current business data from Settings before deployment.
2. Extract this ZIP and upload all included files to the ROOT of the existing Vercel project, replacing the previous app files.
3. Do not run SQL again. Do not create a new Supabase project.
4. Login as Admin and open Settings > Dealer / Manager / DSR permissions. Select page view and edit permissions separately, then save.
5. Admin, Dealer and Manager retain the same dashboard and menu layout. Unauthorized actions show an Admin permission message. DSR remains limited to its DSR statement page.
6. Reports support one-day, weekly, monthly and custom date ranges, plus product-based profit summary. Manual aggregate sales are excluded from gross-profit calculation because they have no product-level purchase costs.
7. This update changes the browser-side UI permission layer. It does not replace secure Supabase database-side role policies/RLS; do not treat client-side restrictions as a security boundary for sensitive production data.
