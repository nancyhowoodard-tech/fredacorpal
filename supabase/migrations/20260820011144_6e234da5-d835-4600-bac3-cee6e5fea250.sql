CREATE POLICY "Candidates upload own files" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'candidate-documents' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "Candidates read own files" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'candidate-documents' AND ((storage.foldername(name))[1] = auth.uid()::text OR public.has_role(auth.uid(), 'admin')));
CREATE POLICY "Candidates delete own files" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'candidate-documents' AND (storage.foldername(name))[1] = auth.uid()::text);