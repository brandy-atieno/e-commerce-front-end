create or alter PROCEDURE order_queries (
                                          @order_id int,
                                          @product_id  int,
                                          @user_id      int,  
										  @quantity     int,
                                          @StatementType  NVARCHAR (20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
		SET IDENTITY_INSERT orders ON
            INSERT INTO orders
                        (
						order_id,
                         product_id,
						 user_id,
						 quantity
                         
                         )
            VALUES     ( 
						@order_id,
                         @product_id,
                         @user_id,
						 @quantity)
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   orders
        END

      IF @StatementType = 'Update'
        BEGIN
            UPDATE orders
            SET    product_id=@product_id,
					user_id= @user_id,
                   quantity = @quantity
                  

            WHERE  order_id = @order_id
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM orders
            WHERE   order_id= @order_id
        END
  END