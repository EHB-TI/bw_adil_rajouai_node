-- Maak de database aan
CREATE DATABASE IF NOT EXISTS bw_adil_rajouai_node2;

-- Gebruik de database
USE bw_adil_rajouai_node2;

-- Maak een tabel voor gebruikers
CREATE TABLE IF NOT EXISTS gebruikers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    naam VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    leeftijd INT,
    nummer VARCHAR(20)
);

-- Maak een tabel voor berichten
CREATE TABLE IF NOT EXISTS berichten (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tekst TEXT NOT NULL,
    gebruiker_id INT,
    afzender VARCHAR(255),
    ontvanger VARCHAR(255),
    telefoonnummer VARCHAR(20),
    FOREIGN KEY (gebruiker_id) REFERENCES gebruikers(id)
);

