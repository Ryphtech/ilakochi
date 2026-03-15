-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- ============================================
-- TABLE: menu_items
-- ============================================
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('appetizers', 'main', 'seafood', 'desserts')),
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- TABLE: gallery_images
-- ============================================
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('food', 'ambience', 'people')),
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public can read menu_items" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Public can read gallery_images" ON gallery_images FOR SELECT USING (true);

-- Allow authenticated users full access (for admin)
CREATE POLICY "Auth users can insert menu_items" ON menu_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth users can update menu_items" ON menu_items FOR UPDATE USING (true);
CREATE POLICY "Auth users can delete menu_items" ON menu_items FOR DELETE USING (true);

CREATE POLICY "Auth users can insert gallery_images" ON gallery_images FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth users can update gallery_images" ON gallery_images FOR UPDATE USING (true);
CREATE POLICY "Auth users can delete gallery_images" ON gallery_images FOR DELETE USING (true);

-- ============================================
-- STORAGE BUCKET
-- ============================================
-- Create a public 'images' bucket for uploads
-- Note: Run this separately or create via Dashboard > Storage > New Bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to images bucket
CREATE POLICY "Public can view images" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Anyone can upload images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images');
CREATE POLICY "Anyone can update images" ON storage.objects FOR UPDATE USING (bucket_id = 'images');
CREATE POLICY "Anyone can delete images" ON storage.objects FOR DELETE USING (bucket_id = 'images');

-- ============================================
-- SEED DATA: menu_items
-- ============================================
INSERT INTO menu_items (name, description, price, category, image_url, display_order) VALUES
  ('Truffle Malabar Samosas', 'Hand-folded pastry, woodland mushrooms, black truffle essence, mint foam.', 450, 'appetizers', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwdPTXmwIpt8ZN5O-fg7dzvZMQquOdO1MbXPBvsnbpyB4p11iCd0vJ53vZDY15dyk9tr3tloJ8O0godxqOCd5Lw4UN4mjL0Icq5Xsj4ir5CFLw6VWBJPRRzq0_2fcylF4Oktu7-1z2PN-RoGFsNESBhJWsy4ck1j8Y4G5ZUTlGypr-Ok_pqoUrcDX4CXEvVfOibbmCn_7svb8Sk_eh7SkLo-_jVvGnHjH_UfJOj4feMYVb2y0pPkBloF_OuZwOVSmz2Nlo4u3auE', 1),
  ('Paneer Mille-Feuille', 'Layered artisan cottage cheese, spiced apricot chutney, rose petal dust.', 525, 'appetizers', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCuTgSnti8pUreejB-nvDULdOIA1VMOIG3epWMzXkytTdKHdpaICrkTjgzjn6HKwLUz7vyGuNqnbfw3cF_ZqeJF-uKQRDT9XVm7B0Cz9EI7OB00MkbEbuZje7wgIQc4mqeoO-ptgo8wQUZVF9GnyZXx5wzRlfkMC9558E35AE823b_NZPLdX7i1dn0DOO6OYA9VLfa_4qEReQ82eS77J198nZJe-a3EOA6oeLBo-p2bMrtQ-th1B5qISeHwgLF0nOXGP7_ku06GWE', 2),
  ('Kochi Chicken 65', 'Crispy tempered chicken, curry leaf pesto, pickled radish curls.', 575, 'appetizers', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhDj1_S5GvDFMq_9z7XmTUYJ_VsRNUVlZQtNVII5ZqKHb1y2_wfNhxb2AtIicV77QU6QaX2Cno32eni4WLqbpkrkT_ELbbm7nFDrHLAiWaDFnxMFuX0Dvb50OaLiVxPTOoQsPYqg-_wJJjgyBb3TCpp7pJM0LzW2bktesJVoSdcZHaVNh51H4yvG7P4dGbm_GmIbd9hgT6ai2U2xAsrDDoUQ4ILNAM_RLOk-We0H3HJ3esbEf-WGV23TbNUjMkqAQHLOOJPFOnbDk', 3),
  ('Kerala Beef Fry', 'Slow-roasted beef with coconut slices and curry leaves.', 320, 'appetizers', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHLWettcRcooPO8jq9WVmRrlP-Nn1NHH6CKJ99lKnRn5vpt_WoZW3ICx99VvquKGhs7CkguPKlbvv5n7CWiuph1nrc3mX0HVUZC3mozaLiC-Xu8mg_9bgWzuRa4gLNFP_b19kajR-nI5CNNjEIE3ML-Tt1gKxxv9RmszFDAjcrj-DHM8ZSi-9XRYYmWRc4dhJ_3q-NNotDsh3qPZCDKTzY35MQQ_KmWNpN4W1igNg4FqodwdymUq_i8soz8OYacG99FeQ-vMdeusQ', 4),
  ('Velvet Butter Chicken', 'Smoked tandoori chicken, satin tomato reduction, kasuri methi butter.', 895, 'main', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzcOYsctQ8hq8cAjPkEtbpKDUNtylZVYGXhT9pIj9m236cpvHMbhXJtTlQGMyXOyKuAHvqzcB6odkE_ojLKm71_xm0tnP036MEMxpWnxjulMGry7PPuE5ltMSNwSKN-OERjMN1xJRPFxAq_UoF5Sj799mN1qPf1Bfd5FrZDa5o8VV9RKHU7HCQ2BMp0x22cYqRTHGs0xA_tIaSuxBIjMBBx4jzAzKe9IkB0mlLqVfpEt6KuUVcFrpr77hYxzWndP3cpbMOZb9H5CM', 5),
  ('Royal Lamb Biryani', 'Long-grain basmati, slow-braised lamb, saffron infusions, gold leaf.', 1150, 'main', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAD7OyAcKu4FhuF3osS6GEMlmm4k0F267C9YeeSJcMHJcQv_aynRcrsFCepzjLYK9ac5c2igpdn80m6N6_vKYDesqCw2S9PAEtzXoTb3jmSf5k263QBspvCTn8DgYror5tPRbT3U6cgYYLzTGhrIo_0PSLV4-3dyZDDpZzvYvDiXAL9uGZPJm64IR8Wz7YNM3Rrx5jEXC3S1Op70sFQaeu_u_wjoylvVeGBmMobjl8SpWNPe2bOhW48yItmZrDFSHhhKE4yfB5s2s', 6),
  ('Heritage Dal Ila', '24-hour slow-cooked black lentils, artisanal butter, fresh cream swirl.', 625, 'main', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtPvdxYs8VEInf6ytcPGnRZnM6aPiYV5z7RMe8VwRuXb6SvFkbFU_Jy4KXgZKQ97nvvtYMpqrPb0bIHRcUfgMXFjruLvPvsgx_xNJFXqsPt7OlrZem8LdrxStgZBdd4OBjRM3SFfDJIBSZFq34JFDlODaQX2pU0H5Th-TuTA1fbB31grBvfskI0bPzyfIqzLAQRsuE0bKyMe2D5ZboGLAQp7R8ls6j5ZVnheP4rc6SuWtKQSo7IUuEWq-OfTuFSaP_UQfTnfJrS04', 7),
  ('Appam & Stew', 'Fluffy rice pancakes served with creamy vegetable stew.', 280, 'main', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe46NTKBRZbMPo2NiRKyQXZYvJ4elb_n482APTElAF4pzD5FgkJbj6YBo9UxwIcFYlZZ2dY30Zzb6lRutt4s59qP9Hsx9z51fED17vNQDDMYPEuZZ4iKRr3bxTyKwaP_v70C1k7lFJfp00Rfgwk3Dwr4qa2mteb_FOsFnHUgfh9Xp79MNLoSztKZr6G529A7EGM4ZdB2hO_RPD_UomDEoNjbmHWCcqMul8iXZ3DJPwr0ynNfR-Wo0bMfI4RC7CLjinsWd_hdDxq80', 8),
  ('Malabar Biryani', 'Aromatic kaima rice layered with spiced chicken masala.', 380, 'main', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsFj4ttUBuS4DVzPXOg7uZrNV5sRbxfMh7gxbyyiNA4KkYgDxi0LIMcSjvUTxQtw3e_hQz4kG7jITh4fME8p1UFEEmoOfY2qzugD1_rssd091fwyfV88uAcbbdTdX_kAuiGH-TeS6NfKnr6odxxp1XQyFKD53WfXbgrPz-YdzkvELX_vTp1qZmV5lCCrwnYezo6JSgbX9zXwHIyMYp4gwkfSWf2nGY36vZmuwaVxKi4_562JiEuSPOS8Ile-dbeUlathIx7Y4wS7k', 9),
  ('Backwater Fish Curry', 'Kingfish steaks, roasted coconut milk, kudampuli, curry leaves.', 925, 'seafood', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCVz7b4SoS7jObzcPchSFgsTJVCPM_PzB9traPh2CKkqV5pb8xCY1xJPfPp5pinrHzQJ7bJtwQQzNDWYdaEoggglywVoHOO4_4G66OGgRadGwJY2a_9M5kTfeh9_u_wh0ve0-P069WxYSrpN2sPyv06ekaDSYV2s6VNjXlVMAY7nvX9S-Ys_UtlWtY7afrv3zcrSV-qua6xlaK3obUBt781LBwkPuUtvg12X0snR06pBM1Fml5_v8T579wM7_dcuh5VUPmjdPfFTs', 10),
  ('Malabar Prawn Roast', 'Tiger prawns, caramelised onion masala, black pepper, fennel shards.', 1250, 'seafood', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-PCiIiSXFgabYXt_iwWwcBZErXEznMAaYI1getn0zPjgXuHrWgo_aZuj6wsBwbcKLJNEwBVZU2-Dh8ArM5gpZQlF3-TLkgRyzyDox3el90Oah_qrDpp3sxoCRVsT0EXPh2AltO24p_B7LO2KM3fwdsX05B2HmanbE8WVgO85AWJijkazX7G5wwY_mt3rS2N2hpbD8_E8K0mZaCDnKIlutJLUh6sNzCKsqHwSYApfSdqZromZhQjG_gg-vMUKNVG1Sf0qbui6vCtw', 11),
  ('Pollichathu Snapper', 'Pearl spot fish wrapped in banana leaf, charred red chilly paste.', 1400, 'seafood', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAONgoKWtYAt1BqjkT4cjt4m6KVdJXTL1zJM8l1TCg_eKYBU30aF3F6fbIvHXiWgA5Leq8XfuOZA2ZhNBqGICI_Zsz4DLmNjtYimGqeYQ4X9WhLwNJgnEBirTG6CemFl6i0sWM4pmpB3kkcbDqzvgmLSOwcuJc84eZvX_gC8ZQwYVv0UfutjNwG4DZQ_6RrGb8M_WXEtyYqBM3Nbqh93RocNvBtvpT8Jt6UKcroGqBCotpMmuHIBewhcbKjkaSHbxQiFYcIGpt7nC4', 12),
  ('Karimeen Pollichathu', 'Fresh Pearl Spot fish marinated in traditional Kerala spices, wrapped in banana leaf.', 540, 'seafood', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9L753QB3F9sjw6IwwIVr6ZFAgaLiHzNmqqaaIxBJlYCObHxqhjGmX7EUqydXF0w8MjjjoAK3IPhmiHMUBhnFDC7Pn9mDi58iC4e_2WLJiAfzG-2Qp80TGX6CEQe5VCxW3X0Kk9m2mND7dev4DZ0DtJV_4wyuGVrG5yzwBvZIJb6P6n4GZorGtM2ONYF4WajiLIxAMjYrarnNL0jLyDVkj07xTW4rz23GQ3eqz4ZvjI2r9D3wYxKDQvVCxSswKBW8Fh6ARVx4O0Do', 13);

-- ============================================
-- SEED DATA: gallery_images
-- ============================================
INSERT INTO gallery_images (title, category, image_url, display_order) VALUES
  ('Signature Sea Bass', 'food', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqqSMYHVY01LBRqPpJoPlvzxr75NDHwutAZLOsxhN-aGSHo8QVEoO8GbKFR9L0njSQhMoG6w9f0cY3NvCaSn3RDbTiY6-RjvQMttEmJ0artI5llkRrzkEP2HXWl-n_SgvwJyEeWTf3rMIKdMp7IQzKXBPSYZU9rzs1-Moy5PYYZbhNR2htVZJ_BEnad9ueX5nXYJ1ad3xFDoHutYyfFkxzDxudfiuFOMyFqmMZDK0TJ2tWp6i2B-RkDHJo9PH2jn49NHxtPPlL928', 1),
  ('The Evening Glow', 'ambience', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmNu0BcwBccm0nzA4TSqDcqidvCwZuVY-Grukvab_aINtpSAzUlOP6AENYN2DqSk2NlzrjjQZuduKwfeYsPwN6z3lpw3AzTTdGtfxoINYefv7ImuZSScZPaZj-L33rGiTRZJJ8NEAVrzq7TiCL1UzSLGX2CJRasE_ZxJCb76nXMR1u8rWecWGuhFlNqAYE165KwT3roKJ4cks3nQHBykvgatg_mWdonrA6iyrHWkFu_BzX9qxsXafMgK6vdAbUmBsV0EcWz0BG-WM', 2),
  ('Culinary Artistry', 'people', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAojaPMyF6ZuDe2gTlkycWXWdJb3UrMOUtT39K2iaSNGqYF7KT_sWab5fzgMWTaZmNbAANpvTUC3q9u4Z0BvcdD_k2WltrFiyMgUQYDeQVaFNhA-Ph3dLFr2QYHB92aBc4lgJSI86RihI6LzsYESTGfIo_LguX5PrF4X8oP53EKDDKTxtjiFk_NZQSB96xMC57gUg-hBh8MOvOf6LKU7Zdv9GPmEYeW4DqLR7fp09AlABxOGU_nSmXefg6NazfdBc0-BsLRdFTCJp8', 3),
  ('Farm to Table', 'food', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa1OZlR1Xk6fyjzxoy2_NpOew2uLMDcln3vnVFhhck35j1gbSBhgYO-et4rFx1KPPlqzDXTOlr4Hi_bcjohfjTepBcPBNRdSOuXiSGfdBDGHgtdjdTImaXEKOWfjDspRO1WKofXNwh45fOLo5d_Tpgywl1wLcQM0L9piQNUavscTvlL1XeRTbAnyjIbelI6fNSeBPXh2cYftxkIzLHIyXasc3ldBXLPzV1nTeJ62AU0lzl4Hyqm2hguaaNPo61L8Yjk02-_fY3Sg8', 4),
  ('Intimate Settings', 'ambience', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg15fEtIc8aq5ae0XZFImms7mOYQ4GdDE5889xMfKHalKxRMcvnB-Of5bFYhlur05FwqTlVhoJRKXbLBc-wnCapvrne63RB7R7rQMqzyKYSD3MquFUqEzx8PF-UEsUg_6sgqizMTJfHQix4pLIgIQpCBNvfh98wT4VoRwixsCgpVlZkafU456fq3hGF34dYlclZdjlyxtJDFMmaom8FAJ90ZYjQv9t-9x2QVPle3GbEVoxoNpDqysw456h4ERzEmSQh7KJkjsrzP0', 5),
  ('The Golden Finish', 'food', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM893qDw4vYx1S2LFeq1J_VJGoticunoLXRDcLL3rDp1Fks96rrgq1QHcSvbpLQ5APsZFM_hx7CHlsmA3pV4Va1Zrni1hc8ZT-r7xRE9wCjX-BaNX8N9KVjfukjCLr5zB0xCGkHNJUgl0KMg56Jc4jZqOIT7sCoZ5iuq57ntXCikHdOizf2Tmoz0BXXi5tPbUzVEIT29IPk8PSlEAeWIwAOPgsIHcLXFz9NOvlVELwE323jqLCCoA5JslJp5rkK2R2nOnOgC88W0I', 6),
  ('Local Greens', 'food', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6o8MiTT1zXZoJ6RqgU9tmDIrUwgl3PBJkmRXoZdNqPAopq5sK6blOyi9jaZvhfBUfZGT_NJd8J6VYHW02C6TIiPqH-4pw4rU74G1CCg1fdip-z4_oLNEaT8HL_4BZAcNLZ5tZyakTfnU9dmf7f4G3Qzqe6DUCGkBAAe5TdK3vTrowVBuhVUDEQTZgmuuUraege4THuI0oEvhmgQOC7XfyhJdR7_mUyXcZ69Yk3BOooWxNsP1KwKeOYJYImFTL4mNcIqqUutiQhyA', 7),
  ('Coastal Catch', 'food', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX03Ff5LKkS_pKfQcVFtOYjTs_CoXExoLG12KdgOQ5TIGIObe1uID5jvB6Chra8a2MHrg1lCS57bX9WQKGFhQ4pIVcpmB25vZJJPNupFHS3axPtEO_Zp9YEdPfZwdPRTqeGRCDa3zpkFM53SqoPsOZORsQN7TmoYDmSO-DYbb89HuZ7qu2XgcKhJWCePUdJgNEqnuBiMJQrUnGaZ0Ud1ujArx3GZaOcbqyYlZ5GJG05ZJdiVUl_pK-FbwtzMvPgULE61vwUho7dS4', 8),
  ('The Veranda', 'ambience', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZWLWcnGspF8BIckfaPzJ_iV2QZJFvDyFy16G4JhveAWvL1pZMkalswmIhSnH7H24JD7wpcapbPiP9GhMK11EGmqpYqeAvKRnQ757NvZ60LXWD2AO-rmZ2_dMN6tO7QTnh835_yof6cKAHj_fh1KtePxM_VdTg-hryHFHybGKae_zSDRfoBLH9p001kWT_Hs1Ij6I8H_T9LaIPIG05pFVsIw72ySxluoVHb5D_Az7Aor5MuEthFwTieNc8lh1XXZlxs_soXvR6iUk', 9),
  ('Heritage Feast', 'food', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCchDHDfCDkw7K6ELRUfQ1jkyf-ZagSDO7h3FTIo99ie8nJTqzF1puwOVNTreumE66-_QraVSvFfV5eR_XHr-KC40l3DFxswe6-ikyn0vnY4XorZzZ3OIg-yjC2pF_qwgV8qP9Vpx3gSnKnXzU2rIy6Mi8jWSJt3k6hAZQSKvnuQ2bxoq__gMbMTNFUmU1JOOHEY9vdxfDl9OdTjOB3rmxfU-oF5MwqkXWFJym141J494169_8QvqaML0xAX6eBgQ23eTOl2oRxK8g', 10),
  ('Island Refresh', 'food', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnf7E7QI6QKJApMLrUkvzLhdOlfoee_hRMPmEBoaPrE-gyX_RACUf1c3EcuqaB2Dv5witxZhDaVmf4n8O75hcqfaZw8InaL3T6CFhhrTjjdFmiAVUmK0c8z74KWHxpjbVVFzvOyJ__IDP-JUuCbBYFmWCZvSeEo1e8CWl8gU_mXqjFmkXbWorPh-roC1uo0bFnWHFruUs-YIRN2u5BIvs08blgeYa0XhbmSMQmSDUsOTYYe8orabQTdAWZx21PWO2gBUv6LXx-84E', 11),
  ('Sunlight Dining', 'ambience', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcct9nb9Nss5mmsivaWSFib_CqIxCbflUamDAosJPM8jJFr8q4W9tsjCpsdGxpQ2hB3_DPKhLF8FEheJFa_npFAK-EsWMMzGf_1M3Asiq_M1iXqDU0dpkrn2YzqQk2loCXDlDI1L5fD10sC61epddh--Na-TCqCuhnOwZJnIH_obuJoOhi-TT2igXaMZO_2rpRVeVVvfnY85YSZXuYdUaz3I2PNnccHrnfUoC06FlL-wf-nop9kraxde3JMzowzL4z6vnEPE17blU', 12);
