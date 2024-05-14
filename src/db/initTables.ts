const createUsers = `create table if not exists users(
    name varchar unique,
    email varchar unique not null,
    password varchar not null,
    created_at timestamp default current_timestamp,
    id serial primary key
)`;

const createSessions = `create table if not exists sessions(
    user_id int not null,
    session_id varchar not null unique,
    created_at timestamp default current_timestamp,
    constraint fk_user foreign key(user_id) references users(id)
)`;

const createShoppingList = `
create table if not exists shoppinglists(
    id serial primary key,
    name varchar not null
    user_id int not null,
    constraint fk_user foreign key(user_id) references users(id)
)`;
