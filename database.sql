
CREATE TABLE movies (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	"movieName" VARCHAR(50) UNIQUE,
	year INT,
	format VARCHAR(10),
	actors VARCHAR(1000) ARRAY,
	"createdAt" DATE,
	"updatedAt" DATE 
);