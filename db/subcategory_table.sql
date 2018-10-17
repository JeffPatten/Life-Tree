CREATE TABLE subcategory (
    id SERIAL PRIMARY KEY,
    subcategory_name VARCHAR(50),
    category_id integer REFERENCES category(id)
)