select * from subcategory
where category_id = (select id from category where category_name = $1)