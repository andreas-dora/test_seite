CREATE DATABASE azubidb
    DEFAULT CHAR SET utf8mb4;

USE azubidb;

CREATE TABLE auszubildender (
    ausid TINYINT PRIMARY KEY NOT NULL,
    vorname VARCHAR(120),
    name VARCHAR(120),

    geburtsdatum DATE
);

CREATE TABLE ausbildungsberuf(
    berufsid TINYINT PRIMARY KEY NOT NULL,
    berufsbezeichnung VARCHAR(200)
);

CREATE TABLE ausbidlungsvertrag (
    vid TINYINT PRIMARY KEY NOT NULL,
    vertragsdatum DATE,
    fk_ausid TINYINT,
    fk_berufsid TINYINT,
    CONSTRAINT fk_auszubildender
        FOREIGN KEY(fk_ausid)
            REFERENCES auszubildender (ausid),
    CONSTRAINT fk_ausbildungsberuf
        FOREIGN KEY (fk_berufsid)
        REFERENCES ausbildungsberuf (berufsid),     
    CONSTRAINT uq_fk_ausid
            UNIQUE (fk_ausid)
);

CREATE TABLE lehrfach ( 
    lehrfachid TINYINT PRIMARY KEY NOT NULL,
    lehrfach VARCHAR(200)
);


CREATE TABLE berufslehrfach (
    fk_berufsid TINYINT NOT NULL,
    fk_lehrfachid TINYINT NOT NULL,
    PRIMARY KEY (fk_berufsid, fk_lehrfachid),
    CONSTRAINT fk_asubildungsberuf2
        FOREIGN KEY (fk_berufsid)
            REFERENCES ausbildungsberuf (berufsid),
    CONSTRAINT fk_lehrfach
        FOREIGN KEY (fk_lehrfachid)
            REFERENCES lehrfach (lehrfachid)
);

CREATE TABLE mitarbeiterausbildungsbetrieb (
    mitarbeiterid TINYINT PRIMARY KEY NOT NULL,
    name VARCHAR(120),
    vorname VARCHAR(120),
    fk_mitarbeiterid TINYINT,
    CONSTRAINT fk_mitarbeiterausbildungsbetrieb
        FOREIGN KEY (fk_mitarbeiterid)
            REFERENCES mitarbeiterausbildungsbetrieb (mitarbeiterid)
 );