CREATE DATABASE todoAPP;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--just for testing (NOT_NECESSARY_TO_RUN)
-- test to generate the UUID values based on the combination of computer’s MAC address, current timestamp, and a random value
SELECT
    uuid_generate_v1();

-- test for random values
SELECT
    uuid_generate_v4();

--just for testing (NOT_NECESSARY_TO_RUN)
CREATE TABLE todo(
    todo_id uuid DEFAULT uuid_generate_v4 (),
    description VARCHAR(255),
    PRIMARY KEY (todo_id)
);