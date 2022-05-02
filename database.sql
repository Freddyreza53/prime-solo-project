
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "daily_goal" INT DEFAULT 0,
    "easy_goal" INT DEFAULT 0,
    "medium_goal" INT DEFAULT 0,
    "hard_goal" INT DEFAULT 0
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "display_name" VARCHAR(80),
    "first_name" VARCHAR(80),
    "last_name" VARCHAR(80),
    "email" VARCHAR(120) UNIQUE,
    "picture" VARCHAR(1200)
);

CREATE TYPE "difficulty_list" AS ENUM ('easy', 'medium', 'hard');

CREATE TABLE "steps" (
    "id" SERIAL PRIMARY KEY,
    "step_amount" INT default 0,
    "difficulty" "difficulty_list" NOT NULL,
    "user_id" INT REFERENCES "user"
);

-- Dummy Data

-- INSERT INTO "steps" ("step_amount", "difficulty", "user_id")
-- VALUES (135, 'easy', 3), (65, 'easy', 4), (112, 'easy', 3), (142, 'easy', 4);
        
-- INSERT INTO "steps" ("step_amount", "difficulty", "user_id")
-- VALUES (145, 'medium', 3), (105, 'medium', 4), (152, 'medium', 3), (172, 'medium', 4);
        
-- INSERT INTO "steps" ("step_amount", "difficulty", "user_id")
-- VALUES (195, 'hard', 1), (223, 'hard', 1), (187, 'hard', 2), (199, 'hard', 2);
