SHAHIN APP — Cloud Sync Package

Files: index.html and SHahin_cloud_sync.sql

IMPORTANT: This build uses Supabase email/password authentication (not the old local PIN login). Your already-created Supabase Auth user must have a row in public.business_members with role Admin.

1) Run SHahin_cloud_sync.sql in Supabase SQL Editor.
2) In Vercel, replace the deployed index.html with this index.html and redeploy.
3) Login using the email and password used when creating the Supabase Auth user.
4) To add Dealer/DSR/Manager: create each user in Supabase Authentication > Users > Add user > Create new user. Then add a membership row using that user's UID and the business_id from public.business_members for the Admin. Example SQL (replace values):

insert into public.business_members(business_id,user_id,role,account_name) values ('BUSINESS_UUID','USER_UUID','Dealer','Dealer Name');

Use role exactly: Dealer, DSR, Manager.

IMPORTANT DATA NOTE: This sync starts from the JSON data already present in the browser that first logs in only if the cloud app_state is empty. Once cloud state exists, it becomes the shared source of truth. Export a JSON backup from the old app before switching. The app_state row stores the complete app JSON. Every authenticated business member can read and write through the secured RPC; only members of that business can use it.

This package is a first cloud-sync build. It does not yet automatically create Supabase Auth users from the in-app Accounts page, nor does it fully enforce per-role screen-level permissions. Do not use it for sensitive production operations until those are implemented and tested.
