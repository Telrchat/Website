import { createClient } from "@/utils/supabase/client";

export async function useAuthGetUserData(): Promise<any | null> {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return null;
  }
  return data;
}

export async function AuthGetUserData(): Promise<any | null> {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return null;
  }
  return data;
}
