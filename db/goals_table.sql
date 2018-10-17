-- This has not been created yet in the database

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    goal VARCHAR(200),
    author_id integer REFERENCES users(id),
    -- I need to add a join table for sub category and goals? do I need the category foreign key?
)