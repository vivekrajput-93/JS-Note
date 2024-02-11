### SQL Statement ###

#### Distinct 

--> In the table, some of the values are duplicate and to select only the value only once.
--> To do, we can implement Distinct before the "select" to get list of diff values.
## Example 

    --> `select distinct viewer_id as id from Views where author_id = viewer_id ORDER BY id ASC;`

### Operator in SQL 

--> =  `Equal`
--> <>  `Not Equal`
--> Between `Between in inclusive range`
--> Like    `Search for pattern`
--> IN    `If you know the exact value you want to return for at least one of the columns`


### ORDER BY 

--> The ORDER BY keyword is used to sort the result-set.
--> Example :- 
        
         `select distinct viewer_id as id from Views where author_id = viewer_id ORDER BY id ASC;`


