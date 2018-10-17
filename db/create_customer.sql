INSERT into users 
(user_name, user_auth_id, email, phone_number)
VALUES
($1, $2, $3, $4)
RETURNING *;