# PhotoSharing



# Database COnfig


CREATE TABLE uploads (
upload_id VARCHAR(50) PRIMARY KEY,
message VARCHAR(255));



CREATE TABLE pictures (
id SERIAL PRIMARY KEY,
upload_id VARCHAR(50),
picture VARCHAR(255),
CONSTRAINT upload FOREIGN KEY(upload_id) REFERENCES uploads(upload_id)
);



