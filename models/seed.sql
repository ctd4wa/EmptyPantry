use emptypantry; 

insert into 
users (userEmail)
value ("rthorpe@yoursite.com");

insert into 
users (userEmail)
value ("asmith14@yaols.com");

insert into likes (L_title, L_source_url, L_image_url, l_like_Email)
           values ("Closet Cooking", "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html", 
                   "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg", 
                   "rthorpe@yoursite.com");

insert into saveforlater (S_title, S_source_url, S_image_url, S_userEmail )
           values ("Basic Chicken Quesadillas Recipe", "http://www.chow.com/recipes/29560-basic-chicken-quesadillas", 
                    "http://static.food2fork.com/29560_chicken_quesadillas_2_620f65c.jpg", 
                   "asmith14@yaols.com");                   
                     
use emptypantry;               
select * from users;
select * from likes;
select * from saveforlater;
 

select * from likes 
inner join users on  userEmail = l_like_Email
and l_like_Email = "rthorpe@yoursite.com";


select * from likes 
inner join users on  userEmail = l_like_Email
and l_like_Email = "asmith14@yaols.com";

select * from saveforlater
inner join users on  userEmail = S_userEmail
and S_userEmail = "rthorpe@yoursite.com";

select * from saveforlater
inner join users on  userEmail = S_userEmail