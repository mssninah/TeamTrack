--CREATE DATABASE IF NOT EXISTS teamtrack;
USE teamtrack;

-- Table : categories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Table : players
CREATE TABLE players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    jersey_number INT,
    email VARCHAR(100),
    facebook VARCHAR(255),
    phone_number VARCHAR(15),
    school VARCHAR(100),
    date_joining DATE,
    date_leaving DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

ALTER TABLE players
ADD COLUMN sex VARCHAR(10);

-- Table de liaison : player_categories
CREATE TABLE player_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT NOT NULL,
    category_id INT NOT NULL,
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Table : fee_events
CREATE TABLE fee_events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reason VARCHAR(255) NOT NULL,
    description TEXT,
    target_budget DECIMAL(12,2) CHECK (target_budget >= 0),
    due_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table : fee_event_categories
CREATE TABLE fee_event_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fee_event_id INT NOT NULL,
    category_id INT NOT NULL,
    amount_per_player DECIMAL(10,2) CHECK (amount_per_player > 0),
    FOREIGN KEY (fee_event_id) REFERENCES fee_events(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Table : payments
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT NOT NULL,
    fee_event_id INT NOT NULL,
    amount_paid DECIMAL(10,2) CHECK (amount_paid > 0),
    payment_date DATE NOT NULL,
    synced BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
    FOREIGN KEY (fee_event_id) REFERENCES fee_events(id) ON DELETE CASCADE
);

-- Table : event_photos
-- Stocke le chemin/URL de la photo, pas la photo elle-même
CREATE TABLE id_photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fee_event_id INT NOT NULL,
    id_player INT NOT NULL,
    photo_url VARCHAR(512) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fee_event_id) REFERENCES fee_events(id) ON DELETE CASCADE,
    FOREIGN KEY (id_player) REFERENCES players(id) ON DELETE CASCADE
);
