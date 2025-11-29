CREATE TABLE aggregates IF NOT EXISTS (
    id SERIAL PRIMARY KEY AUTOINCREMENT,
    location_id VARCHAR(50) NOT NULL,
    total_deposits BIGINT DEFAULT 0,
    total_quantity BIGINT DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
