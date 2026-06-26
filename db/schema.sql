CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    avatar TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER NOT NULL,
    week INTEGER NOT NULL,
    completed INTEGER DEFAULT 0,
    PRIMARY KEY (user_id, week),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert default users
INSERT OR IGNORE INTO users (id, name, avatar) VALUES (1, 'Sofía', '👧');
INSERT OR IGNORE INTO users (id, name, avatar) VALUES (2, 'Familia', '👨‍👩‍👧');

-- Seed progress
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 1, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 2, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 3, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 4, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 5, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 6, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 7, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (1, 8, 0);

INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 1, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 2, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 3, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 4, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 5, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 6, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 7, 0);
INSERT OR IGNORE INTO progress (user_id, week, completed) VALUES (2, 8, 0);

CREATE TABLE IF NOT EXISTS session_progress (
    user_id INTEGER NOT NULL,
    week INTEGER NOT NULL,
    session_num INTEGER NOT NULL,
    completed INTEGER DEFAULT 0,
    PRIMARY KEY (user_id, week, session_num),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

