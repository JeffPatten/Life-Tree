SELECT g.goal, s.subcategory_name, g.id
FROM goals g
JOIN subcategory s ON g.subcategory_id = s.id 
WHERE g.category_id = (select id from category where category_name = $1) and g.author_id = $2;