create or alter PROCEDURE product_queries (
                                          @product_name    VARCHAR(255),
                                          @price     decimal(10,2),
                                          @description        VARCHAR(255),                    
                                          @StatementType  NVARCHAR (20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO products
                        (
						product_name,
                         price,
                         description
                         )
            VALUES     ( 
						@product_name,
                         @price,
                         @description)
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   products
        END

      IF @StatementType = 'Update'
        BEGIN
            UPDATE products
            SET    product_name=@product_name,
					price = @price,
                   description = @description
                  

            WHERE  product_name = @product_name
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM products
            WHERE  product_name = @product_name
        END
  END