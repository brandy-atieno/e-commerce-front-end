create or alter PROCEDURE register_queries (
@user_name VARCHAR(255),
                                          @first_name    VARCHAR(255),
                                          @last_name     VARCHAR(255),
                                          @email        VARCHAR(255),
                                          @password          VARCHAR(255),										  
										  @isAdmin BIT ,
                                          @StatementType  NVARCHAR (20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO users
                        (
						user_name,
                         first_name,
                         last_name,
                         email,
						 password,						
						 isAdmin)
            VALUES     (
						@user_name,
                         @first_name,
                         @last_name,
                         @email,
						 @password,						
						 @isAdmin)
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   users
        END

      
    
    
    UPDATE STOREDPROCEDURE

    CREATE  OR ALTER PROCEDURE USERUpdate(
@userID int ,  
@user_name VARCHAR(255),
    @email        VARCHAR(255),
    @password          VARCHAR(255),
	  
	  )

AS
BEGIN

    BEGIN
        UPDATE users SET 
		   user_name = @user_name,
	        email=@email,
			password=@password,
			      
	       WHERE user_id = @userID
	
    END

    END


    DELETE STORED PROCEDURE

    CREATE  OR ALTER PROCEDURE USERDelete(@user_id int)
AS
BEGIN
  DELETE  FROM users  
		  	    
	       WHERE user_id = @user_id
	
    END


    EMAIL VERIFICATION
    CREATE OR ALTER PROCEDURE CHECK_EMAIL_EXISTS
(@email varchar(255)
)
AS
BEGIN
SELECT * FROM users
WHERE email=@email
END


USERNAME VERIFICATION
CREATE OR ALTER PROCEDURE CHECK_USERNAME_EXISTS
(@user_name varchar(255)
)
AS
BEGIN
SELECT * FROM users
WHERE user_name=@user_name
END