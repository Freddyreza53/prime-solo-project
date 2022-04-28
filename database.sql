
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "daily_goal" INT DEFAULT 0,
    "easy_goal" INT DEFAULT 0,
    "medium_goal" INT DEFAULT 0,
    "hard_goal" INT DEFAULT 0
);

CREATE TABLE "login" (
    "id" SERIAL PRIMARY KEY,
    "provider" VARCHAR(80) NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "user_id" INT REFERENCES "user"
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

drop table "steps";

INSERT INTO "steps" ("step_amount", "difficulty", "user_id")
VALUES (135, 'easy', 3), (65, 'easy', 4), (112, 'easy', 3), (142, 'easy', 4);
        
INSERT INTO "steps" ("step_amount", "difficulty", "user_id")
VALUES (145, 'medium', 3), (105, 'medium', 4), (152, 'medium', 3), (172, 'medium', 4);
        
INSERT INTO "steps" ("step_amount", "difficulty", "user_id")
VALUES (195, 'hard', 1), (223, 'hard', 1), (187, 'hard', 2), (199, 'hard', 2);

UPDATE "user"
SET "daily_goal" = 10, "easy_goal" = 20, "medium_goal" = 30, "hard_goal" = 40
WHERE "id" = 1;

SELECT "steps".id, "user".username, "steps".step_amount FROM "steps"
JOIN "user" ON "user".id = "steps".user_id
WHERE "steps".difficulty = 'easy'
ORDER BY "steps".step_amount DESC;

SELECT * FROM "steps"
WHERE "id" = 1 AND "user_id" = 2;

INSERT INTO "user" ("token")
VALUES ('hello');

SELECT "id", "username" FROM "user"
WHERE "id" != 5
ORDER BY UPPER("username") ASC;