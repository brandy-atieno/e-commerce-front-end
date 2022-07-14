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

      IF @StatementType = 'Update'
        BEGIN
            UPDATE users
            SET    user_name=@user_name,
					first_name = @first_name,
                   last_name = @last_name,
                   email=@email,
				   password=@password,				   
				   isAdmin=@isAdmin

            WHERE  user_name = @user_name
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM users
            WHERE  user_name = @user_name
        END
  END