CREATE  OR ALTER PROCEDURE USERUpdate(
@userID int = 0,  
@user_name VARCHAR(255),
    @email        VARCHAR(255),
    @password          VARCHAR(255),
	  @isAdmin BIT )

AS
BEGIN
    
    BEGIN
        UPDATE users SET 
		   user_name = @user_name,
	        email=@email,
			password=@password,
			      isAdmin = @isAdmin
	       WHERE user_id = @userID
	PRINT 'Customer Data Updated'
    END

    END