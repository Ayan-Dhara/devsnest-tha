####  Postgres basic commands
#### DDL on user
create a user
```sql
CREATE USER <username>;
```
create user with password
```sql
CREATE USER <username> [ENCRYPTED | UNENCRYPTED] PASSWORD '<password>';
```
create user with superuser permission
```sql
CREATE USER <username> SUPERUSER;
```
alter user details and permissions
```sql
ALTER USER <username> <OPTIONS>;
```
remove a user
```sql
DROP USER <username>;
```
** user can be created or altered with specific permissions
** and specific permission to a database

#### DDL on database
create database
```sql
CREATE DATABASE <database>;
```
change database name
```sql
ALTER DATABASE <database> RENAME TO <database-name>;
```
change database owner
```sql
ALTER DATABASE OWNER TO <username>;
```
remove a database
```sql
DROP DATABASE <database>;
```

#### DDL for table
create a table
```sql
CREATE TABLE <tale-name> (
  [<data-type> <column-name> [<option>], ]
);
```
change table structure or options
```sql
ALTER TABLE <table-name> [<options>,];
```
delete table
```sql
DROP TABLE <table-name>;
```


#### DML for table
insert row to table
```sql
INSERT INTO <table-name> ([<col-name>, ]) VALUES [([<col-values>, ]), ];
```
remove row from table
```sql
DELETE FROM <table-name> WHERE [<condition> AND];
```
list rows from table
```sql
SELECT [<col-name> [AS <viewonly-alter-col-name>], | * ] FROM <table-name> [WHERE [<condition> AND]];
```
change table row data[s]
```sql
UPDATE <table-name> SET [<col-name> = <value>, ] WHERE [<condition> AND];
```
