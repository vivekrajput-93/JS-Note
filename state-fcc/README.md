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


### GROUP BY 

--> The "Group by" is the clouse that used as conjuction with the aggregate function like SUM,AVG,COUNT,MIN,MAX;

## Max function :- 
     `select category, MAX(revenue) as Max_revenue from sales Group by category;`

## Min function :-
    ` select category, MIN(revenue) as Min_Revenue from sales Group by category;`

## Sum function :-
    `select category, SUM(revenue) as Total_Revenue from Sales Group by category;`

## AVG function :-
    `select category, AVG(revenue) as AVG_Reveune from sales Group by category;`

## Count function
    `select category, COUNT(revenue) as Count_Reveune from sales Group by category;`


