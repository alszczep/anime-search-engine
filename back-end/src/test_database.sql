--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-04-29 13:17:44

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16460)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3023 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16484)
-- Name: animes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.animes (
    mal_id integer NOT NULL,
    title character varying(255) NOT NULL
);


ALTER TABLE public.animes OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16491)
-- Name: list_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.list_items (
    like_id integer NOT NULL,
    user_id uuid NOT NULL,
    mal_id integer NOT NULL
);


ALTER TABLE public.list_items OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16489)
-- Name: list_items_like_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.list_items_like_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.list_items_like_id_seq OWNER TO postgres;

--
-- TOC entry 3024 (class 0 OID 0)
-- Dependencies: 203
-- Name: list_items_like_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.list_items_like_id_seq OWNED BY public.list_items.like_id;


--
-- TOC entry 201 (class 1259 OID 16471)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 2871 (class 2604 OID 16494)
-- Name: list_items like_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.list_items ALTER COLUMN like_id SET DEFAULT nextval('public.list_items_like_id_seq'::regclass);


--
-- TOC entry 3015 (class 0 OID 16484)
-- Dependencies: 202
-- Data for Name: animes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.animes (mal_id, title) FROM stdin;
33	Kenpuu Denki Berserk
269	Bleach
1686	Bleach Movie 1: Memories of Nobody
762	Bleach: Memories in the Rain
4835	Bleach Movie 3: Fade to Black - Kimi no Na wo Yobu
834	Bleach: The Sealed Sword Frenzy
\.


--
-- TOC entry 3017 (class 0 OID 16491)
-- Dependencies: 204
-- Data for Name: list_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.list_items (like_id, user_id, mal_id) FROM stdin;
11	88b11dca-a0f5-4bd6-8aa3-82cab720bc7c	33
12	e54700f4-e0dc-4847-ad31-99fb6d61b095	33
16	e54700f4-e0dc-4847-ad31-99fb6d61b095	269
17	aa19ffa9-c35d-4ef1-abd0-4d81402345b0	269
18	88b11dca-a0f5-4bd6-8aa3-82cab720bc7c	269
19	f1cb0dce-e38d-4783-b8d6-a10ea0e83ab5	269
20	5c1d2e30-fb4f-4798-b0db-48871d597a98	1686
22	5c1d2e30-fb4f-4798-b0db-48871d597a98	762
23	5c1d2e30-fb4f-4798-b0db-48871d597a98	4835
25	5c1d2e30-fb4f-4798-b0db-48871d597a98	834
26	5c1d2e30-fb4f-4798-b0db-48871d597a98	269
\.


--
-- TOC entry 3014 (class 0 OID 16471)
-- Dependencies: 201
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, username, email, password) FROM stdin;
5c1d2e30-fb4f-4798-b0db-48871d597a98	user1	user1@gmail.com	$2b$06$Wz2YgeLEphNS.DVhcRelTOFM.zpeO5y5WX0kLOXQ7xFhH9OKWvKv.
aa19ffa9-c35d-4ef1-abd0-4d81402345b0	user2	user2@gmail.com	$2b$06$EaAMPdK57r//iLdYwzLbAOWZMws2yvnQYdsKOuJit4Tb3YKXdZKyG
e54700f4-e0dc-4847-ad31-99fb6d61b095	user3	user3@gmail.com	$2b$06$LQinSxt2rXKa/ghmpSkZF.95vzNkiT31mnGs.VE1NKpSw0iicXAR6
88b11dca-a0f5-4bd6-8aa3-82cab720bc7c	user4	user4@gmail.com	$2b$06$FrlsERyMr4JBuR9mck4MvOEFsK3.93E0OAfr031eRaNHUannLh3qK
f1cb0dce-e38d-4783-b8d6-a10ea0e83ab5	user5	user5@gmail.com	$2b$06$KClPJ2XmeWRavmnmoQA8NuwDkyUniCM0fpG.EzZ.94wfCyiZj8Vku
\.


--
-- TOC entry 3025 (class 0 OID 0)
-- Dependencies: 203
-- Name: list_items_like_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.list_items_like_id_seq', 26, true);


--
-- TOC entry 2879 (class 2606 OID 16488)
-- Name: animes animes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.animes
    ADD CONSTRAINT animes_pkey PRIMARY KEY (mal_id);


--
-- TOC entry 2881 (class 2606 OID 16496)
-- Name: list_items list_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.list_items
    ADD CONSTRAINT list_items_pkey PRIMARY KEY (like_id);


--
-- TOC entry 2873 (class 2606 OID 16483)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 2875 (class 2606 OID 16479)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2877 (class 2606 OID 16481)
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- TOC entry 2883 (class 2606 OID 16502)
-- Name: list_items list_items_mal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.list_items
    ADD CONSTRAINT list_items_mal_id_fkey FOREIGN KEY (mal_id) REFERENCES public.animes(mal_id);


--
-- TOC entry 2882 (class 2606 OID 16497)
-- Name: list_items list_items_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.list_items
    ADD CONSTRAINT list_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


-- Completed on 2021-04-29 13:17:44

--
-- PostgreSQL database dump complete
--

