--
-- PostgreSQL database dump
--

\restrict ggunrxgnn6ffnQRqknsI2dhZrgnVb0yRMBpXzuGb5NsMBAGnHZhPyuSxoIBbt3F

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-10-29 14:32:47

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 16393)
-- Name: data_sources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_sources (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    url text NOT NULL,
    dataset_name character varying(255) NOT NULL,
    frequency character varying(50),
    last_fetched_at timestamp without time zone
);


ALTER TABLE public.data_sources OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16392)
-- Name: data_sources_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_sources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.data_sources_id_seq OWNER TO postgres;

--
-- TOC entry 5077 (class 0 OID 0)
-- Dependencies: 220
-- Name: data_sources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_sources_id_seq OWNED BY public.data_sources.id;


--
-- TOC entry 225 (class 1259 OID 16425)
-- Name: indicators; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.indicators (
    id integer NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(150) NOT NULL,
    description text,
    unit character varying(50),
    category character varying(100),
    source_id integer
);


ALTER TABLE public.indicators OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16424)
-- Name: indicators_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.indicators_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.indicators_id_seq OWNER TO postgres;

--
-- TOC entry 5078 (class 0 OID 0)
-- Dependencies: 224
-- Name: indicators_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.indicators_id_seq OWNED BY public.indicators.id;


--
-- TOC entry 227 (class 1259 OID 16444)
-- Name: observations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.observations (
    id bigint NOT NULL,
    region_id integer NOT NULL,
    indicator_id integer NOT NULL,
    year integer NOT NULL,
    category character varying(100) NOT NULL,
    value numeric(12,4) NOT NULL,
    source_id integer NOT NULL
);


ALTER TABLE public.observations OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16443)
-- Name: observations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.observations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.observations_id_seq OWNER TO postgres;

--
-- TOC entry 5079 (class 0 OID 0)
-- Dependencies: 226
-- Name: observations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.observations_id_seq OWNED BY public.observations.id;


--
-- TOC entry 223 (class 1259 OID 16408)
-- Name: regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regions (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    code character varying(30),
    region_type character varying(30) NOT NULL,
    parent_id integer
);


ALTER TABLE public.regions OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16407)
-- Name: regions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.regions_id_seq OWNER TO postgres;

--
-- TOC entry 5080 (class 0 OID 0)
-- Dependencies: 222
-- Name: regions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regions_id_seq OWNED BY public.regions.id;


--
-- TOC entry 219 (class 1259 OID 16389)
-- Name: staging_aps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staging_aps (
    region_name character varying(150),
    year integer,
    indicator_code character varying(50),
    category character varying(100),
    value numeric(12,4)
);


ALTER TABLE public.staging_aps OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16483)
-- Name: staging_education_staff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staging_education_staff (
    region_name text,
    region_code text,
    region_type text,
    year integer,
    education_level text,
    school_status text,
    pns_count bigint,
    pppk_count bigint,
    private_permanent_count bigint,
    permanent_subtotal_count bigint,
    foundation_count bigint,
    non_permanent_count bigint,
    permanent_count bigint,
    total_count bigint,
    non_permanent_total_count bigint,
    overall_total_count numeric(12,4)
);


ALTER TABLE public.staging_education_staff OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16478)
-- Name: staging_school_overview; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staging_school_overview (
    region_name text,
    region_code text,
    region_type text,
    year integer,
    education_level text,
    school_status text,
    school_count numeric(12,4),
    student_count numeric(12,4),
    repeater_count numeric(12,4),
    dropout_count numeric(12,4),
    school_heads_teachers_count numeric(12,4),
    education_staff_count numeric(12,4),
    class_group_count numeric(12,4),
    classroom_count numeric(12,4)
);


ALTER TABLE public.staging_school_overview OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16475)
-- Name: staging_students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staging_students (
    region_name character varying(150),
    region_code character varying(30),
    region_type character varying(30),
    year integer,
    indicator_code character varying(50),
    education_level character varying(50),
    school_status character varying(100),
    grade character varying(20),
    student_count bigint,
    percentage numeric(12,4),
    record_type character varying(20)
);


ALTER TABLE public.staging_students OWNER TO postgres;

--
-- TOC entry 4887 (class 2604 OID 16396)
-- Name: data_sources id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_sources ALTER COLUMN id SET DEFAULT nextval('public.data_sources_id_seq'::regclass);


--
-- TOC entry 4889 (class 2604 OID 16428)
-- Name: indicators id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.indicators ALTER COLUMN id SET DEFAULT nextval('public.indicators_id_seq'::regclass);


--
-- TOC entry 4890 (class 2604 OID 16447)
-- Name: observations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observations ALTER COLUMN id SET DEFAULT nextval('public.observations_id_seq'::regclass);


--
-- TOC entry 4888 (class 2604 OID 16411)
-- Name: regions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions ALTER COLUMN id SET DEFAULT nextval('public.regions_id_seq'::regclass);


--
-- TOC entry 4892 (class 2606 OID 16406)
-- Name: data_sources data_sources_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_sources
    ADD CONSTRAINT data_sources_name_key UNIQUE (name);


--
-- TOC entry 4894 (class 2606 OID 16404)
-- Name: data_sources data_sources_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_sources
    ADD CONSTRAINT data_sources_pkey PRIMARY KEY (id);


--
-- TOC entry 4900 (class 2606 OID 16437)
-- Name: indicators indicators_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.indicators
    ADD CONSTRAINT indicators_code_key UNIQUE (code);


--
-- TOC entry 4902 (class 2606 OID 16435)
-- Name: indicators indicators_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.indicators
    ADD CONSTRAINT indicators_pkey PRIMARY KEY (id);


--
-- TOC entry 4905 (class 2606 OID 16456)
-- Name: observations observations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observations
    ADD CONSTRAINT observations_pkey PRIMARY KEY (id);


--
-- TOC entry 4907 (class 2606 OID 16458)
-- Name: observations observations_region_id_indicator_id_year_category_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observations
    ADD CONSTRAINT observations_region_id_indicator_id_year_category_key UNIQUE (region_id, indicator_id, year, category);


--
-- TOC entry 4896 (class 2606 OID 16418)
-- Name: regions regions_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_name_key UNIQUE (name);


--
-- TOC entry 4898 (class 2606 OID 16416)
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (id);


--
-- TOC entry 4903 (class 1259 OID 16474)
-- Name: idx_observations_indicator; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_observations_indicator ON public.observations USING btree (indicator_id);


--
-- TOC entry 4909 (class 2606 OID 16438)
-- Name: indicators indicators_source_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.indicators
    ADD CONSTRAINT indicators_source_id_fkey FOREIGN KEY (source_id) REFERENCES public.data_sources(id);


--
-- TOC entry 4910 (class 2606 OID 16464)
-- Name: observations observations_indicator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observations
    ADD CONSTRAINT observations_indicator_id_fkey FOREIGN KEY (indicator_id) REFERENCES public.indicators(id);


--
-- TOC entry 4911 (class 2606 OID 16459)
-- Name: observations observations_region_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observations
    ADD CONSTRAINT observations_region_id_fkey FOREIGN KEY (region_id) REFERENCES public.regions(id);


--
-- TOC entry 4912 (class 2606 OID 16469)
-- Name: observations observations_source_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observations
    ADD CONSTRAINT observations_source_id_fkey FOREIGN KEY (source_id) REFERENCES public.data_sources(id);


--
-- TOC entry 4908 (class 2606 OID 16419)
-- Name: regions regions_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.regions(id);


-- Completed on 2026-10-29 14:32:47

--
-- PostgreSQL database dump complete
--

\unrestrict ggunrxgnn6ffnQRqknsI2dhZrgnVb0yRMBpXzuGb5NsMBAGnHZhPyuSxoIBbt3F

