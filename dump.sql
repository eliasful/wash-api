PGDMP                         w            wash    11.1 (Debian 11.1-3.pgdg90+1)     11.3 (Ubuntu 11.3-1.pgdg16.04+1)     E           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            F           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            G           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            H           1262    76456    wash    DATABASE     t   CREATE DATABASE wash WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';
    DROP DATABASE wash;
             postgres    false            �            1259    82321    user    TABLE       CREATE TABLE public."user" (
    email text,
    password text,
    type text,
    name text,
    phone text,
    address text,
    lat text,
    lng text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public."user";
       public         postgres    false            �            1259    82319    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public       postgres    false    199            I           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
            public       postgres    false    198            �
           2604    82324    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    198    199            B          0    82321    user 
   TABLE DATA               u   COPY public."user" (email, password, type, name, phone, address, lat, lng, id, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    199   �
       J           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 7, true);
            public       postgres    false    198            �
           2606    82329    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public         postgres    false    199            B   :  x����r�@���S�"��ž�V�$�5�V6�`D���!O?d45�Z�Pl8���w��I�d��A�!��Gnj^�+2����/U�7Oel���j�,��������V׊�"���m�)�d���������o��
J�q�R�'w��q�$L��
)�M?�dIv�M�{I�v����:A�p�PD9����sA���#aUC�<6(5����i�&˸�A�s*�Z��V�{�w�x���f����b<�K՘�E����[�u�r�bBه�i��U���`����V{R�)�'�����L=WAͱn����݇Q�&��z�Ӻoy�.V�#�]���I�o<�,~��m�P�n�\Hp��� O�/; \�D��L�����#&ZS���^�W�~��d����d�xAC�DmǷ��na9�cݶj��2�[�g�h5�-�s?�c�T2�c��xx��L?�,ca^Xљ=J5���>��-�O�v��S�C{��΢��_��ǡ��� �V���%a��u�S��p�����U*�?:0F     