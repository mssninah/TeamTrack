-- Already done
INSERT INTO categories (name) VALUES
('U10'),
('U12'),
('U14'),
('U16'),
('U18'),
('U20'),
('N1B'),
('N1A'),
('Senior'),
('Veteran');

-- Players
INSERT INTO players (player_name, date_of_birth, jersey_number, email, facebook, phone_number, school, date_joining, sex)
VALUES 
('John Doe', '2010-05-12', 7, 'john.doe@example.com', 'fb.com/johndoe', '0321234567', 'High School A', '2023-09-01', 'Male'),
('Jane Smith', '2008-03-22', 12, 'jane.smith@example.com', 'fb.com/janesmith', '0339876543', 'High School B', '2022-09-01', 'Female'),
('Mike Johnson', '2005-11-02', 23, 'mike.johnson@example.com', 'fb.com/mikejohnson', '0344567890', 'High School C', '2021-09-01', 'Male');

-- Player-Categories
INSERT INTO player_categories (player_id, category_id, start_date)
VALUES
(1, 1, '2023-09-01'),
(2, 3, '2022-09-01'),
(3, 5, '2021-09-01');

-- Fee Events
INSERT INTO fee_events (reason, description, target_budget, due_date)
VALUES
('Registration 2024', 'Annual player registration', 500000.00, '2024-02-28'),
('Tournament Fee', 'Regional tournament participation', 300000.00, '2024-06-15');

-- Fee Event Categories
INSERT INTO fee_event_categories (fee_event_id, category_id, amount_per_player)
VALUES
(1, 1, 20000.00),
(1, 3, 30000.00),
(2, 5, 40000.00);

-- Payments
INSERT INTO payments (player_id, fee_event_id, amount_paid, payment_date)
VALUES
(1, 1, 20000.00, '2024-01-15'),
(2, 1, 30000.00, '2024-01-20'),
(3, 2, 40000.00, '2024-05-10');

-- Event Photos
INSERT INTO id_photos (fee_event_id, id_player, photo_url)
VALUES
(1, 1, 'https://example.com/photos/event1_john.jpg'),
(2, 3, 'https://example.com/photos/event2_mike.jpg');
