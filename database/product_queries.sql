create or alter PROCEDURE product_queries (
                                          @product_name    VARCHAR(255),
                                          @price     decimal(10,2),

                                          @description        VARCHAR(255),
                                          @category VARCHAR(255),
                                          @product_image  VARCHAR(MAX),                  

                                          @StatementType  NVARCHAR (20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO products
                        (
						product_name,
                         price,
                         description,
                         category,
                         product_image
                         )
            VALUES     ( 
						@product_name,
                         @price,
                         @description,
                         @category,
                         @product_image)
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

                   description = @description,
                   category = @category,
                  product_image= @product_image

                  

            WHERE  product_name = @product_name
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM products
            WHERE  product_name = @product_name
        END
  END
