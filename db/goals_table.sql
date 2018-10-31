CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    goal VARCHAR(200),
    author_id integer REFERENCES users(id),
    subcategory_id integer REFERENCES subcategory(id),
    category_id integer REFERENCES category(id)
)