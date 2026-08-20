CREATE TABLE public.candidates (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text NOT NULL UNIQUE,
  full_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  position text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'onboarding',
  personal jsonb NOT NULL DEFAULT '{}'::jsonb,
  tax_form jsonb NOT NULL DEFAULT '{}'::jsonb,
  agreements_accepted_at timestamptz,
  submitted_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.candidates TO authenticated;
GRANT ALL ON public.candidates TO service_role;
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Candidates read own record" ON public.candidates FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Candidates update own record" ON public.candidates FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "Admins manage candidates" ON public.candidates FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.candidate_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id uuid NOT NULL REFERENCES public.candidates(id) ON DELETE CASCADE,
  doc_type text NOT NULL,
  file_name text NOT NULL,
  storage_path text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.candidate_documents TO authenticated;
GRANT ALL ON public.candidate_documents TO service_role;
ALTER TABLE public.candidate_documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Candidates read own documents" ON public.candidate_documents FOR SELECT TO authenticated USING (auth.uid() = candidate_id);
CREATE POLICY "Candidates upload own documents" ON public.candidate_documents FOR INSERT TO authenticated WITH CHECK (auth.uid() = candidate_id);
CREATE POLICY "Candidates delete own documents" ON public.candidate_documents FOR DELETE TO authenticated USING (auth.uid() = candidate_id AND status <> 'verified');
CREATE POLICY "Admins manage documents" ON public.candidate_documents FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.candidate_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id uuid NOT NULL REFERENCES public.candidates(id) ON DELETE CASCADE,
  title text NOT NULL,
  hourly_rate numeric NOT NULL DEFAULT 60,
  start_date date,
  terms text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'sent',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.candidate_offers TO authenticated;
GRANT ALL ON public.candidate_offers TO service_role;
ALTER TABLE public.candidate_offers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Candidates read own offer" ON public.candidate_offers FOR SELECT TO authenticated USING (auth.uid() = candidate_id);
CREATE POLICY "Candidates respond to own offer" ON public.candidate_offers FOR UPDATE TO authenticated USING (auth.uid() = candidate_id) WITH CHECK (auth.uid() = candidate_id);
CREATE POLICY "Admins manage offers" ON public.candidate_offers FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.candidate_credentials (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text NOT NULL UNIQUE,
  code text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.candidate_credentials TO service_role;
ALTER TABLE public.candidate_credentials ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_candidates_updated_at BEFORE UPDATE ON public.candidates
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER update_candidate_documents_updated_at BEFORE UPDATE ON public.candidate_documents
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER update_candidate_offers_updated_at BEFORE UPDATE ON public.candidate_offers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();