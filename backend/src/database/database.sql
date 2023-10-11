-- Active: 1695594793721@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    image TEXT DEFAULT('https://images.pexels.com/photos/4966168/pexels-photo-4966168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
);

drop table users;

CREATE TABLE posts(
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    creator TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DEFAULT(DATETIME('now', 'localtime')),
    image TEXT NOT NULL,
    hashtag TEXT NOT NULL,
    FOREIGN KEY (creator) REFERENCES users(id)
);

drop table posts;

CREATE TABLE comments(
    id TEXT NOT NULL UNIQUE PRIMARY KEY,
    creator_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    comment TEXT NOT NULL,
    created_at DEFAULT(DATETIME('now', 'localtime')),
    FOREIGN KEY (creator_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

drop table comments;

insert into comments(id, creator_id, post_id, comment)
VALUES
('teste123','d1e2f360-6540-4bf8-a477-f4ac7f7b5edc',
 '7e12cb7d-5dd5-45ec-bf30-da3466282d9f',
 'Testando os comentários2');

CREATE TABLE likes(
    post TEXT NOT NULL,
    user TEXT NOT NULL,
    like INTEGER NOT NULL,
    FOREIGN KEY (post) REFERENCES posts(id),
    FOREIGN KEY (user) REFERENCES users(id)
);

drop table likes;

select u.username, p.id, p.creator, p.title, p.content, p.created_at
from posts as p
inner join users as u
where p.creator = u.id;