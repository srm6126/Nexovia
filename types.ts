export type AppRole = "admin" | "dealer" | "manager" | "dsr";
export type Profile = {
  id: string;
  display_name: string;
  role: AppRole;
  dealer_id: string | null;
  is_active: boolean;
};
